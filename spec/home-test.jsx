/* global jest describe it expect */
"use strict";

jest.dontMock("../app/scripts/components/home.jsx");
describe("Home", function() {
  it("renders it correctly", function() {
    var React = require("react/addons");
    var Home = require("../app/scripts/components/home.jsx");
    var TestUtils = React.addons.TestUtils;

    // Render the home
    var home = TestUtils.renderIntoDocument(
      <Home/>
    );

    // Verify it rendered the right test
    var list = TestUtils.findRenderedDOMComponentWithClass(
      home, "lead");
    expect(list.getDOMNode().textContent).toEqual("Always a pleasure scaffolding your apps.");
  });
});
