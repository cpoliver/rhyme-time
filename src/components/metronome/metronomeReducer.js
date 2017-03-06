import { reset, tick } from './MetronomeActions';

const initialState = {
    ticks: 0
};

export default (state = initialState, action) => {
    const actions = {
        [reset().type]: {
            ...state,
            ticks: 0
        },
        [tick().type]: {
            ...state,
            ticks: state.ticks + 1
        },
    };

    return actions[action.type] || state;
};
