import React, { Component, useState, useRef } from 'react';
import { useSpring, useSprings, animated } from '@react-spring/web';
import { Typography, Button, Dialog, Paper,
         Box, Toolbar, IconButton, AppBar } from '@mui/material';
import useMeasure from 'react-use-measure'
import { useDrag } from 'react-use-gesture';
import clamp from 'lodash.clamp';
import '../css/main.css';
import Visualizer from './Visualizer';

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

const Title = () => {
    const styles = useSpring({
        loop: true,
        to: [
          { opacity: 1, color: '#ffaaee' },
          { opacity: 0, color: 'rgb(14,26,19)' },
        ],
        from: { opacity: 0, color: 'red' },
      })

    return (
        <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Trail open="true">
            <Typography variant="h1" style={{textAlign: "center", fontFamily: 'baemin'}}>
                Keyword Trend
            </Typography>
            <Typography variant="h1" style={{textAlign: "center", fontFamily: 'baemin'}}>
                Visualizer
            </Typography>
            <animated.div style={styles}>
                <Typography variant="h3" style={{textAlign: "center", fontFamily: 'baemin'}}>
                    Swipe to Left!
                </Typography>
            </animated.div>
        </Trail>
        </div>
        )
}
  
const ViewPager = () => {
    const index = useRef(0);
    const [ref, { width }] = useMeasure()
    const [props, api] = useSprings(
      2,
      i => ({
        x: i * width,
        scale: width === 0 ? 0 : 1,
        display: 'block',
      }),
      [width]
    )
    const bind = useDrag(({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
      if (active && distance > width / 2) {
        index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, 2 - 1)
        cancel()
      }
      api.start(i => {
        if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
        const x = (i - index.current) * width + (active ? mx : 0)
        const scale = active ? 1 - distance / width / 2 : 1
        return { x, scale, display: 'block' }
      })
    })
    return (
      <div ref={ref} className="wrapper">
        {props.map(({ x, display, scale }, i) => (
          <animated.div className="page" {...bind()} key={i} style={{ display, x }}>
            <animated.div style={{ scale }}>
                {i === 0 ? <Title /> : <Visualizer />}
            </animated.div>
          </animated.div>
        ))}
      </div>
    )
  }

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div className="container">
                <ViewPager />
          </div>
        );
    }
}

export default Main;