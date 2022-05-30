import { useAccountContext } from "../../context/account";
import { useState } from "react";
import styles from "./NFTSearch.module.css";
import Image from "next/image";
import { useEffect } from "react";

import AccountOverview from "../AccountOverview/AccountOverview";

const NFTSearch = () => {
  const [openSeaData, setOpenSeaData] = useState();
  const [error, setError] = useState(false);
  const { account } = useAccountContext();

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

  useEffect(() => {
    if (account) getData(account);
  }, [account]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const accountToSearch = event.target.address.value.trim();
    getData(accountToSearch);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setError(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className={styles.searchNFT} htmlFor="first">
          Search NFTs:
        </label>
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
      {error && (
        <div className={styles.errorContainer}>
          <div className={styles.errorMessage}>
            Please enter a valid address. ENS is not currently supported.
          </div>
          <button onClick={(e) => handleClick(e)} className={styles.errorClose}>
            x
          </button>
        </div>
      )}
      {openSeaData?.assets && (
        <div className={styles.openSeaData}>
          <AccountOverview />
          {openSeaData.assets.map((asset) => {
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
                    alt={asset.name}
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

export default NFTSearch;
