# A coffeescript + react sample file
React = require("react")

Footer = React.createClass
  render: ->
    <div id="footer">
      <p><span className="glyphicon glyphicon-heart"></span> from the Yeoman team</p>
    </div>

module.exports = Footer
