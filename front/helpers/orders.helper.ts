import { IProduct } from "@/types/types";

const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Reemplaza 'URL_DEL_BACKEND_AQUI' con la URL real de tu servicio backend
export async function crearOrders(products: number[], token: string) {
  try {
    const res = await fetch(`${apiUrl}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ products }),
    });
    return res.json();
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  }
}

export async function getOrders(token: string) {
  try {
    const res = await fetch(`${apiUrl}/users/orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const DBorders = await res.json();
    return DBorders;
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  }
}
