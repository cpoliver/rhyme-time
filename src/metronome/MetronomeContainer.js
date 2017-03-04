import { connect } from 'react-redux';

import Metronome from './Metronome';
import { start, stop, reset } from './MetronomeActions';

const mapStateToProps = ({ metronome }) => {
    const { baseTime, startedAt, stoppedAt } = metronome;
    return { baseTime, startedAt, stoppedAt };
};

export default connect(mapStateToProps, { start, stop, reset })(Metronome);
