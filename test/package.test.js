/* global describe, it, expect */

var helper = require('..')
  , Test = require('../lib/test');

describe('chai-oauth2orize-grant', function() {
  
  it('should export function', function() {
    expect(helper).to.be.a('function');
  });
  
  describe('used as a chai helper', function() {
    var chai = {};
    helper(chai);
  
    it('should add oauth2orize helper to chai', function() {
      expect(chai.oauth2orize).to.be.an('object');
      expect(chai.oauth2orize.grant).to.be.a('function');
    });
  
    describe('when invoked', function() {
      var test = chai.oauth2orize.grant({});
    
      it('should return test wrapper', function() {
        expect(test).to.be.an.instanceOf(Test);
      });
    });
  });
  
});
