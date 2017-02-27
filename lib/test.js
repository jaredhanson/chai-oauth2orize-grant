/**
 * Module dependencies.
 */
var Request = require('./request')
  , Response = require('./response');


/**
 * Creates an instance of `Test`.
 *
 * @constructor
 * @api protected
 */
function Test(mod) {
  this._mod = mod;
}

/**
 * Register a callback to be invoked when authorization request is prepared.
 *
 * @param {Function} cb
 * @return {Test} for chaining
 * @api public
 */
Test.prototype.req = function(cb) {
  this._req = cb;
  return this;
};

/**
 * Register a callback to be invoked when OAuth 2.0 transaction is prepared.
 *
 * @param {Function} cb
 * @return {Test} for chaining
 * @api public
 */
Test.prototype.txn = function(cb) {
  this._txn = cb;
  return this;
};

/**
 * Register a callback to be invoked when OAuth 2.0 authorization response is
 * prepared.
 *
 * @param {Function} cb
 * @return {Test} for chaining
 * @api public
 */
Test.prototype.res = function(cb) {
  this._res = cb;
  return this;
};

/**
 * Register a callback to be invoked after authorization request is parsed.
 *
 * @param {Function} cb
 * @return {Test} for chaining
 * @api public
 */
Test.prototype.parse = function(cb) {
  this._parse = cb;
  return this;
};

/**
 * Register a callback to be invoked when grant `end()`s response.
 *
 * @param {Function} cb
 * @return {Test} for chaining
 * @api public
 */
Test.prototype.end = function(cb) {
  this._end = cb;
  return this;
};

/**
 * Register a callback to be invoked when grant calls `next()`.
 *
 * @param {Function} cb
 * @return {Test} for chaining
 * @api public
 */
Test.prototype.next = function(cb) {
  this._next = cb;
  return this;
};

/**
 * Dispatch authorization request to grant.
 *
 * @api public
 */
Test.prototype.authorize = function() {
  var self = this
    , req = new Request()
    , before = this._req;
  
  function ready() {
    var fn = self._mod.request
      , arity = fn.length;
    
    try {
      if (arity == 1) { // sync
        var o = fn(req);
        if (!self._parse) { throw new Error('request parsing not expected'); }
        self._parse.call(this, null, o);
      } else { // async
        fn(req, function(err, o) {
          if (!self._parse) { throw new Error('request parsing not expected'); }
          self._parse.call(this, err, o);
        });
      }
    } catch (ex) {
      if (!self._parse) { throw new Error('request parsing not expected'); }
      self._parse.call(this, ex);
    }
  }
  
  if (before && before.length == 2) {
    before(req, ready);
  } else if (before) {
    before(req);
    ready();
  } else {
    ready();
  }
};

/**
 * Dispatch transaction to grant for authorization.
 *
 * @api public
 */
Test.prototype.decide = function(complete) {
  var self = this
    , txn = { protocol: 'oauth2' }
    , before = this._txn
    , complete = complete || function(cb){ return cb(); }
  
  function ready() {
    var res = new Response(function() {
      if (!self._end) { throw new Error('res#end should not be called'); }
      self._end.call(this, res);
    });
    
    if (self._res) { self._res(res); }
    
    function next(err) {
      if (!self._next) { throw new Error('next should not be called'); }
      self._next.call(this, err);
    }
    
    var fn = self._mod.response;
    var arity = fn.length;
    if (arity == 4) {
      fn(txn, res, complete, next);
    } else {
      fn(txn, res, next);
    }
  }
  
  if (before && before.length == 2) {
    before(txn, ready);
  } else if (before) {
    before(txn);
    ready();
  } else {
    ready();
  }
};

Test.prototype.error = function(err) {
  var self = this
    , txn = { protocol: 'oauth2' }
    , before = this._txn;
  
  function ready() {
    var res = new Response(function() {
      if (!self._end) { throw new Error('res#end should not be called'); }
      self._end.call(this, res);
    });
    
    if (self._res) { self._res(res); }
    
    function next(err) {
      if (!self._next) { throw new Error('next should not be called'); }
      self._next.call(this, err);
    }
    
    var fn = self._mod.error;
    fn(err, txn, res, next);
  }
  
  if (before && before.length == 2) {
    before(txn, ready);
  } else if (before) {
    before(txn);
    ready();
  } else {
    ready();
  }
};


/**
 * Expose `Test`.
 */
module.exports = Test;
