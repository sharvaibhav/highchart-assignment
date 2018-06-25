import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';

class Chart extends Component {
    
    componentDidMount() {
      let chart = this.refs.chart.getChart();
      //chart.series[0].addPoint({x: 10, y: 12});
    }
  
    render() {
      return <ReactHighcharts config={this.props.config} ref="chart"></ReactHighcharts>;
    }
  }


  export default Chart;