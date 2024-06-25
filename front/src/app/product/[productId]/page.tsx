"use client";
import { getProductById } from "../../../../helpers/product.helper";
import Link from "next/link";
import categoriesToPreload from "@/utils/categories";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IProduct } from "@/types/types";
const DetailProduct = ({ params }: { params: { productId: string } }) => {
  const router = useRouter();
  const [token, setToken] = useState<any>();
  const [product, setProduct] = useState<IProduct>();
  const [cartLS, setCartLS] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getProductById(params.productId);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();

    if (typeof window !== "undefined" && window.localStorage) {
      const userToken = localStorage.getItem("userSession");
      const cart = localStorage.getItem("cart");
      setToken(JSON.parse(userToken!));
      setCartLS(JSON.parse(cart!));
    }
  }, []);

  console.log("Token antes de la actualización:", token);
  console.log("Producto a agregar al carrito:", product);
  console.log("El array del LS cart", cartLS);

  const handleBuy = () => {
    if (!token) {
      alert("👾Debes estar logueado para poder realizar la compra👾");
      router.push("/login");
      return;
    }

    if (token && token.userData && token.userData.orders) {
      const cart = cartLS;

      const productToAdd = JSON.stringify(product);

      const isProductInCart = cart.includes(productToAdd);

      if (isProductInCart) {
        alert("👾Este producto ya está en el carrito👾");
        return;
      }

      /*  si el producto no está en el carrito, se agrega*/
      /* orders.push(productToAdd); */
      cart?.push(productToAdd);

      /*   const updatedToken = {
        ...token,
        userData: {
          ...token.userData,
          orders: orders,
        },
      }; */

      /*    localStorage.setItem("userSession", JSON.stringify(updatedToken)); */
      localStorage.setItem("cart", JSON.stringify(cartLS));
      alert("👾Producto agregado al carrito correctamente👾");
      router.push("/carrito");
    } else {
      alert("👾Ocurrió un error al agregar el producto al carrito👾");
    }
  };
  /*   console.log(token.userData.orders); */

  return (
    <div
      className="flex flex-col lg:flex-row items-center lg:items-stretch lg:h-full justify-between opacity-85 text-white p-2  rounded-lg m-4 max-w-full w-auto h-auto lg:h-50"
      style={{ minWidth: "255px" }}
    >
      <div className="mb-4 lg:mb-0 animate-pulse">
        <Link href={"/home"}>
          <img
            src="/arrow.png"
            alt="flecha para volver atrás"
            className="w-12 h-auto lg:w-20 lg:h-25 bg-myred rounded-full"
          />
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="mb-4 lg:mb-0 lg:mr-4">
          <img
            src={product && product.image}
            alt="imagen del producto"
            className="w-24 h-auto lg:w-auto lg:h-69 2xl:h-34 rounded-2xl"
          />
        </div>

        <div className="rounded-lg  items-center justify-center">
          <div className="text-white mb-2 text-center">
            ${product && product.price}
          </div>
          <div className="text-white text-center">
            stock:{product && product.stock}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between lg:w-1/2">
        <div className="bg-primary p-2 rounded-lg mb-4 lg:mb-0">
          <h1 className="text-white text-center">
            {product && product.name} |
            {product && categoriesToPreload[product.categoryId - 1].name}
          </h1>
        </div>
        <div className="bg-primary p-4 rounded-lg">
          <h1 className="text-white">{product && product.description}</h1>
        </div>
        <div className="flex bg-mygreen p-4 rounded-lg animate-pulse items-center justify-center">
          <button onClick={handleBuy}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
{
  /* <div>page detail {params.productId}</div> */
}
/* 
name,-----
price,
description,-----
image,-----
categoryId,
stock, */
