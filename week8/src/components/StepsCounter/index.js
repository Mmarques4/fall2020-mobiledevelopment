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
            <div id ="panel">
                <div class="tracker">
                    <h2> Step Counter </h2>
                    <p>Steps: {this.state.steps}</p>
                    <button class id="button" onClick ={() => {
                        this.setState({steps: this.state.steps + 1}); 
                    }}> Increase </button>
                    <button class id="button" onClick ={() => {
                        this.setState({steps: this.state.steps - 1}); 
                    }}> Decrease </button>
                    <button class id="reset" onClick ={() => {
                        this.setState({steps: 0});
                    }}> Reset</button>
                </div> 
            </div>
        );
    }
}
