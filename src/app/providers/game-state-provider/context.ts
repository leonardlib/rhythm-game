import { createContext } from 'react';

import { GameStateContext } from './types';

export const gameStateContext = createContext<GameStateContext>({
  canvasRef: null,
  combo: 0,
  gameState: {
    currentSong: null,
    gameRunning: false,
    lastBeat: 0,
    startTime: 0,
    notes: [],
    particles: [],
  },
  score: 0,
  setSongKey: () => null,
  songKey: 'song1',
  startGame: () => null,
});
