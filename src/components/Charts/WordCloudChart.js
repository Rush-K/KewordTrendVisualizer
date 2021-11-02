import React, { Component } from 'react';
import WordCloud from 'react-d3-cloud';
import { Typography, Paper } from '@mui/material';
import { withStyles } from '@mui/styles';

const useStyles = (theme) => ({
    wordcloud: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gridColumn: "0 / 1",
    }
})

class WordCloudChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keywordData: [  { text: "Hey", value: 10 },
            { text: "lol", value: 20 },
            { text: "first impression", value: 80 },
            { text: "very cool", value: 10 },
            { text: "duck", value: 10 },
            { text: "Hey", value: 10 },
            { text: "lol", value: 20 },
            { text: "first impression", value: 80 },
            { text: "very cool", value: 10 },
            { text: "duck", value: 10 },
            { text: "duck", value: 10 },
            { text: "Hey", value: 10 },
            { text: "lol", value: 20 },
            { text: "first impression", value: 80 },
            { text: "very cool", value: 10 },
            { text: "duck", value: 10 }]
        }
    }

    fontSizeMapper = (word) => Math.log2(word.value) * 20;
    rotate = (word) => (word.value % 90) - 45;

    render() {
        const { classes } = this.props;
        return (
            <WordCloud style={classes.wordcloud} width={1000} data={this.state.keywordData} rotate={this.rotate} padding={3} fontSize={this.fontSizeMapper} />
        );
    }
}

export default withStyles(useStyles)(WordCloudChart);