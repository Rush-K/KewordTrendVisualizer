import React, { Component } from 'react';
import { Typography, Button, CircularProgress, Paper } from '@mui/material';
import axios from 'axios';
import { withStyles } from '@mui/styles';
import { useTrail, a } from 'react-spring';

import WordCloudChart from '../Charts/WordCloudChart';
import TopFiveBarChart from '../Charts/TopFiveBarChart';

const Trail = ({ open, children, cssstyle, name }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
      config: { mass: 500, tension: 1500, friction: 800 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 110 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    })
    return (
      <div>
        {trail.map(({ height, ...style }, index) => (
          <a.div key={index} className={cssstyle} style={style}>
            {/*<a.div style={{ height }}>{items[index]}</a.div>*/}
            <Typography variant="h5" sx={{fontFamily: "baemin"}}>{name}</Typography>
            <Paper elevation={3} style={{width: "30vw", height: "450px", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                {items[index]}
            </Paper>
          </a.div>
        ))}
      </div>
    )
}

const useStyles = (theme) => ({
    root: {
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateRows: "20% 40% 40%",
        '& > div#title': {
            width: "100%",
            height: "100%",
            gridRow: "1 / 2",
            gridColumn: "1 / 3",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        '& > div#wordcloud': {
            width: "100%",
            height: "100%",
            gridRow: "2 / 3",
            display: "flex",
            justifyContent: "center",
        },
        '& > div#topfivebar': {
            width: "100%",
            height: "100%",
            gridRow: "2 / 3",
            display: "flex",
            justifyContent: "center"
        }
    },
    trail: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
    }
});

class CommunityBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingData: true,
            keywordData : [],
        }
    }
    
    componentDidMount = async() => {
        /*
        let data = await axios.get('http://1.234.107.151:8080/api/' + this.props.name + '/keyword')
                              .then(function (response) {
                                  return response.data;
                              })
                              .catch(function (error) {
                                  console.log(error);
                              });
        this.setState({ keywordData: data.result, loadingData: true});
        console.log(this.state);
        */
    }

    render() {
        const { classes } = this.props;
        return (
            this.state.loadingData === true ? 
            <div className={classes.root}>
                <div id="title">
                    <Typography variant="h1" sx={{fontFamily: "baemin", textAlign: "center"}}>{this.props.label} 트렌드 분석 결과</Typography>
                </div>
                <div id="wordcloud">
                    <Trail name={"워드클라우드"} cssstyle={classes.trail} open={true}>
                        <WordCloudChart keywordData={this.state.keywordData} />
                    </Trail>
                </div> 
                <div id="topfivebar">
                    <Trail name={"빈도수 TOP 5"} cssstyle={classes.trail} open={true}>
                        <TopFiveBarChart />
                    </Trail>
                </div>
            </div>
             :
            <CircularProgress />

        );
    }
}

export default withStyles(useStyles)(CommunityBoard);