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

describe('test grant that calls async parse', function() {
  
  var grant = {};
  grant.request = function(req, done) {
    return done(null, { foo: 'bar' });
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
  
});

describe('test grant that calls parse that throws an exception', function() {
  
  var grant = {};
  grant.request = function(req, done) {
    throw new Error('something was thrown');
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
      expect(err).to.be.an.instanceOf(Error);
      expect(err.message).to.equal('something was thrown');
    });
  });
  
});

describe('test grant that calls async parse that encounters an error', function() {
  
  var grant = {};
  grant.request = function(req, done) {
    return done(new Error('something went wrong'));
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
      expect(err).to.be.an.instanceOf(Error);
      expect(err.message).to.equal('something went wrong');
    });
  });
  
});

