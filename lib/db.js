/**
 * aonx - copyright(c) 2011 truepattern.
 */
var mongoose      = require('mongoose');

// config to carry the following attributes
//
// - url      mongodb url
//
exports.init = function(config) {
  mongoose.connect(config.url);
};