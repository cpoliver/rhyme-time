import React from 'react';

export default class Metronome extends React.Component {
    componentDidMount() {
        const { bpm } = this.props;
        this.spb = 60 / bpm;
    }

    componentWillUnmount() {
        this.stop();
    }

    render() {
        const { ticks } = this.props;

        const bar = Math.ceil(ticks / 4);
        const beat = ticks === 0 ? 0 : ticks % 4 || 4;

        return (
            <div>
                <span className="metronome-bar">bar: {bar}</span>&nbsp;
                <span className="metronome-beat">beat: {beat}</span>
                <div>
                    <button onClick={this.start}>Start</button>
                    <button onClick={this.stop}>Stop</button>
                    <button onClick={this.reset}>Reset</button>
                </div>
            </div>
        );
    }

    start = () => {
        this.stop();
        this.interval = setInterval(this.props.tick, this.spb * 1000);
    }

    stop = () => {
        clearInterval(this.interval);
    }

    reset = () => {
        this.stop();
        this.props.reset();
    }
};
