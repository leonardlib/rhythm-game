import { useGameState } from '../../providers/game-state-provider';

export function ScoreBoard() {
  const { score, combo } = useGameState();

  return (
    <div className="font-[24px] mb-[10px]">
      Score: {score} | Combo: {combo}
    </div>
  );
}
