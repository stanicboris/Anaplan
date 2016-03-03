var React = require('react');
var ReactDOM = require('react-dom');

var StarshipsFilter = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
      this.refs.filterNameInput.value,
      this.refs.filterModelInput.value,
      this.refs.filterManufacturerInput.value
    );
  },

  render: function() {
    return (
      <tr className="starshipsFilter">
        <th>
          Filter by
          <input
            type="text"
            placeholder="Name"
            value={this.props.filterName}
            ref="filterNameInput"
            onChange={this.handleChange}
          />
        </th>
        <th>
          Filter by
          <input
            type="text"
            placeholder="Model"
            value={this.props.filterModel}
            ref="filterModelInput"
            onChange={this.handleChange}
          />
        </th>
        <th>
          Filter by
          <input
            type="text"
            placeholder="Manufacturer"
            value={this.props.filterManufacturer}
            ref="filterManufacturerInput"
            onChange={this.handleChange}
          />
        </th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    );
  }
});

module.exports = StarshipsFilter;
