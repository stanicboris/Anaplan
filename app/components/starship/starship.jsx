var React = require('react');
var ReactDOM = require('react-dom');

var Starship = React.createClass({
  render: function() {
    return (
      <tr className="starship">
         <td className="starshipName">{this.props.name}</td>
         <td className="starshipModel">{this.props.model}</td>
         <td className="starshipManufacturer">{this.props.manufacturer}</td>
         <td className="starshipCrew">{this.props.crew}</td>
         <td className="starshipPassengers">{this.props.passengers}</td>
         <td className="starshipHyperdriveRating">{this.props.hyperdriveRating}</td>
      </tr>
    );
  }
});

module.exports = Starship;
