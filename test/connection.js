/* global describe,it,afterEach,beforeEach */
var Hapi = require('hapi')
var assert = require('assert')

describe('Testing Hapi RethinkDB plugin', function () {
  var server = null

  beforeEach(function () {
    server = new Hapi.Server()
  })

  afterEach(function () {
    server = null
  })

  it('should be able to register the plugin with default options', function (done) {
    server.register({
      register: require('../')
    }, function () {
      assert(server.plugins['hapi-rethinkdb'].connection, 'No RethinkDB connection returned')
      assert(
        server.plugins['hapi-rethinkdb'].connection.host === 'localhost',
        'Connected to incorrect address'
      )
      assert(
        server.plugins['hapi-rethinkdb'].connection.port === 28015,
        'Connected to incorrect port'
      )
      done()
    })
  })

  it('should have connected', function (done) {
    server.register({
      register: require('../')
    }, function () {
      assert(server.plugins['hapi-rethinkdb'].connection.open, 'Did not connect')
      done()
    })
  })

  it('should take URLs as parameters', function (done) {
    server.register({
      register: require('../'),
      options: { url: 'rethinkdb://localhost:28015' }
    }, function () {
      assert(
        server.plugins['hapi-rethinkdb'].connection.host === 'localhost',
        'Connected to incorrect address'
      )
      assert(
        server.plugins['hapi-rethinkdb'].connection.port === 28015,
        'Connected to incorrect port'
      )
      done()
    })
  })

  it('should take URLs as parameters and use 28015 port as default', function (done) {
    server.register({
      register: require('../'),
      options: { url: 'rethinkdb://localhost' }
    }, function () {
      assert(
        server.plugins['hapi-rethinkdb'].connection.host === 'localhost',
        'Connected to incorrect address'
      )
      assert(
        server.plugins['hapi-rethinkdb'].connection.port === 28015,
        'Connected to incorrect port'
      )
      done()
    })
  })

})
