/* global jest describe it expect */
"use strict";

jest.dontMock("./header.jsx");
describe("Header", function() {
  it("renders it correctly", function() {
    var React = require("react/addons");
    var Header = require("./header.jsx");

    var Subject = React.createClass({
      childContextTypes: {
        makePath: React.PropTypes.func,
        makeHref: React.PropTypes.func,
        transitionTo: React.PropTypes.func,
        replaceWith: React.PropTypes.func,
        goBack: React.PropTypes.func,
        getCurrentPath: React.PropTypes.func,
        getCurrentRoutes: React.PropTypes.func,
        getCurrentPathname: React.PropTypes.func,
        getCurrentParams: React.PropTypes.func,
        getCurrentQuery: React.PropTypes.func,
        isActive: React.PropTypes.func
      },

      getChildContext: function() {
        return {
          makePath: function() {},
          makeHref: function() {},
          transitionTo: function() {},
          replaceWith: function() {},
          goBack: function() {},
          getCurrentPath: function() {},
          getCurrentRoutes: function() {},
          getCurrentPathname: function() {},
          getCurrentParams: function() {},
          getCurrentQuery: function() {},
          isActive: function() {}
        };
      },

      render: function() {
        return <Header/>;
      }
    });

    var TestUtils = React.addons.TestUtils;

    // Render the header
    var header = TestUtils.renderIntoDocument(
      <Subject/>
    );

    // Verify it rendered the right test
    var list = TestUtils.findRenderedDOMComponentWithTag(
      header, "ul");
    expect(list.getDOMNode().textContent).toEqual("HomeAboutContact");
  });
});
