import React, { Component } from 'react';
import { ResponsiveCirclePacking } from '@nivo/circle-packing'

class CircleChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                "name": "stack",
                //"color": "hsl(341, 70%, 50%)",
                "children": [{
                    "name": "s",
                    "children":[]
                }]
            }

        }
    }  

    componentDidMount = () => {
        this.setState({ 
            data: {
                "name": "t",
                "children": [{"name": "s", "children": this.state.data.children[0].children.concat(this.props.oovwordData.map((d) => {
                    return {"name": d.label, "loc": d.value};}))}]
            }
        });
    }

    render() {
        console.log(this.state.data);
        return (
            <ResponsiveCirclePacking
            data={this.state.data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            id="name"
            value="loc"
            colors={{ scheme: 'purples' }}
            colorBy="id"
            padding={15}
            enableLabels={true}
            labelsSkipRadius={10}
            labelTextColor={{ from: 'color', modifiers: [ [ 'brighter', 5 ] ] }}
            borderWidth={0}
            defs={[
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'none',
                    color: 'inherit',
                    rotation: -45,
                    lineWidth: 5,
                    spacing: 8
                }
            ]}
            fill={[ { match: { depth: 1 }, id: 'lines' } ]}
        />
        );
    }
}

export default CircleChart;