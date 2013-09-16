var Test = require('../lib/test');

describe('test grant that calls parse', function() {
  
  var grant = {};
  grant.request = function(req) {
    return { foo: 'bar' };
  }
  grant.response = function(txn, res, next) {}
  
  describe('with a parse callback', function() {
    var err, obj;
  
    before(function(done) {
      var test = new Test(grant);
      test.parse(function(e, o) {
        err = e;
        obj = o;
        done();
      }).authorize();
    });
  
    it('should not error', function() {
      expect(err).to.be.null;
    });
  
    it('should parse', function() {
      expect(obj.foo).to.be.equal('bar');
    });
  });
  
  describe('without an parse callback', function() {
    it('should throw an error', function() {
      expect(function() {
        var test = new Test(grant);
        test.authorize();
      }).to.throw(Error, 'request parsing not expected');
    });
  });
  
});
