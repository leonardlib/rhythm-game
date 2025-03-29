import { useGameState } from '../../providers/game-state-provider';

export function GameBoard() {
  const { canvasRef } = useGameState();

  return (
    <canvas
      className="border border-black bg-[#111] block my-0 mx-auto"
      ref={canvasRef}
      width={800}
      height={600}
    />
  );
}
