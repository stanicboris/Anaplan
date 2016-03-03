var React = require('react');
var ReactDOM = require('react-dom');

var Topbar = React.createClass({
  render: function() {
    return (
      <div className="topbar">
        <h1 className="topbarLogo">SWAPI</h1>
      </div>
    );
  }
});

module.exports = Topbar;
