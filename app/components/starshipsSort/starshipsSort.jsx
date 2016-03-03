var React = require('react');
var ReactDOM = require('react-dom');

var StarshipsSort = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
      this.refs.sortByInput.value
    );
  },

  render: function() {
    return (
      <div className="starshipsSort">
        <div className="left">
          <h1>Starships</h1>
        </div>
        <div className="right">
          Sort by
          <select ref="sortByInput" onChange={this.handleChange}>
            <option value="">None</option>
            <option value="name">Name</option>
            <option value="hyperdriveRating">Hyperdrive rating</option>
            <option value="crew">Crew</option>
            <option value="passengers">Passengers</option>
          </select>
        </div>
        <div className="clearfix"></div>
      </div>
    )
  }
});

module.exports = StarshipsSort;
