'use strict';

var config = require('./config');
config.init(require('./config.json'));

var server = require('./server');
server.listen(config.app.port, () => {
  console.log(`Listening on port ${config.app.port}`);
});
