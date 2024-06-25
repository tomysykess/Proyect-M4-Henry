const TotalProducts = ({
  total,
  onPurchase,
}: {
  total: number;
  onPurchase: () => void;
}) => {
  return (
    <div className="flex-col px-4 py-2 justify-center bg-primary text-white  b-s-secondaty border border-secondaryrounded-md shadow-md hover:text-black  hover:bg-secondary">
      <div className="flex justify-center align-center">
        <h2>{`Total: $${total}`}</h2>
      </div>
      <div className="text-center">
        <p> 👾</p>
        <button onClick={onPurchase}>Realizar Compra!</button>
      </div>
    </div>
  );
};

export default TotalProducts;
