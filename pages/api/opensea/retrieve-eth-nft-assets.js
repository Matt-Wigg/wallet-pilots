// add infura keys & etherscan options 
export default async function retrieveEthNFTAssets(req, res) {
  const { body: { address } } = req;
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-API-KEY": `${process.env.NEXT_PUBLIC_OPENSEA_KEY}`,
    },
  };
  const data = await fetch(
    `https://api.opensea.io/api/v1/assets?owner=${address}&order_direction=desc&limit=50&include_orders=false`,
    options
  )
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.log(err));
  res.send(data);
}

const getData = async (connectedAccount) => {
  const data = { address: connectedAccount };
  const JSONdata = JSON.stringify(data);
  console.log(JSONdata);
  const endpoint = '/api/opensea/retrieve-eth-nft-assets';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSONdata,
  };
  const response = await fetch(endpoint, options);
  const dataStream = await response.json();
  if (dataStream?.owner) {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, [5000]);
  } else {
    setError(false);
  }
  setOpenSeaData(dataStream);
};
