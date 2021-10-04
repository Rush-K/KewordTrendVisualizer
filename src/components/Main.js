import { Component, useState, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Typography, Button, Dialog, Paper,
         Box, Toolbar, IconButton, AppBar } from '@mui/material';
import { Link } from 'react-router-dom';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import { withStyles } from '@mui/styles';
import '../css/main.css';


const Page = ({ offset, gradient }) => (
    <>
      <ParallaxLayer offset={offset} speed={0.2}>
        <div className="slopeBegin" />
      </ParallaxLayer>
  
      <ParallaxLayer offset={offset} speed={0.6}>
        <div className={`${"slopeEnd"} ${[gradient]}`} />
      </ParallaxLayer>
  
      <ParallaxLayer className={`${"text"} ${"number"}`} offset={offset} speed={0.3}>
      </ParallaxLayer>
    </>
  )

const useStyles = theme => ({
    typography: {
        fontFamily: 'baemin',
    },
    root: {
        width: "100vw",
        height: "100vh"
    },
    title: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    mainPaper: {
        width: "100%",
        height: "100%",
    }
});

const Title = () => {
    const styles = useSpring({
        loop: false,
        to: { opacity: 1, color: 'rgb(255,255,255)' },
        from: { opacity: 0, color: '#ffaaee' },
    });

    return (<animated.div style={styles}>
        <Typography variant="h1" style={{fontFamily: 'baemin'}}>
            Keyword Trend
        </Typography>
        <Typography variant="h1" style={{fontFamily: 'baemin'}}>
            Visualizer
        </Typography>
        </animated.div>)
}

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visualizer: false,
        }
    }

    convertDialog = (event) => {
        this.setState({visualizer: !this.state.visualizer});
    }

    render() {
        const { classes } = this.props;
        return (
          <div className={classes.root} style={{ background: '#dfdfdf' }}>
            <Parallax className="container" pages={3} horizontal>
              <Page offset={0} gradient="pink"/>
              <ParallaxLayer offset={0}>
                  <Title />
              </ParallaxLayer>
              <Page offset={1} gradient="teal" />
              <Page offset={2} gradient="tomato" />
              <ParallaxLayer offset={2}>
                    <Link to={'/visualizer'}>
                        <Button onClick={this.convertDialog}>go!</Button>
                    </Link>
              </ParallaxLayer>
            </Parallax>
          </div>
        );
    }
}

export default withStyles(useStyles)(Main);