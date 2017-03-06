import React from 'react';

const getElapsedTime = (baseTime, startedAt, stoppedAt = new Date().getTime()) =>
      !startedAt ? 0 : stoppedAt - startedAt + baseTime;

export default class Timer extends React.Component {
    componentDidMount() {
        this.interval = setInterval(this.forceUpdate.bind(this), this.props.updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { baseTime, startedAt, stoppedAt } = this.props;
        const elapsed = getElapsedTime(baseTime, startedAt, stoppedAt);

        return (
            <div>
              <div>Time: {elapsed}</div>
              <div>
                <button onClick={() => this.props.start(elapsed)}>Start</button>
                <button onClick={() => this.props.stop()}>Stop</button>
                <button onClick={() => this.props.reset()}>Reset</button>
              </div>
            </div>
        );
    }
};
