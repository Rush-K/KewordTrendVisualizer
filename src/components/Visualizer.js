import React, { Component } from 'react';
import { withStyles } from '@mui/styles';
import Menu from './Menu';
import DefaultBoard from './Boards/DefaultBoard';

const useStyles = (theme) => ({
    background: {
        display: "grid",
        gridTemplateColumns: "300px 1fr",
        background: "rgb(240,240,240)",
        width: "100vw",
        height: "100vh"
    },
    menu: {
        width: "256",
        gridColumn: "1 / 2",
    },
    board: {
        display: "flex",
        width: "95%",
        height: "100vh",
        gridColumn: "2 / 3",
        justifyContent: "center",
        alignItems: "center",
    }
});

class Visualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultBoardOpen: "true",
            communityBoardOpen: "true",

        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div id="background" className={classes.background}>
                <div id="menu" className={classes.menu}>
                    <Menu />
                </div>
                <div className={classes.board}>
                    <DefaultBoard/>
                </div>
            </div>

        );
    }
}

export default withStyles(useStyles)(Visualizer);