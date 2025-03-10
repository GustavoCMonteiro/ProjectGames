import { GameDetail } from "../../interfaces/GameDetail";

interface GameProps {
  game: GameDetail | undefined;
}

const Game = ({ game }: GameProps) => {
  console.log(game);
  return <div>Game</div>;
};

export default Game;
