'use strict';

const  listEvents = require('./handlers/list-events');
const  dayEvents = require('./handlers/day-events');

exports.register = function (server, options, next) {

  server.route(
    [
      {
        method: 'GET',
        path: '/events/list',
        config: {
          description: 'Return the list of all the events',
          handler: listEvents
        }
      },

      {
        method: 'GET',
        path: '/events/{year}/{month}/{day}',
        config: {
          description: 'return the list of events on a specific day',
          handler: dayEvents
        }
      }
    ]
  );

  return next();
};

exports.register.attributes = {
  name: 'API'
};
