export default async function handler(req, res) {
  const {
    body: { address },
  } = req;
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-API-KEY": `${process.env.NEXT_PUBLIC_OPENSEA_KEY}`,
    },
  };
  fetch(
    `https://api.opensea.io/api/v1/assets?owner=${address}&order_direction=desc&limit=50&include_orders=false`,
    options
  )
    .then((response) => response.json())
    .then((response) => res.send(response))
    .catch((err) => console.log(err));
}
