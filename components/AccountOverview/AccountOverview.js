import { useAccountContext } from "../../context/account";
import { useState } from "react";
import { useEffect } from "react";

const AccountOverview = () => {
  const { account } = useAccountContext();
  const [openSeaData, setOpenSeaData] = useState([]);
  const [error, setError] = useState(false);

  const getData = async (info) => {
    const data = { address: info };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/opensea/retrieve-assets";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const dataStream = await response.json();
    if (dataStream?.owner) {
      setError(true);
    } else {
      setError(false);
    }
    setOpenSeaData(dataStream);
  };

  const calculateTotalSpend = () => {
    let sum = 0;
    openSeaData.assets?.forEach((asset) => {
      if (parseInt(asset.last_sale?.total_price))
        sum += parseInt(asset.last_sale?.total_price) / 1e18;
    });
    return sum;
  };

  useEffect(() => {
    if (account) getData(account);
  }, [account]);

  return (
    <div style={{ paddingBottom: "1rem" }}>
      {account && <div>Your 50 most recent NFT spend total: {calculateTotalSpend()} ETH</div>}
    </div>
  );
};

export default AccountOverview;
