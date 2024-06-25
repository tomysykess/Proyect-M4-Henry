import { IProduct } from "@/types/types";
import categoriesToPreload from "@/utils/categories";

const CarritoProduct: React.FC<{
  removeFromCart: () => void;
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}> = ({ removeFromCart, id, name, price, description, image }) => {
  const handleDelete = () => {
    removeFromCart();
  };
  return (
    <div
      className="flex flex-row items-center md:flex-row lg:w-full xl:w-full gap-6 justify-between bg-primary opacity-85 text-white p-2 border border-secondary rounded-lg m-4 max-w-full w-auto h-50 hover:bg-secondary hover:text-black transition duration-300 "
      style={{ minWidth: "255px" }}
    >
      <div className="flex-shrink-0 w-1/5 md:w-auto">
        <img src={image} alt={name} className="w-20" />
      </div>
      <div className="flex flex-col justify-between md:w-1/2">
        <h1>{name}:</h1>
        <p>{description}</p>
      </div>
      <div className="flex items-center gap-5 flex-col md:w-1/4">
        <h2>${price}</h2>
        <div className="flex">
          <button
            id={id.toString()}
            onClick={handleDelete}
            className=" w-6 bg-myred text-white hover:text-black rounded-full animate-pulse"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarritoProduct;

{
  /* <h2>{categoriesToPreload[categoryId].name}</h2>
   */
}
/*   const handleDelete = () => {
    removeFromCart();
    // Llama a la función removeFromCart cuando se hace clic en el botón
  }; */
/*   <button
            className=" w-6 bg-myred text-white hover:text-black rounded-full animate-pulse"
            onClick={handleDelete}
          >
            X
          </button> */
/* interface CarritoProductProps extends IProduct {
  removeFromCart: () => void; // Debes asegurarte de incluir removeFromCart en las props
}

const CarritoProduct: React.FC<CarritoProductProps> = ({
  id,
  name,
  price,
  description,
  image,
  removeFromCart,
}) => { */
