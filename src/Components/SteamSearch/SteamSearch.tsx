import { useState, useEffect } from "react";
import { Game } from "./Interface";

const SteamSearch = () => {
  const [query, setQuery] = useState("");
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    if (query.length < 3) {
      setGames([]);
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
          setGames(gameList);
        }
      } catch (error) {
        console.error("Erro ao buscar jogos:", error);
      }
    };

    const debounce = setTimeout(fetchGames, 500); // Debounce de 500ms

    return () => clearTimeout(debounce);
  }, [query]);

  return (
    <div className="max-w-lg mx-auto p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Busque um jogo..."
        className="w-full p-2 border border-gray-300 rounded"
      />

      {games.length > 0 && (
        <ul className="mt-2 border border-gray-200 rounded shadow">
          {games.map((game) => (
            <li
              key={game.id}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => {}}
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
