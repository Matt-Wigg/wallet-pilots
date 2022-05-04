export default async function handler(req, res) {
  const options = { method: "GET", headers: { Accept: "application/json" } };
  try {
    const response = await fetch(
      "https://api.opensea.io/api/v1/collections?offset=0&limit=300",
      options
    )
      .then((data) => data.text())
      .catch((err) => console.error(err));
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "max-age=180000");
    res.json(response);
  } catch (error) {
    res.json(error);
    res.status(405).end();
  }
}
