import { useGameState } from '../../providers/game-state-provider';

export function SelectSong() {
  const { songKey, setSongKey, startGame } = useGameState();

  return (
    <select
      className="p-[5px] mb-[10px]"
      value={songKey}
      onChange={(e) => setSongKey(e.target.value)}
      onBlur={startGame}
    >
      <option value="song1">Song 1 (120 BPM)</option>
      <option value="song2">Song 2 (140 BPM)</option>
    </select>
  );
}
