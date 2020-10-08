import React from 'react';

export default class StepsCounter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            steps: 0
        };
    }

    render () {
        return (
            <div class="tracker">
                <h2> Steps Counter </h2>
                <p>Steps: {this.state.steps}</p>
                <button onClick ={() => {
                    this.setState({steps: this.state.steps + 1}); 
                }}> Increase </button>
                <button onClick ={() => {
                    this.setState({steps: 0});
                }}> Reset</button>
            </div>
        );
    }
}
