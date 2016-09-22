'use strict';

var sinon   = require('sinon');
var assert  = require('assert');
var config  = require('../config');
config.init(require('../config.json'));

var logger = require('../logger');

describe('Logger', () => {

  before(() => {
    logger.logger = {
      debug: sinon.spy(),
      info: sinon.spy(),
      error: sinon.spy()
    };
  });

  beforeEach(() => {
    logger.logger.debug.reset();
    logger.logger.info.reset();
    logger.logger.error.reset();
  });

  describe('#trace()', () => {

    it('should log trace when enabled', () => {
      logger.enabled = true;
      logger.trace();
      assert(logger.logger.debug.calledOnce);
    });

    it('should not log trace when disabled', () => {
      logger.enabled = false;
      logger.trace();
      assert(!logger.logger.debug.called);
    });

  });

  describe('#info()', () => {

    it('should log info when enabled', () => {
      logger.enabled = true;
      logger.info();
      assert(logger.logger.info.calledOnce);
    });

    it('should not log info when disabled', () => {
      logger.enabled = false;
      logger.info();
      assert(!logger.logger.info.called);
    });

  });

  describe('#error()', () => {

    it('should log error when enabled', () => {
      logger.enabled = true;
      logger.error();
      assert(logger.logger.error.calledOnce);
    });

    it('should not log error when disabled', () => {
      logger.enabled = false;
      logger.error();
      assert(!logger.logger.error.called);
    });

  });

});
