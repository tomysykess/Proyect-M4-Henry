import Card from "../card/Card";
import { IProduct } from "@/types/types";
const Cards = ({ products }: { products: IProduct[] | undefined }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {products?.map((product, i) => {
        return <Card key={i} {...product} />;
      })}
    </div>
  );
};

export default Cards;
