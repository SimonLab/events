'use strict';

const  listEvents = require('./handlers/list-events');

exports.register = function (server, options, next) {

  server.route({
    method: 'GET',
    path: '/events/list',
    config: {
      description: 'return the list of events',
      handler: listEvents
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'API'
};
