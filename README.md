hapi-rethinkdb
==============

Hapi (^8.0) plugin for `rethinkdb` [native driver](https://www.npmjs.com/package/rethinkdb).

Register plugin
---------------

You can pass as options either an URL (all are optionals, defaults to: no password, localhost and ) or `host` and `port`. Obviously passing an URL is way more convenient (specially for 12factor-compliant apps).

    var Hapi = require('hapi');
    var server = new Hapi.Server();

    server.register({
      register: require('hapi-rethinkdb'),
      opts: { url: 'rethinkdb://:password@domain.tld:port/dbname' }
    }, function (err) {
      if (err) console.error(err);
    });

Use plugin
----------

The connection object returned by `rethinkdb.connect` callback is exposed on `server.plugins['hapi-rethinkdb'].client` and binded to the context on routes and extensions as `this.rethinkdb`. You can find the `rethinkdb` library itself exposed on `server.plugins['hapi-rethinkdb'].library`.

License
-------

Licensed under the terms of the ISC. A copy of the license can be found in the file `LICENSE`.

© 2015, jose-Luis Rivas `<me@ghostbar.co>`
