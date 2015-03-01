'use strict';

var rethink = require('rethinkdb');

exports.register = function (plugin, opts, next) {
  opts = opts || {};
  if (!opts.url) {
    opts.port = ops.port || 28015;
    opts.host = opts.host || 'localhost';
    opts.db = opts.db || 'test';
  } else {
    var url = require('url').parse(opts.url);
    opts.port = url.port || 28015;
    opts.host = url.hostname || 'localhost';

    if (url.auth)
      opts.authKey = url.auth.split(':')[1];
  }

  rethink.connect(opts, function (err, conn) {
    if (err) {
      plugin.log(['hapi-rethinkdb', 'error'], err.message);
      console.error(err);
      return next(err);
    }

    plugin.log(['hapi-rethinkdb', 'info'], 'RethinkDB connection established');
    return next();

    plugin.expose('client', client);
    plugin.expose('library', rethink);
    plugin.bind({ rethinkdb: client });
  });
};

exports.register.attributes = {
  pkg: require('./package.json')
};
