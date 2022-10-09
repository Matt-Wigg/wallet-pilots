import useSWR from 'swr';

const useCurrentPrices = (id) => {
  const { data, error } = useSWR(`/api/user/${id}`, fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useCurrentPrices;
