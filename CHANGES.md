CHANGES
=======

v2.0.1
------
* `peerDependency` on `hapi` was stuck at `8.x.x`, now is more ample and correct.
* Incorrectly documented the expose of the `rethinkdb` library, added an expose to cover both cases documented with `library` and `rethinkdb` as variable.

v2.0.0
------
* `hapi-rethinkdb` has `rethinkdb` as a `peerDependency`, which allows the developer to install whatever `rethinkdb` deems correct but requires as well to have it in the application's own `package.json` listed as a dependency.
* The connection object now is available as `server.plugins['hapi-rethinkdb'].connection` and `this.rethinkdbConn` when in the context of a route handler.
* The RethinkDB library object now is available as `server.plugins['hapi-rethinkdb'].library` and `this.rethinkdb` when in the context of a route handler.
