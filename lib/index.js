module.exports = function(chai, _) {
  var Test = require('./test');
  
  chai.oauth2orize = chai.oauth2orize || {};
  chai.oauth2orize.grant = function(mod) {
    return new Test(mod);
  };
};
