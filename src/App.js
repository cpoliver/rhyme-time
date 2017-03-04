import React from 'react';

import Metronome from './metronome/MetronomeContainer';

import './App.css';

const App = () => (
    <div>
        <Metronome updateInterval={33} />
        <Metronome updateInterval={1000} />
    </div>
);

export default App;
