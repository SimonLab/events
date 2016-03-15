'use strict';


const listEvents = function (next) {

  const events = require('./events.json');
  return next(null,events);
}

module.exports = listEvents;
