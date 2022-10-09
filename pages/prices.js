import styles from '../styles/Prices.module.css';
import useCurrentPrices from '../hooks/useCurrentPrices';

const Prices = () => {
  const { prices, isLoading, isError } = useCurrentPrices();
  if (isLoading) return <div>LOADING PRICES</div>;
  if (isError) return <div>ERROR</div>;
  return (
    <div className={styles.priceContainer}>
      {prices.map((price, index) => {
        return (
          <div className={styles.prices} key={price.id}>
            {index + 1}. {price.name}: $
            {price.quote.USD.price
              .toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </div> // rounds to two decimals: USD and add comma seperators
        );
      })}
    </div>
  );
};

export default Prices;
