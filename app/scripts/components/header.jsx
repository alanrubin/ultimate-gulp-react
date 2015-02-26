var React = require('react');

var Header = React.createClass({

	render: function() {
		return (
			<div className="header">
	          <ul className="nav nav-pills pull-right">
	            <li className="active"><a href="#">Home</a></li>
	            <li><a href="#">About</a></li>
	            <li><a href="#">Contact</a></li>
	          </ul>
	          <h3 className="text-muted">React Webapp</h3>
	        </div>
		);
	}

});

module.exports = Header;