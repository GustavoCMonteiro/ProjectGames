import { useState, useEffect } from "react";
import { Game } from "../../interfaces/GameList";
import { GameDetail } from "../../interfaces/GameDetail";

interface SteamSearchProps {
  setSelectedGame: React.Dispatch<React.SetStateAction<GameDetail | undefined>>;
}

const SteamSearch = ({ setSelectedGame }: SteamSearchProps) => {
  const [query, setQuery] = useState("");
  const [gamesList, setGamesList] = useState<Game[]>([]);

  useEffect(() => {
    if (query.length < 3) {
      setGamesList([]);
      return;
    }

    const fetchGames = async () => {
      const URL = import.meta.env.VITE_STEAM_SEARCH_URL;
      try {
        const response = await fetch(`${URL}steam-search?q=${query}`);
        const data = await response.json();
        if (data.items) {
          const gameList = data.items.map((game: Game) => ({
            id: game.id,
            name: game.name,
            tiny_image: game.tiny_image,
          }));
          setGamesList(gameList);
        }
      } catch (error) {
        console.error("Erro ao buscar jogos:", error);
      }
    };

    const debounce = setTimeout(fetchGames, 500);

    return () => clearTimeout(debounce);
  }, [query]);

  const fetchGameDetails = async (appid: number) => {
    setQuery("");
    const URL = import.meta.env.VITE_STEAM_SEARCH_URL;
    try {
      const response = await fetch(`${URL}steam-search?appid=${appid}`);
      const data = await response.json();
      setSelectedGame(data[appid].data);
    } catch (error) {
      console.error("Erro ao buscar detalhes do jogo:", error);
    }
  };

  return (
    <div className="relative max-w-lg mx-auto p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Busque um jogo..."
        className="w-full p-2 border border-gray-300 rounded"
      />

      {gamesList.length > 0 && (
        <ul className="absolute top-16 z-50">
          {gamesList.map((game) => (
            <li
              key={game.id}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => fetchGameDetails(game.id)}
            >
              <img
                src={game.tiny_image}
                alt={game.name}
                className="h-10 mr-2"
              />
              <span>{game.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SteamSearch;
