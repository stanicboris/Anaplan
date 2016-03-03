var React = require('react');
var ReactDOM = require('react-dom');

var StarshipsList = require('../starshipsList/starshipsList.jsx');

var Starships = React.createClass({
  getInitialState: function() {
    return {
      starships: []
    }
  },

  loadDataFromApi: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(starships) {
        this.setState({starships: starships.results});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadDataFromApi();
  },

  render: function() {
    return (
      <div className="starships">
        <StarshipsList
          starships={this.state.starships}
        />
      </div>
    );
  }
});

module.exports = Starships;
