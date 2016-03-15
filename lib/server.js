'use strict';

const Hapi = require('hapi');
const Api = require('./api/api');

exports.init = function (port, next) {
  var server = new Hapi.Server();
  server.connection({port: port});

  var plugins = [
    Api
  ];

  server.register(plugins, function (err) {

    if (err) {
      next(err)
    }

    server.start(function (err) {
      return next(err, server);
    });
  });
};
