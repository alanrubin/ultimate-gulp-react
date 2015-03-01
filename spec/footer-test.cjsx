jest.dontMock '../app/scripts/components/footer.cjsx'

describe 'footer', ->
  it 'renders it correctly', ->
    React = require 'react/addons'
    Footer = require '../app/scripts/components/footer.cjsx'
    TestUtils = React.addons.TestUtils

    # Render the footer
    footer = TestUtils.renderIntoDocument(
      <Footer/>
    );

    # Verify it rendered the right test
    list = TestUtils.findRenderedDOMComponentWithTag(footer, 'p')
    expect(list.getDOMNode().textContent).toEqual(" from the Yeoman team")
