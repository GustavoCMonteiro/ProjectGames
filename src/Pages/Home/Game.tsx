import Accordion from "../../Components/Accordion/Accordion";
import { GameDetail } from "../../interfaces/GameDetail";

interface GameProps {
  game: GameDetail | undefined;
}

const Game = ({ game }: GameProps) => {
  console.log(game);
  if (!game) return <div>Carregando...</div>;
  return (
    <div>
      <Accordion title={game.name}>
        <p>{game?.short_description}</p>
      </Accordion>
    </div>
  );
};

export default Game;
