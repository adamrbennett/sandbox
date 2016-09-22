'use strict';

var DiscoveryHandler = require('./handlers/DiscoveryHandler');

module.exports = [
  {
    name:     "root",
    method:   "get",
    path:     "/",
    handler:  new DiscoveryHandler()
  }
];
