/* global describe, it, before, expect */

var Test = require('../lib/test');

describe('toreparing a response', function() {
  
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
