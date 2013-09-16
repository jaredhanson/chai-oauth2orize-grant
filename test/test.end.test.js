var Test = require('../lib/test');

describe('test grant that calls end', function() {
  
  var grant = {};
  grant.request = function(req) {}
  grant.response = function(txn, res, next) {
    res.end('Hello');
  }
  
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
