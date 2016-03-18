'use strict';

const ClientES = require('./client')(process.env.SEARCHBOX_URL);

const listEvents = function(next) {
  let events = 0;

  ClientES.search({
    index: process.env.ES_INDEX,
    type: process.env.ES_TYPE_LM,
    scroll: '30s',
    search_type: 'scan',
    size: 1000,
    body: {
      query: {
        match_all: {},
      }
    }
  }, function getMoreUntilDone(error, response) {

    var listEvents = [];

    response.hits.hits.forEach(function (event) {

      listEvents.push(event._source)
      events += 1;
    });

    if (response.hits.total !== events) {
      ClientES.scroll({
        scrollId: response._scroll_id,
        scroll: '30s',
        size: 1000,
      }, getMoreUntilDone);
    } else {

      const listEventsSorted = listEvents.sort(function(a,b){
        return a.dateTimestamp > b.dateTimestamp;
      })
      return next(error, listEventsSorted);
    }
  })
}

module.exports = listEvents;
