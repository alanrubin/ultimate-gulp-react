jest.dontMock './footer.cjsx'

describe 'footer', ->
  it 'renders it correctly', ->
    React = require 'react/addons'
    Footer = require './footer.cjsx'

    Subject = require("../../../spec/support/stubRouterContext.jsx")(Footer)

    TestUtils = React.addons.TestUtils

    # Render the footer
    footer = TestUtils.renderIntoDocument(
      <Subject/>
    )

    # Verify it rendered the right test
    list = TestUtils.findRenderedDOMComponentWithTag(footer, 'p')
    expect(list.getDOMNode().textContent).toEqual(" from the Yeoman team")
