import { connect } from 'react-redux';

import Metronome from './Metronome';
import { reset, tick } from './MetronomeActions';

const mapStateToProps = ({ metronome }) => {
    const { ticks } = metronome;
    return { ticks };
};

export default connect(mapStateToProps, { reset, tick })(Metronome);
