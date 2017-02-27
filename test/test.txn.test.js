/* global describe, it, before, expect */

var Test = require('../lib/test');

describe('preparing a transaction', function() {
  
  var grant = {};
  grant.request = function(req) {};
  grant.response = function(txn, res, next) {
    res.end(txn.ext.hello);
  };
  
  describe('sync', function() {
    
    describe('and dispatches', function() {
      var res;
    
      before(function(done) {
        var test = new Test(grant);
        test.txn(function(txn) {
          txn.ext = {};
          txn.ext.hello = 'World';
        }).end(function(r) {
          res = r;
          done();
        }).decide();
      });
    
      it('should send response', function() {
        expect(res.body).to.be.equal('World');
      });
    });
    
  });
  
  describe('async', function() {
    
    describe('and dispatches', function() {
      var res;
    
      before(function(done) {
        var test = new Test(grant);
        test.txn(function(txn, done) {
          txn.ext = {};
          txn.ext.hello = 'World';
          process.nextTick(done);
        }).end(function(r) {
          res = r;
          done();
        }).decide();
      });
    
      it('should send response', function() {
        expect(res.body).to.be.equal('World');
      });
    });
    
  });
  
});


describe('preparing a transaction for error handling', function() {
  
  var grant = {};
  grant.request = function(req) {};
  grant.response = function(txn, res, next) {
    res.end(txn.ext.hello);
  };
  grant.error = function(err, txn, res, next) {
    res.end('Error: ' + err.message);
  };
  
  describe('sync', function() {
    
    describe('and dispatches', function() {
      var res;
    
      before(function(done) {
        var test = new Test(grant);
        test.txn(function(txn) {
          txn.ext = {};
          txn.ext.hello = 'World';
        }).end(function(r) {
          res = r;
          done();
        }).error(new Error('Danger, Will Robinson!'));
      });
    
      it('should send response', function() {
        expect(res.body).to.be.equal('Error: Danger, Will Robinson!');
      });
    });
    
  });
  
  describe('async', function() {
    
    describe('and dispatches', function() {
      var res;
    
      before(function(done) {
        var test = new Test(grant);
        test.txn(function(txn, done) {
          txn.ext = {};
          txn.ext.hello = 'World';
          process.nextTick(done);
        }).end(function(r) {
          res = r;
          done();
        }).error(new Error('Danger, Will Robinson!'));
      });
    
      it('should send response', function() {
        expect(res.body).to.be.equal('Error: Danger, Will Robinson!');
      });
    });
    
  });
  
});
