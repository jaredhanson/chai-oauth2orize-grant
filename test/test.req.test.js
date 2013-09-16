var Test = require('../lib/test');

describe('test grant that prepares request', function() {
  
  var grant = {};
  grant.request = function(req) {
    return { hello: req.query.hello };
  }
  grant.response = function(txn, res, next) {}
  
  describe('sync', function() {
    
    describe('and dispatches', function() {
      var err, obj;
    
      before(function(done) {
        var test = new Test(grant);
        test.req(function(req) {
          req.query = {};
          req.query.hello = 'World';
        }).parse(function(e, o) {
          err = e;
          obj = o;
          done();
        }).authorize();
      });
    
      it('should not error', function() {
        expect(err).to.be.null;
      });
    
      it('should prepare request', function() {
        expect(obj.hello).to.be.equal('World');
      });
    });
    
  });
  
  describe('async', function() {
    
    describe('and dispatches', function() {
     var err, obj;
    
      before(function(done) {
        var test = new Test(grant);
        test.req(function(req, done) {
          req.query = {};
          req.query.hello = 'World';
          process.nextTick(done);
        }).parse(function(e, o) {
          err = e;
          obj = o;
          done();
        }).authorize();
      });
    
      it('should not error', function() {
        expect(err).to.be.null;
      });
    
      it('should prepare request', function() {
        expect(obj.hello).to.be.equal('World');
      });
    });
    
  });
  
});
