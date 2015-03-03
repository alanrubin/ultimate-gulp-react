"use strict";

var React = require("react"),
    Router = require("react-router");

var Header = React.createClass({

  // Sample ES6 syntax
  render() {
    return (
      <div id="header" className="l-side-spacing">
        <ul className="nav nav-pills pull-right">
          <li className="active"><Router.Link to="app">Home</Router.Link></li>
          <li><Router.Link to="about">About</Router.Link></li>
          <li><Router.Link to="contact">Contact</Router.Link></li>
        </ul>
        <h3 className="text-muted">React Webapp</h3>
      </div>
    );
  }

});

module.exports = Header;
