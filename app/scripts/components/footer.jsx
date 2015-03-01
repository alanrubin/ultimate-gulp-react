"use strict";

var React = require("react");

var Footer = React.createClass({

  render: function() {
    return (
      <div className="footer">
        <p><span className="glyphicon glyphicon-heart"></span> from the Yeoman team</p>
      </div>
    );
  }

});

module.exports = Footer;
