import { GameBoard } from './components/game-board';
import { ScoreBoard } from './components/score-board';
import { SelectSong } from './components/select-song';
import { GameStateProvider } from './providers/game-state-provider';

export function App() {
  return (
    <section className="text-center color-white bg-[#222] min-h-screen p-5">
      <GameStateProvider>
        <ScoreBoard />
        <SelectSong />
        <GameBoard />
      </GameStateProvider>
    </section>
  );
}
