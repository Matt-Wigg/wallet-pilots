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

/* Example in Node.js */
// const axios = require("axios");
//
// let response = null;
// new Promise(async (resolve, reject) => {
//   try {
//     response = await axios.get(
//       "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
//       {
//         headers: {
//           "X-CMC_PRO_API_KEY": "b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c",
//         },
//       }
//     );
//   } catch (ex) {
//     response = null;
//     // error
//     console.log(ex);
//     reject(ex);
//   }
//   if (response) {
//     // success
//     const json = response.data;
//     console.log(json);
//     resolve(json);
//   }
// });
