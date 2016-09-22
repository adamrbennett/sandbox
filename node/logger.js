'use strict';

var config = require('./config');
var winston = require('winston');

module.exports = {
  logger: new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({ level: 'debug' })
    ]
  }),

  enabled: config.log.enabled,

  trace: function(msg) {
    if (this.enabled)
      this.logger.debug(msg);
  },

  info: function(msg) {
    if (this.enabled)
      this.logger.info(msg);
  },

  error: function(msg) {
    if (this.enabled)
      this.logger.error(msg);
  }
};
