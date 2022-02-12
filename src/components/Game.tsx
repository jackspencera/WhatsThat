import React, { useEffect, useState } from 'react'
import { getCountriesInRegion } from '../api/countries';
import { Settings } from './GameConfig';

interface GameProps {
  config: Settings
}

function Game({ config }: GameProps) {
  // We want to enable the user to input text to try and guess
  
  const [guess, setGuess] = useState('');
  
  useEffect(() => {
    // We load the countries from the desired regions on load
    config.regions.forEach((region) => {
      getCountriesInRegion(region).then(names => {
        console.log(names);
      });
    })
    // Randomise the list of countires
  }, [])
  
  // Time limit
  // 
  return (
    <div>
      Game component
      <div>
        Time limit: {config.timeLimit}
      </div>
      <div>
        Curr Guess: {guess}
      </div>
      <input className='border-2 border-black' type='text' onChange={(e) => setGuess(e.target.value)} />
    </div>
  )
}

export default Game
