import Carrito from "@/components/carrito/Carrito";
import productsToPreLoad from "@/utils/products";
import { getProducts } from "../../../helpers/product.helper";
import { IProduct } from "@/types/types";

const page = async () => {
  /*   const products = await getProducts(); */
  return (
    <div>
      <Carrito />
    </div>
  );
};

export default page;
