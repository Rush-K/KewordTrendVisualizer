import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class TopPolarAreaChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: this.props.oovwordData.map((d) => { return parseInt(d.value) }),
            options: {
                chart: {
                    type: 'polarArea',
                  },
                  stroke: {
                    colors: ['#fff']
                  },
                  fill: {
                    opacity: 0.8
                  },
                  responsive: [{
                    breakpoint: 480,
                    options: {
                      chart: {
                        width: 200
                      },
                      legend: {
                        position: 'bottom'
                      }
                    }
                  }],
                  labels: this.props.oovwordData.map((d) => { return d.label }),
            }
        }
    }

    render() {
        return (
            <Chart options={this.state.options} series={this.state.series} type="polarArea" height="90%"/>
        );
    }
}

export default TopPolarAreaChart;