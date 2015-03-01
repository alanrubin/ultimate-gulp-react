"use strict";

var React = require("react"),
    RouteHandler = require("react-router").RouteHandler,
    Header = require("./header"),
    Footer = require("./footer");

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Header/>
        <RouteHandler/>
        <Footer/>
      </div>
    );
  }
});

module.exports = App;
