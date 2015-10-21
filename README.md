hapi-rethinkdb
==============

Hapi (>=8.0) plugin for `rethinkdb` [native driver](https://www.npmjs.com/package/rethinkdb).

Install hapi-rethinkdb
----------------------

    npm install --save rethinkdb hapi-rethinkdb

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

The connection object returned by `rethinkdb.connect` callback is exposed on `server.plugins['hapi-rethinkdb'].connection` and binded to the context on routes and extensions as `this.rethinkdbConn`. You can find the `rethinkdb` library itself exposed on `server.plugins['hapi-rethinkdb'].library` or binded to the context on routes and extensions as `this.rethinkdb`.

From a handler you can use it like:

    function handler (request, response) {
      var r = request.server.plugins['hapi-rethinkdb'].rethinkdb;
      // r === this.rethinkdb;

      var conn = request.server.plugins['hapi-rethinkdb'].connection;
      // conn === this.rethinkdbConn;

      r.table('example').run(conn, function (err, cursor) {
        cursor.each(console.log);
      });
    }

License
-------

Licensed under the terms of the ISC. A copy of the license can be found in the file `LICENSE`.

© 2015, Jose-Luis Rivas `<me@ghostbar.co>`
