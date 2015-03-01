"use strict";
// var ReactTools = require("react-tools");
var babel = require("babel-core");
var coffeeReact = require("coffee-react");

module.exports = {
  process: function(src, filename) {
    // Ignore all files within node_modules
    // babel files can be .js, .es, .jsx or .es6
    if (filename.indexOf("node_modules") === -1 && babel.canCompile(filename)) {
      return babel.transform(src, { filename: filename }).code;
    } else if(filename.match(/\.coffee$/) || filename.match(/\.cjsx$/)) {
      // Coffee or cjsx
      return coffeeReact.compile(src);
    } else {
      // No coffee and no babel (probably will never get here?)
      return src;
    }
  }
};
