import Cards from "@/components/cards/Cards";
import categoriesToPreload from "@/utils/categories";
import { getProducts } from "../../../../helpers/product.helper";

const Home = async ({ params }: { params: { categoryName: string } }) => {
  const products = await getProducts();

  const categoryName = params.categoryName;

  const filteredProducts = products?.filter((p) => {
    const category = categoriesToPreload[p.categoryId];

    return category && category.name === categoryName;
  });

  console.log(filteredProducts);

  return (
    <div className="flex justify-center items-center">
      {/*    <h1>ESTE ES EL home: {categoryName}</h1> */}
      <Cards products={filteredProducts} />
    </div>
  );
};

export default Home;
