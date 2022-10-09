import fetcher from './fetcher';
import useSWR from 'swr';

const useCurrentPrices = () => {
  const { data, error } = useSWR(`api/coinmarket/get-current-prices`, fetcher);

  return {
    prices: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useCurrentPrices;
