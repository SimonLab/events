'use strict';

// const listEventsFile = require('../../database-helpers/file/list-events');
const listEvents = require('../../database-helpers/elasticsearch/list-events');
module.exports = function (request, reply) {

  listEvents(function(err, events) {

    return reply(events);
  })

}
