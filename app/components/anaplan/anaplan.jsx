var React = require('react');
var ReactDOM = require('react-dom');

var Topbar = require('../topbar/topbar.jsx');
var Starships = require('../starships/starships.jsx');

var Anaplan = React.createClass({
  render: function() {
    return (
      <div className="anaplan">
        <Topbar />
        <Starships url='/api/starships' />
      </div>
    );
  }
});

module.exports = Anaplan;
