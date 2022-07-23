import styles from "../styles/Prices.module.css";

export async function getServerSideProps({ req, res }) {
  const endpoint = "https://walletpilot.net/api/coinmarket/get-current-prices";
  // req.headers.host === "localhost:3000"
  //   ? `http://${req.headers.host}/api/coinmarket/get-current-prices`
  //   : `https://${req.headers.host}/api/coinmarket/get-current-prices`;
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(endpoint, options);
  console.log(response);
  const prices = await response.json();
  return {
    props: { prices },
  };
}

const Prices = ({ prices }) => {
  return (
    <div className={styles.priceContainer}>
      {prices.map((price, index) => {
        return (
          <div className={styles.prices} key={price.id}>
            {index + 1}. {price.name}: $
            {price.quote.USD.price
              .toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </div> // rounds to two decimals: USD and add comma seperators
        );
      })}
    </div>
  );
};

export default Prices;
