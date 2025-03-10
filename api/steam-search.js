export default async function handler(req, res) {
  const { q, appid } = req.query;

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (q) {
    try {
      const data = await searchGames(q);
      return res.status(200).json(data);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Erro ao buscar jogos da Steam API" });
    }
  }

  if (appid) {
    try {
      const data = await getGameDetails(appid);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar detalhes do jogo" });
    }
  }

  return res.status(400).json({ error: "Parâmetros inválidos" });
}

async function searchGames(query) {
  try {
    const response = await fetch(
      `https://store.steampowered.com/api/storesearch/?term=${query}&cc=br&l=pt&max=100`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Erro ao buscar jogos.");
  }
}

async function getGameDetails(appid) {
  try {
    const response = await fetch(
      `https://store.steampowered.com/api/appdetails?appids=${appid}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Erro ao buscar detalhes do jogo.");
  }
}
