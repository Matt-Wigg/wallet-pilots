import { useAccountContext } from "../../context/account";
import { useState } from "react";
import styles from "./WalletForm.module.css";
import Image from "next/image";
import { useEffect } from "react";

const WalletForm = () => {
  const [openSeaData, setOpenSeaData] = useState();
  const { account } = useAccountContext();

  const getData = async (info) => {
    const data = { address: info };
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

  useEffect(() => {
    getData(account);
  }, [account]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const accountToSearch = event.target.address.value.trim();
    getData(accountToSearch);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className={styles.searchNFT} htmlFor="first">Search NFTs:</label>
        <input
          className={styles.input}
          type="text"
          id="address"
          name="address"
          placeholder={"Enter wallet address..."}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {openSeaData && (
        <div className={styles.openSeaData}>
          <label>Your NFTs:</label>
          {openSeaData.map((asset) => {
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
                    src={asset.image_url}
                    alt="Picture of the author"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
                <span className={styles.nftName}>
                  {asset.name || "#" + asset.token_id}
                </span>
                <span className={styles.nftPrice}>
                  {asset.last_sale?.total_price
                    ? asset.last_sale.total_price / 1e18 // 18 zeros for ETH
                    : "Minted"}
                </span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default WalletForm;
