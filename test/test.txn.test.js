var Test = require('../lib/test');

describe('test grant that prepares transaction', function() {
  
  var grant = {};
  grant.request = function(req) {}
  grant.response = function(txn, res, next) {
    res.end(txn.ext.hello);
  }
  
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
