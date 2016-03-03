var React = require('react');
var ReactDOM = require('react-dom');

var Starship = require('../starship/starship.jsx');
var StarshipsSort = require('../starshipsSort/starshipsSort.jsx');
var StarshipsFilter = require('../starshipsFilter/starshipsFilter.jsx');
var StarshipsPie = require('../starshipsPie/starshipsPie.jsx');

var StarshipsList = React.createClass({
  getInitialState: function() {
    return {
      filterName: '',
      filterModel: '',
      filterManufacturer: '',
      sortBy: ''
    }
  },

  handleUserFilter: function(filterName, filterModel, filterManufacturer) {
    this.setState({
      filterName: filterName,
      filterModel: filterModel,
      filterManufacturer: filterManufacturer
    });
  },

  handleUserSort: function(sortBy) {
    this.setState({
      sortBy: sortBy
    });
  },

  render: function() {
    var starshipNodes = [];

    // Filters
    this.props.starships.forEach(function(starship) {
      if (starship.name.toLowerCase().indexOf(
          this.state.filterName.toLowerCase()) === -1) {
        return;
      }
      if (starship.model.toLowerCase().indexOf(
          this.state.filterModel.toLowerCase()) === -1) {
        return;
      }
      if (starship.manufacturer.toLowerCase().indexOf(
          this.state.filterManufacturer.toLowerCase()) === -1) {
        return;
      }
      starshipNodes.push(<Starship
        key={starship.name}
        name={starship.name}
        model={starship.model}
        manufacturer={starship.manufacturer}
        crew={starship.crew}
        passengers={starship.passengers}
        hyperdriveRating={starship.hyperdrive_rating}
      />);
    }.bind(this));

    // Sort by
    switch(this.state.sortBy) {
      case 'name':
        starshipNodes.sort(function (a, b) {
          if (a.props.name > b.props.name) {
            return 1;
          }
          if (a.props.name < b.props.name) {
            return -1;
          }
          return 0;
        });
        break;
      case 'hyperdriveRating':
        starshipNodes.sort(function (a, b) {
          return parseFloat(a.props.hyperdriveRating) - parseFloat(b.props.hyperdriveRating);
        });
        break;
      case 'crew':
        starshipNodes.sort(function (a, b) {
          return parseInt(a.props.crew) - parseInt(b.props.crew);
        });
        break;
      case 'passengers':
        starshipNodes.sort(function (a, b) {
          return parseInt(a.props.passengers) - parseInt(b.props.passengers);
        });
        break;
    }

    // Data for Pie chart
    var colors = ['#343a5c', '#3d456d', '#2db8de'];
    var i = 0;
    var pieData = [];
    starshipNodes.forEach(function(starship) {
      if (i === 3) { i = 0 }
      pieData.push({value: starship.props.passengers, color: colors[i], highlight: '#2db8de', label: starship.props.name});
      i++;
    }.bind(this));

    return (
      <div className="starshipsList">
        <StarshipsSort
          sortBy={this.state.sortBy}
          onUserInput={this.handleUserSort}
        />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Model</th>
              <th>Manufacturer</th>
              <th>Crew</th>
              <th>Passengers</th>
              <th>Hyperdrive rating</th>
            </tr>
            <StarshipsFilter
              filterName={this.state.filterName}
              filterModel={this.state.filterModel}
              filterManufacturer={this.state.filterManufacturer}
              onUserInput={this.handleUserFilter}
            />
          </thead>
          <tbody>
            {starshipNodes}
          </tbody>
        </table>
        <StarshipsPie
          data={pieData}
        />
      </div>
    );
  }
});

module.exports = StarshipsList;
