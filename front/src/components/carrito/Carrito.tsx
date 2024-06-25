"use client";
import { IProduct } from "@/types/types";
import CarritoProduct from "../carritoProduct/CarritoProduct";
import ButtonToHome from "../buttonToHome/ButtonToHome";
import { useEffect, useState } from "react";
import TotalProducts from "../totalProducts/TotalProducts";
import { crearOrders } from "../../../helpers/orders.helper";
import { useRouter } from "next/navigation";

const Carrito = () => {
  const router = useRouter();
  const [token, setToken] = useState<string>();
  const [productsLS, setProductsLS] = useState<IProduct[] | string | undefined>(
    undefined
  );
  const [cartLS, setCartLS] = useState<IProduct[]>([]);
  const [total, setTotal] = useState<number>(0);

  /* HARDCODEADO  const total = 4;*/
  useEffect(() => {
    const userSessionStr = localStorage.getItem("userSession");
    const cartStr = localStorage.getItem("cart");

    if (userSessionStr && cartStr) {
      const userSession = JSON.parse(userSessionStr);
      const cart = JSON.parse(cartStr);
      console.log(cart);

      if (cart) {
        let newTotal = 0;
        cart?.map((p: any) => {
          const prod = JSON.parse(p);
          newTotal = newTotal + prod.price;
          console.log(newTotal);
          setTotal(newTotal);
        });
      }

      if (userSession.userData.orders) {
        const orders = userSession.userData.orders;
        const elToken = userSession.token;
        setToken(elToken);
        setProductsLS(orders);
        console.log(productsLS);
        setCartLS(cart);
      }
    } else {
      alert("👾Debe iniciar sesión para ver tu carrito👾");
      router.push("/login");
    }
  }, []);

  const removeFromCart = (productId: string) => {
    console.log("Eliminar producto del carrito con ID:", productId);

    if (cartLS) {
      /* filtrar el carrito para eliminar el producto con el id especificado */
      const updatedCart = cartLS.filter((productJSON: any) => {
        const product = JSON.parse(productJSON);
        console.log(product);
        return product.id !== Number(productId);
      });

      console.log("Carrito antes de la eliminación:", cartLS);
      console.log("Carrito después de la eliminación:", updatedCart);

      /* actualizar el estado del carrito y el Local Storage con el nuevo carrito */
      setCartLS(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      alert("👾Se eliminó el producto del carrito👾");
      let newTotal = 0;
      cartLS?.map((p: any) => {
        const prod = JSON.parse(p);
        newTotal = newTotal + prod.price;
        console.log(newTotal);
        setTotal(newTotal);
        window.location.reload();
      });
    } else {
      console.log("No se encontró ningún carrito en el localStorage");
    }
  };
  /*    */
  const handlePurchase = async () => {
    let products: number[] = [];
    try {
      /* me falta mapear  hacer un array de numeros para la peticion */
      cartLS.forEach((p: any) => {
        const parseP = JSON.parse(p);
        products.push(parseP.id);
      });
      console.log(products);

      /* corregir pedido  */

      const newOrders = await crearOrders(products, token!);
      console.log(newOrders);
      const { id, status, date } = newOrders;
      console.log(id, status, date);
      localStorage.setItem("cart", "[]");
      const userSessionStr = JSON.parse(localStorage.getItem("userSession")!);
      console.log(userSessionStr);
      const orders = userSessionStr.userData.orders;
      orders.push({
        id: id,
        status: status,
        date: date,
      });
      console.log("orders:", orders);
      localStorage.setItem("userSession", JSON.stringify(userSessionStr));
      setCartLS([]);
      setTotal(0);
      alert("👾Compra realizada con éxito👾");
      router.push("/dashboard");
    } catch (error: any) {
      /*  console.log("Error:", error); */
      alert("👾Ocurrió un error al realizar la compra👾");
    }
  };
  /*   console.log("esto es products", productsLS); */
  return (
    <div className="flex-col flex-wrap justify-center">
      <p className="text-center text-white text-3xl mt-5 p-5 bg-primary border border-secondary rounded-xl opacity-90">
        Tu Carrito:
      </p>
      {cartLS.length === 0 ? (
        <div className="flex  text-center align-center flex-col px-4 py-2 justify-center bg-primary text-white  b-s-secondaty border border-secondary hover:text-black rounded-md shadow-md hover:bg-secondary">
          <h1>👾 Carrito vacío :c 👾</h1>
        </div>
      ) : (
        Array.isArray(cartLS) &&
        cartLS.map((productJSON: any, i) => {
          try {
            const product = JSON.parse(productJSON);
            return (
              <div key={i}>
                <CarritoProduct
                  key={product.id}
                  {...product}
                  removeFromCart={() => removeFromCart(product.id)}
                />
              </div>
            );
          } catch (error) {
            console.error("Error al analizar el producto JSON:", error);
            return null;
          }
        })
      )}
      {cartLS.length === 0 ? (
        ""
      ) : (
        <TotalProducts total={total} onPurchase={handlePurchase} />
      )}
      <ButtonToHome />
    </div>
  );
};
export default Carrito;

/* <CarritoProduct
                id={product.id}
                key={product.id}
                {...product}
                removeFromCart={() => removeFromCart(product.id)} // Pasar la función removeFromCart con el ID del producto como argumento
              /> */
