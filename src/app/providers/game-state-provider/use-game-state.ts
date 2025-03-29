import { useContext } from 'react';

import { gameStateContext } from './context';
import { GameStateContext } from './types';

export function useGameState(): GameStateContext {
  return useContext(gameStateContext);
}
