import React, { Component } from 'react';
import { Typography, Button, CircularProgress, Paper } from '@mui/material';
import { withStyles } from '@mui/styles';
import { useTrail, a } from 'react-spring';

import WordCloudChart from '../Charts/WordCloudChart';
import TopBarChart from '../Charts/TopBarChart';
import CircleChart from '../Charts/CircleChart';
import TopPolarAreaChart from '../Charts/TopPolarAreaChart';

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
            <Typography variant="h5" sx={{textAlign: "center", fontFamily: "baemin"}}>{name}</Typography>
            <Paper elevation={0} style={{width: "30vw", height: "450px", display: "flex", justifyContent: "center", flexDirection: "column"}}>
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
        gridTemplateRows: "10% 45% 45%",
        gridTemplateColumns: "50%",
        '& > div#title': {
            width: "100%",
            height: "100%",
            gridRow: "1 / 2",
            gridColumn: "1 / 3",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        '& > div#word': {
            width: "100%",
            height: "100%",
            gridRow: "2 / 3",
            display: "flex",
            justifyContent: "center",
        },
        '& > div#oov': {
            width: "100%",
            height: "100%",
            gridRow: "3 / 4",
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
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div id="title">
                    <Typography variant="h2" sx={{fontFamily: "baemin", textAlign: "center"}}>{this.props.label} 트렌드 분석 결과</Typography>
                </div>
                <div id="word">
                    <Trail name={"키워드"} cssstyle={classes.trail} open={true}>
                        <WordCloudChart keywordData={this.props.keywordData} />
                    </Trail>
                </div> 
                <div id="word">
                    <Trail name={"키워드 빈도수 TOP 10"} cssstyle={classes.trail} open={true}>
                        <TopBarChart keywordData={this.props.keywordData.slice(0, 10)}/>
                    </Trail>
                </div> 
                <div id="oov">
                    <Trail name={"예상 신조어"} cssstyle={classes.trail} open={true}>
                        <CircleChart oovwordData={this.props.oovwordData}/>
                    </Trail>
                </div>
                <div id="oov">
                    <Trail name={"예상 신조어 빈도수 TOP 10"} cssstyle={classes.trail} open={true}>
                       <TopPolarAreaChart oovwordData={this.props.oovwordData.slice(0, 10)}/>
                    </Trail>
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles)(CommunityBoard);