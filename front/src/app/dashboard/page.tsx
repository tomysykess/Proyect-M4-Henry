"use client";
import { useEffect, useState } from "react";

import { getOrders } from "../../../helpers/orders.helper";
import { IProduct } from "@/types/types";

const Dashboard = () => {
  const [userSession, setUserSession] = useState<any>();
  const [userOrders, setUserOrders] = useState<IProduct[]>([]);
  const [tokenLS, setTokenLS] = useState<string | undefined>();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userSessionStr = localStorage.getItem("userSession");
      setUserSession(JSON.parse(userSessionStr!));
    }
  }, []);

  useEffect(() => {
    if (userSession && userSession.token) {
      setTokenLS(userSession.token);
    }
  }, [userSession]);

  useEffect(() => {
    if (tokenLS) {
      dashboardGetData();
    }
  }, [tokenLS]);

  const dashboardGetData = async () => {
    try {
      const orders: any = await getOrders(tokenLS!);
      if (orders) {
        setUserOrders(orders);
      } else {
        alert("error en la petición del historial");
      }
    } catch (error) {
      alert("no se encontró tu historial de compras");
    }
  };
  console.log("data del token", tokenLS);
  console.log("data de userOrders", userOrders);
  return (
    <div className="w-full min-h-[100%] bg-primary p-10 pb-12 opacity-90 border border-secondary">
      <h1 className="text-2xl font-bold mb-4 text-shadow text-white">
        Bienvenido {userSession?.userData.name}
      </h1>
      <p className="mb-2 text-white">
        Tu direccion: {userSession?.userData.address}
      </p>

      <div>
        <h2 className="text-xl font-bold mb-4 text-white">
          Historias de compras:
        </h2>
        {userOrders && userOrders.length > 0 ? (
          <div className="bg-primary shadow-md rounded px-8 pt-8 pb-8 mb-6 border border-secondary">
            {userOrders.map((order: any) => {
              return (
                <div key={order.id} className="mb-4">
                  <p className="font-bold text-white">
                    {new Date(order.date).toLocaleString()}
                  </p>
                  <p className="font-bold text-white">
                    {" "}
                    Status: {order.status}
                  </p>
                  <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-secondary sm:rounded-lg">
                          <table className="min-w-full divide-y bg-primary">
                            <thead className="bg-primary">
                              <tr>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                                >
                                  Producto
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                                >
                                  Precio
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-primary divide-y divide-primary">
                              {order.products.map((product: any) => (
                                <tr
                                  key={product.id}
                                  className="hover:bg-secondary "
                                >
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-white ">
                                      {product.name}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-white ">
                                      {product.price}
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>No tienes ordenes</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
