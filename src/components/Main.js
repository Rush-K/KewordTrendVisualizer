import { Component } from 'react';
import { useSpring, animated } from 'react-spring';
import { Typography, Button } from '@mui/material';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Title = () => {
    const styles = useSpring({
        loop: false,
        to: [
          { opacity: 1, color: '#ffaaee' },
          { opacity: 0, color: 'rgb(14,26,19)' },
        ],
        from: { opacity: 0, color: 'red' },
    });

    return <animated.div style={styles}>I will fade in and out</animated.div>
}

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Parallax pages={3} style={{ top: '0', left: '0' }}>
            <ParallaxLayer
                offset={0}
                speed={2.5}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Title />
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
        );
    }
}

export default Main;