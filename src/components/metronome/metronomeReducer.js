import { reset, start, stop } from './MetronomeActions';

const initialState = {
    startedAt: undefined,
    stoppedAt: undefined,
    baseTime: undefined
};

export default (state = initialState, action) => {
    const actions = {
        [reset().type]: {
            ...state,
            baseTime: 0,
            startedAt: state.startedAt ? action.now : undefined,
            stoppedAt: state.stoppedAt ? action.now : undefined
        },
        [start().type]: {
            ...state,
            baseTime: action.baseTime,
            startedAt: action.now,
            stoppedAt: undefined
        },
        [stop().type]: {
            ...state,
            stoppedAt: action.now
        }
    };

    return actions[action.type] || state;
};
