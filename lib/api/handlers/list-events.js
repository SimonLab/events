'use strict';

const listEvents = require('../../database-helpers/file/list-events');

module.exports = function (request, reply) {

  listEvents(function(err, events) {

    return reply(events);
  })

}
