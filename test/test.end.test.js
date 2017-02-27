/* global describe, it, before, expect */

var Test = require('../lib/test');

describe('test grant that calls end', function() {
  
  var grant = {};
  grant.request = function(req) {};
  grant.response = function(txn, res, next) {
    res.end('Hello');
  };
  
  describe('with an end callback', function() {
    var res;
  
    before(function(done) {
      var test = new Test(grant);
      test.end(function(r) {
        res = r;
        done();
      }).decide();
    });
  
    it('should call end callback', function() {
      expect(res.statusCode).to.be.equal(200);
      expect(res.body).to.be.equal('Hello');
    });
  });
  
  describe('without an end callback', function() {
    it('should throw an error', function() {
      expect(function() {
        var test = new Test(grant);
        test.decide();
      }).to.throw(Error, 'res#end should not be called');
    });
  });
  
});


describe('test grant that calls end after error', function() {
  
  var grant = {};
  grant.request = function(req) {};
  grant.error = function(err, txn, res, next) {
    res.end('Error: ' + err.message);
  };
  
  describe('with an end callback', function() {
    var res;
  
    before(function(done) {
      var test = new Test(grant);
      test.end(function(r) {
        res = r;
        done();
      }).error(new Error('Danger, Will Robinson!'));
    });
  
    it('should call end callback', function() {
      expect(res.statusCode).to.be.equal(200);
      expect(res.body).to.be.equal('Error: Danger, Will Robinson!');
    });
  });
  
  describe('without an end callback', function() {
    it('should throw an error', function() {
      expect(function() {
        var test = new Test(grant);
        test.error(new Error('Danger, Will Robinson!'));
      }).to.throw(Error, 'res#end should not be called');
    });
  });
  
});
