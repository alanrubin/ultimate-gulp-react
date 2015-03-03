/* global jest describe it expect */
"use strict";

jest.dontMock("./home.jsx");

describe("Home", function() {
  it("renders it correctly", function() {
    var React = require("react/addons");
    var Home = require("./home.jsx");

    // Stub Router context for Home component
    var Subject = require("../../../spec/support/stubRouterContext.jsx")(Home);

    var TestUtils = React.addons.TestUtils;

    // Render the home
    var home = TestUtils.renderIntoDocument(
      <Subject/>
    );

    // Verify it rendered the right test
    var list = TestUtils.findRenderedDOMComponentWithClass(
      home, "lead");
    expect(list.getDOMNode().textContent).toEqual("Always a pleasure scaffolding your apps.");
  });
});
