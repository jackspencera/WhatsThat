import React, { useState } from 'react';
import './App.css';
import Game from './components/Game';
import { Region, Settings } from './components/GameConfig';

const defaultSettings: Settings = {
  regions: [Region.Oceania],
  timeLimit: 10,
}

function App() {
  // We want a textbox with a empty map and you guess
  // 
  const [settings, setSettings] = useState(defaultSettings);
  return (
    <div className="App">
      Hello
      {/* Render the game config on load. Once submitted, render the game with the settings set */}
      
      <Game config={settings}  />
    </div>
  );
}

export default App;
