export async function getStaticProps(context) {
  const endpoint = "http://localhost:3000/api/coinmarket/get-current-prices";
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(endpoint, options);
  const dataStream = await response.json();
  return {
    props: { dataStream }, // will be passed to the page component as props
  };
}

const Prices = ({ dataStream }) => {
  return (
    <div>
      {dataStream.map((data) => {
        return <div key={data.id}>{data.name} : {Math.round(data.quote.USD.price)}</div>;
      })}
    </div>
  );
};

export default Prices;
