/* global jest describe it expect */
"use strict";

jest.dontMock("../app/scripts/components/header.jsx");
describe("Header", function() {
  it("renders it correctly", function() {
    var React = require("react/addons");
    var Header = require("../app/scripts/components/header.jsx");
    var TestUtils = React.addons.TestUtils;

    // Render the header
    var header = TestUtils.renderIntoDocument(
      <Header/>
    );

    // Verify it rendered the right test
    var list = TestUtils.findRenderedDOMComponentWithTag(
      header, "ul");
    expect(list.getDOMNode().textContent).toEqual("HomeAboutContact");
  });
});
