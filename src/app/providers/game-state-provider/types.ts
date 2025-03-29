import { Dispatch, RefObject, SetStateAction } from 'react';

import { Note } from '../../utils/note';
import { Particle } from '../../utils/particle';

export interface Lane {
  x: number;
  color: string;
}

export interface Song {
  audio: HTMLAudioElement;
  bpm: number;
  beatMap: number[];
}

export interface GameState {
  notes: Note[];
  particles: Particle[];
  currentSong: Song | null;
  gameRunning: boolean;
  lastBeat: number;
  startTime: number;
}

export interface Sounds {
  hit: HTMLAudioElement;
  miss: HTMLAudioElement;
}

export interface GameStateContext {
  canvasRef: RefObject<HTMLCanvasElement | null> | null;
  score: number;
  combo: number;
  songKey: string;
  setSongKey: Dispatch<SetStateAction<string>>;
  gameState: GameState;
  startGame: () => void;
}
