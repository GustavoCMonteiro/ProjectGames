export default async function handler(req, res) {
  const { q } = req.query;

  // Definindo cabeçalhos CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    // Preflight request (opcional)
    return res.status(200).end();
  }

  if (!q) {
    return res.status(400).json({ error: "Faltando parâmetro de busca" });
  }

  try {
    const response = await fetch(
      `https://store.steampowered.com/api/storesearch/?term=${q}&cc=br&l=pt&max=100`
    );
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar dados da Steam API" });
  }
}
