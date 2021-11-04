import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import { Paper, Typography } from '@mui/material';
import { withStyles } from '@mui/styles';

const options = {

}

const useStyles = (theme) => ({
    chart: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gridColumn: "0 / 1",
    }
})

class TopBarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                labels: this.props.keywordData.map((d) => {return d.text}),
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
                },
            },
            series: this.props.keywordData.map((d) => { return d.value }),
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Chart
            className={classes.chart}
            options={this.state.options}
            series={this.state.series}
            type="donut"
            height="90%"
            />
        );
    }
}

export default withStyles(useStyles)(TopBarChart);