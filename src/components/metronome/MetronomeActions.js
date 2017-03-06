export const start = (baseTime = 0) => ({
    type: 'START',
    baseTime: baseTime,
    now: new Date().getTime()
});

export const stop = () => ({
    type: 'STOP',
    now: new Date().getTime()
});

export const reset = () => ({
    type: 'RESET',
    now: new Date().getTime()
});
