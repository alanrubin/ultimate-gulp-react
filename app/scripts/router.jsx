"use strict";

var React = require("react"),
 Router = require("react-router"),
 App = require("./components/app"),
 Home = require("./components/home");

var routes = (
  <Router.Route name="app" path="/" handler={App}>
     <Router.DefaultRoute handler={Home}/>
    </Router.Route>
    );

exports.start = function() {
  Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
  });
};
