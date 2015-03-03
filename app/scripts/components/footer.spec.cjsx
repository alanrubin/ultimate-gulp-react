jest.dontMock './footer.cjsx'

describe 'footer', ->
  it 'renders it correctly', ->
    React = require 'react/addons'
    Footer = require './footer.cjsx'

    Subject = React.createClass(
      childContextTypes:
        makePath: React.PropTypes.func
        makeHref: React.PropTypes.func
        transitionTo: React.PropTypes.func
        replaceWith: React.PropTypes.func
        goBack: React.PropTypes.func
        getCurrentPath: React.PropTypes.func
        getCurrentRoutes: React.PropTypes.func
        getCurrentPathname: React.PropTypes.func
        getCurrentParams: React.PropTypes.func
        getCurrentQuery: React.PropTypes.func
        isActive: React.PropTypes.func

      getChildContext: ->
        {
          makePath: ->
          makeHref: ->
          transitionTo: ->
          replaceWith: ->
          goBack: ->
          getCurrentPath: ->
          getCurrentRoutes: ->
          getCurrentPathname: ->
          getCurrentParams: ->
          getCurrentQuery: ->
          isActive: ->
        }

      render: ->
        return <Footer/>;
    )

    TestUtils = React.addons.TestUtils

    # Render the footer
    footer = TestUtils.renderIntoDocument(
      <Subject/>
    )

    # Verify it rendered the right test
    list = TestUtils.findRenderedDOMComponentWithTag(footer, 'p')
    expect(list.getDOMNode().textContent).toEqual(" from the Yeoman team")
