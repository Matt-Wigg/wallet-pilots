import { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import styles from "./WalletForm.module.css";

const WalletForm = () => {
  const [openSeaData, setOpenSeaData] = useState();
  const { account } = useWeb3React();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { address: event.target.address.value };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/opensea-test";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const dataStream = await response.json();
    setOpenSeaData(dataStream.assets);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first">Search NFT names:</label>
        <input
          className={styles.input}
          type="text"
          id="address"
          name="address"
          placeholder={"Enter wallet address..."}
          value={account && account}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className={styles.openSeaData}>
        {openSeaData && openSeaData.map((asset) => {
          return <div key={asset.id}>{asset.name}</div>;
        })}
      </div>
    </div>
  );
};

export default WalletForm;
