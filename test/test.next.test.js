var Test = require('../lib/test');

describe('test grant that calls next', function() {
  
  var grant = {};
  grant.request = function(req) {}
  grant.response = function(txn, res, next) {
    next()
  }
  
  describe('with a next callback', function() {
    var err;
  
    before(function(done) {
      var test = new Test(grant);
      test.next(function(e) {
        err = e;
        done();
      }).decide();
    });
  
    it('should call next callback', function() {
      expect(err).to.be.undefined;
    });
  });
  
  describe('without a next callback', function() {
    it('should throw an error', function() {
      expect(function() {
        var test = new Test(grant);
        test.decide();
      }).to.throw(Error, 'next should not be called');
    });
  });
  
});

describe('test grant that calls next with error', function() {
  
  var grant = {};
  grant.request = function(req) {}
  grant.response = function(txn, res, next) {
    next(new Error('oops'))
  }
  
  describe('with a next callback', function() {
    var err;
  
    before(function(done) {
      var test = new Test(grant);
      test.next(function(e) {
        err = e;
        done();
      }).decide();
    });
  
    it('should call next callback', function() {
      expect(err).to.be.an.instanceOf(Error);
      expect(err.message).to.equal('oops');
    });
  });
  
});
