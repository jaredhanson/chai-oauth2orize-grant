module.exports = function(chai, _) {
  var Test = require('./test');
  
  chai.grant = function(mod) {
    return new Test(mod);
  };
};
