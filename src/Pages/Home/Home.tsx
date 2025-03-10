import { useState } from "react";

import Game from "./Game";
import { GameDetail } from "../../interfaces/GameDetail";
import SteamSearch from "../../Components/SteamSearch/SteamSearch";

const Home = () => {
  const [selectedGame, setSelectedGame] = useState<GameDetail | undefined>();
  return (
    <div>
      <SteamSearch setSelectedGame={setSelectedGame} />
      <Game game={selectedGame} />
    </div>
  );
};

export default Home;
