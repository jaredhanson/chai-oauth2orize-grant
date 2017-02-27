/* global describe, it, before, expect */

var Test = require('../lib/test');

describe('preparing a response', function() {
  
  var grant = {};
  grant.request = function(req) {};
  grant.response = function(txn, res, next) {
    res.end();
  };
  
  describe('sync', function() {
    
    describe('and dispatches', function() {
      var pres, eres;
    
      before(function(done) {
        var test = new Test(grant);
        test.res(function(res) {
          pres = res;
        }).end(function(r) {
          eres = r;
          done();
        }).decide();
      });
    
      it('should get same response from preparation and end', function() {
        expect(pres).to.be.equal(eres);
      });
    });
    
  });
  
});


describe('preparing a response for error handling', function() {
  
  var grant = {};
  grant.request = function(req) {};
  grant.response = function(txn, res, next) {
    res.end();
  };
  grant.error = function(err, txn, res, next) {
    res.end('Error: ' + err.message);
  };
  
  describe('sync', function() {
    
    describe('and dispatches', function() {
      var pres, eres;
    
      before(function(done) {
        var test = new Test(grant);
        test.res(function(res) {
          pres = res;
        }).end(function(r) {
          eres = r;
          done();
        }).error(new Error('Danger, Will Robinson!'));
      });
    
      it('should get same response from preparation and end', function() {
        expect(pres).to.be.equal(eres);
      });
    });
    
  });
  
});
