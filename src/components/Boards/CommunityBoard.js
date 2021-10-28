import React, { Component } from 'react';
import { Typography } from '@mui/material';

class CommunityBoard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("zz");
        return (
            <div style={{width: "100%"}}>
                <Typography variant="h1">{this.props.name}</Typography>
            </div>
        );
    }
}

export default CommunityBoard;