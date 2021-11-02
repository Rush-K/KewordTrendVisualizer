import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import { Paper, Typography } from '@mui/material';
import { withStyles } from '@mui/styles';

const options = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    plotOptions: {
        pie: {
            donut: {
              labels: {
                show: true,
                total: {
                    show: true,
                    showAlways: true,
                    fontSize: "24px",
                    color: "#2787AB"
                }
              }
            }
          }
    }
}

const useStyles = (theme) => ({
    chart: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gridColumn: "0 / 1",
    }
})

class TopFiveBarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [44, 55, 41, 17, 15],
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Chart
            className={classes.chart}
            options={options}
            series={this.state.series}
            type="donut"
            width="70%"
            />
        );
    }
}

export default withStyles(useStyles)(TopFiveBarChart);