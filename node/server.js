'use strict';

var restify = require('restify');
var config = require('./config');
var logger = require('./logger');
var routes = require('./routes');

var app = restify.createServer();
module.exports = app;

app.on('uncaughtException', (req, res, next, err) => {
  logger.error(err.stack);
  res.send(err);
});

app.routeUrl = function(routeName, params) {
  var route = routes.filter((el) => {
    return el.name == routeName;
  });

  var path = "";
  if (route && route[0].hasOwnProperty("path")) {
    path = route[0].path;
  }

  if (params) {
    var regex = /:\w+/g;
    var arr;
    var newpath = path;
    while ((arr = regex.exec(path)) !== null) {
      var v = arr[0];
      var f = v.substring(1);
      if (params.hasOwnProperty(f) && params[f] != undefined)
        newpath = newpath.replace(v, params[f]);
    }
    path = newpath;
  }

  return path;
};

for (var i = 0; i < routes.length; i++) {
  var route = routes[i];

  var args = [];
  args.push({ name: route.name, path: route.path });
  if (route.middleware) args.push(route.middleware);
  args.push(route.handler.handle.bind(route.handler));

  app[route.method.toLowerCase()].apply(app, args);
}
