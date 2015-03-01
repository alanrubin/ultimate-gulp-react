"use strict";
// var ReactTools = require("react-tools");
var Babel = require("babel-core");

module.exports = {
  process: function(src, filename) {
    // Ignore all files within node_modules
    // babel files can be .js, .es, .jsx or .es6
    if (filename.indexOf("node_modules") === -1 && Babel.canCompile(filename)) {
      return Babel.transform(src, { filename: filename }).code;
    }

    return src;
    // return ReactTools.transform(src);
  }
};
