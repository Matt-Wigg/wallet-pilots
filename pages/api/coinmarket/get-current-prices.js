/* Example in Node.js */
const axios = require("axios");

export default async function retrivePrices(req, res) {
  let response = null;
  const data = await new Promise(async (resolve, reject) => {
    try {
      response = await axios.get(
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
        {
          headers: {
            "X-CMC_PRO_API_KEY": `${process.env.NEXT_PUBLIC_COINMARKET_KEY}`,
          },
        }
      );
    } catch (error) {
      response = null;
      reject(error);
    }
    if (response) {
      resolve(response.data);
    }
  });
  res.send(data.data);
}
