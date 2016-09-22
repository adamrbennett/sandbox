'use strict';

var HttpStatus = require('http-status-codes');
var Handler = require('./Handler');

class DiscoveryHandler extends Handler {

  constructor() {
    super();
  }

  handle(req, res, next) {
    super.handle(req, res, next);

    var server = require('../server');

    var resource = {
      _links: {
        self: {
          href: server.routeUrl("root")
        }
      }
    };

    res.send(HttpStatus.OK, resource);
    return next();
  }

}

module.exports = DiscoveryHandler;
