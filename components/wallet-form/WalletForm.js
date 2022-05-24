import { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import styles from "./WalletForm.module.css";
import Image from "next/image";

const WalletForm = () => {
  const [openSeaData, setOpenSeaData] = useState();
  const { account } = useWeb3React();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { address: event.target.address.value.trim() };
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
        {openSeaData &&
          openSeaData.map((asset) => {
            return (
              <a
                href={asset.permalink}
                key={asset.id}
                className={styles.nftInfo}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className={styles.nftImage}>
                  <Image
                    src={asset.image_preview_url}
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    layout="responsive"
                  />
                </div>
                <span className={styles.nftName}>{asset.name || "#" + asset.token_id}</span>
                <span className={styles.nftPrice}>
                  {asset.last_sale?.total_price
                    ? asset.last_sale?.total_price
                    : "Mint"}
                </span>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default WalletForm;
