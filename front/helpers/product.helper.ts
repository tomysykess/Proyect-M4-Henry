import { IProduct } from "@/types/types";
import categoriesToPreload from "@/utils/categories";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
console.log(apiUrl);
export async function getProductsDB() {
  try {
    const res = await fetch(`${apiUrl}/products`, {
      method: "GET",
    });
    const products: IProduct[] = await res.json();
    return products;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getProducts() {
  try {
    const productsDB = await getProductsDB();
    return productsDB;
  } catch (error: any) {
    console.log("aaa");
  }
}

export async function getProductById(id: string) {
  console.log(id);
  try {
    const products: IProduct[] | undefined = await getProducts();
    /*    console.log(products); */
    const product: IProduct | undefined = products?.find(
      (product) => product.id.toString() === id
    );
    /*    console.log(product); */

    if (!product) throw new Error("Product not found");
    return product;
  } catch (error: any) {
    throw new Error(error);
  }
}
