import { Component } from 'react';
import { useSpring, animated } from 'react-spring';
import { Typography, Button, Grid } from '@mui/material';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { withStyles } from '@mui/styles';
import firstImage from '../image/firstPage.JPG'

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
    }
});

const Title = () => {
    const styles = useSpring({
        loop: false,
        to:
          //{ opacity: 1, color: '#ffaaee' },
          { opacity: 1, color: 'rgb(14,26,19)' },
        from: { opacity: 0, color: '#ffaaee' },
    });

    return (<animated.div style={styles}>
        <Typography variant="h1" style={{fontFamily: 'baemin'}}>
            Keyword Trend Visualizer
        </Typography>
        </animated.div>)
}

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Parallax pages={3}>
                <ParallaxLayer
                    offset={0}
                    speed={2.5}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${firstImage})`, backgroundSize: 'cover' }}>
                    <Grid container spacing={2} style={{height: "100%"}}>
                        <Grid item xs={12} className={classes.title}>
                            <Title/>
                        </Grid>
                        <Grid item xs={12}>
                            <a href='https://.pngtree.com/free-backgrounds'>무료 배경 사진 .pngtree.com/</a>
                        </Grid>
                    </Grid>

                </ParallaxLayer>
        
                <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ff6d6d' }} />
        
                <ParallaxLayer
                    offset={1}
                    speed={0.5}
                    style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    }}>
                    <p>Scroll down</p>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={2} style={{ backgroundColor: '#ff6d6c' }} />

                <ParallaxLayer
                    offset={2}
                    speed={2.5}
                    style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    }}>
                    <p>Scroll up</p>
                    <Button>test</Button>
                </ParallaxLayer>

                </Parallax>
            </div>
        );
    }
}

export default withStyles(useStyles)(Main);