import React from 'react';
import './App.css';
import Game from './components/Game';
import story from './components/Story';

function App() {
  return (
    <div className="App">
      <Game story={story} />
    </div>
  );
}

export default App;
