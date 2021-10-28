import React, { Component } from 'react';
import { Paper, Typography } from '@mui/material';
import { withStyles } from '@mui/styles';
import { useTrail, a } from 'react-spring';

const Trail = ({ open, children }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
      config: { mass: 200, tension: 1000, friction: 800 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 110 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    })
    return (
      <div>
        {trail.map(({ height, ...style }, index) => (
          <a.div key={index} style={style}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    )
}

const useStyles = (theme) => ({
    paper: {
        width: "100%",
        height: "100%"
    }
});

class DefaultBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: "true",
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Trail open={this.state.open}>
                <Typography sx={{textAlign: "center", fontFamily: 'baemin'}} variant="h1">안녕하세요!</Typography>
                <Typography sx={{fontFamily: 'baemin'}} variant="h2">좌측 메뉴를 통해 커뮤니티를 선택해주세요.</Typography>
                <Typography sx={{fontFamily: 'baemin'}} variant="h3">다양한 키워드 트렌드를 알아볼 수 있어요!</Typography>                    
            </Trail>
        );
    }
}

export default withStyles(useStyles)(DefaultBoard);