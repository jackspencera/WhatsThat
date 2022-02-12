import React from 'react'

export enum Region {
  Africa = 'africa',
  Americas = 'ame',
  Asia = 'asia',
  Europe = 'eur',
  Oceania = 'oceania'
};

export interface Settings {
  regions: Region[],
  timeLimit: Number,
}


function GameConfig() {
  return (
    <div>
      Game Config
    </div>
  )
}

export default GameConfig
