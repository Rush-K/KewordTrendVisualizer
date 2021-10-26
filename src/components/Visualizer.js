import React, { Component } from 'react';
import { withStyles } from '@mui/styles';
import Menu from './Menu';

const useStyles = (theme) => ({
    background: {
        background: "rgb(240,240,240)",
        width: "100vw",
        height: "100vh"
    }
});

class Visualizer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div id="background" className={classes.background}>
                <Menu />
            </div>

        );
    }
}

export default withStyles(useStyles)(Visualizer);