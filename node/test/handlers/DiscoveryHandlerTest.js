'use strict';

var sinon   = require('sinon');
var assert  = require('assert');
var config  = require('../../config');

// disable logging for tests
config.log.enabled = false;

var DiscoveryHandler = require('../../handlers/DiscoveryHandler');

describe('DiscoveryHandler', () => {

  before(() => {
    this.req = {params:{}};
    this.res = {};
    this.next = sinon.spy();
  });

  beforeEach(() => {
    this.next.reset();
  });

  describe('#handle()', () => {

    it('should respond with HTTP 200', () => {
      // given
      // ...a response with send method
      this.res.send = sinon.spy((status) => {
        assert(status === 200);
      });

      // ...and a handler
      let handler = new DiscoveryHandler();

      // when a valid request is handled
      handler.handle(this.req, this.res, this.next);

      // then send and next should both be called once
      assert(this.res.send.calledOnce);
      assert(this.next.calledOnce);
    });

  });

});
