// https://github.com/vercel/swr/discussions/878

// import fetcher from '../utilities/fetcher';
// import useSWR from 'swr';

// const useAccountNFTs = (connectedAccount) => {
//   const { data, error } = useSWR(`api/opensea-retrieve-eth-nft-assets`, fetcher);

//   return {
//     nfts: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// };

// export default useAccountNFTs;

// const { data, error } = useSWR(`api/coinmarket/get-current-prices`, fetcher);

// return {
//   prices: data,
//   isLoading: !error && !data,
//   isError: error,
// };

// const getData = async (connectedAccount) => {
//   const data = { address: connectedAccount };
//   const JSONdata = JSON.stringify(data);
//   console.log(JSONdata);
//   const endpoint = '/api/opensea/retrieve-eth-nft-assets';
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSONdata,
//   };
//   const response = await fetch(endpoint, options);
//   const dataStream = await response.json();
//   if (dataStream?.owner) {
//     setError(true);
//     setTimeout(() => {
//       setError(false);
//     }, [5000]);
//   } else {
//     setError(false);
//   }
//   setOpenSeaData(dataStream);
// };
