var React = require('react');
var ReactDOM = require('react-dom');

var StarshipsPie = React.createClass({
  getInitialState: function() {
    return {
      chart: '',
      options: {
        animation: false,
        segmentShowStroke : true,
        segmentStrokeColor : '#fff',
        segmentStrokeWidth : 2,
        legendTemplate : '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
      }
    };
  },

  componentDidMount: function() {
     this.state.chart = new Chart(document.getElementById('starshipsPieChart').getContext('2d')).Pie(this.props.data, this.state.options);
  },

  componentWillReceiveProps: function(nextProps) {
    this.state.chart.destroy();
    this.state.chart = new Chart(document.getElementById('starshipsPieChart').getContext('2d')).Pie(nextProps.data, this.state.options);
    return true;
  },

  render: function() {
    return (
      <div className="starshipsPie">
        <h1>Statistics (passengers by starships)</h1>
        <canvas id="starshipsPieChart"></canvas>
      </div>
    )
  }
});

module.exports = StarshipsPie;
