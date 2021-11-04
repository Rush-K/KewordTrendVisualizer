import React, { Component } from 'react';
import { withStyles } from '@mui/styles';
import Menu from './Menu';
import axios from 'axios';
import DefaultBoard from './Boards/DefaultBoard';
import CommunityBoard from './Boards/CommunityBoard';
import { CircularProgress } from '@mui/material';

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
            defaultBoardOpen: true,
            communityBoardOpen: false,
            communityBoardName: "",
            communityBoardLabel: "",
            dataLoaded: false,
            keywordData: [],
            oovwordData: []
        }
    }

    defaultBoardStateChange = () => {
        this.setState({ defaultBoardOpen: true, communityBoardOpen: false, communityBoardName: "" });
    }

    communityBoardStateChange = async(prev, label) => {
        await this.setState({ defaultBoardOpen: false,
                        communityBoardOpen: true,
                        dataLoaded: false,
        });

        let data = await axios.get('http://1.234.107.151:8080/api/' + prev + '/keyword')
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
        
        let oovdata = await axios.get('http://1.234.107.151:8080/api/' + prev + '/neologism')
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });

        if (data.result.length != 0 && data.result != null && oovdata.result.length != 0 && oovdata.result != null) {
            this.setState({ 
                communityBoardName: prev,
                communityBoardLabel: label,
                dataLoaded: true,
                keywordData: data.result,
                oovwordData: oovdata.result
            });
        } else {
            this.setState({ 
                communityBoardName: prev,
                communityBoardLabel: label,
                dataLoaded: false,
            });
        }
    }

    render() {
        const { classes } = this.props;
        console.log(this.state);
        return (
            <div id="background" className={classes.background}>
                <div id="menu" className={classes.menu}>
                    <Menu defaultBoardStateChange={this.defaultBoardStateChange} communityBoardStateChange={this.communityBoardStateChange}/>
                </div>
                <div className={classes.board}>
                    {this.state.defaultBoardOpen === true && <DefaultBoard/>}
                    {this.state.communityBoardOpen === true && this.state.dataLoaded === false && <CircularProgress />}
                    {this.state.communityBoardOpen === true && this.state.dataLoaded === true && <CommunityBoard oovwordData={this.state.oovwordData} keywordData={this.state.keywordData} name={this.state.communityBoardName} label={this.state.communityBoardLabel}/>}

                </div>
            </div>

        );
    }
}

export default withStyles(useStyles)(Visualizer);