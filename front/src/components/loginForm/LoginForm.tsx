"use client";
import React, { useEffect, useState } from "react";

import { ILogingProps } from "@/types/types";
import { ILogingErrorProps } from "@/types/types";
import { validateForm } from "@/utils/formValidations";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [dataUser, setDataUser] = useState<ILogingProps>({
    email: "",
    password: "",
  });

  const [errorUser, setErrorUser] = useState<ILogingErrorProps>({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataUser({ ...dataUser, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    const errors = validateForm(dataUser);
    setErrorUser(errors);
  }, [dataUser]);

  console.log(dataUser);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataUser),
      });

      if (!response.ok) {
        throw new Error(`👾Debes registrarte antes!👾`);
      }

      const json = await response.json();
      const { token, user } = json;
      console.log(json);
      localStorage.setItem(
        "userSession",
        JSON.stringify({ token: token, userData: user })
      );

      localStorage.setItem("cart", JSON.stringify([]));

      alert("👾El usuario se ha logeado correctamente👾");
      router.push("/home");
    } catch (error: any) {
      alert("👾Error al iniciar sesión: " + error.message + "👾");
      console.error("Error al iniciar sesión:", error);
    }
  };
  /*    ;
    setDataUser({
      email: "",
      password: "",
    });
    ; */
  return (
    <div
      className="flex items-center justify-center p-4 min-h-96 min-w-51 "
      style={{ minWidth: "320px" }}
    >
      <div className="p-5 bg-primary rounded-lg opacity-85 border border-secondary ">
        <h2 className="flex justify-center text-white pt-5">Sign in</h2>{" "}
        <form className="p-5" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email-adress" className="block text-white">
              Email:
            </label>
            <input
              id="email-adress"
              name="email"
              type="text"
              value={dataUser.email}
              required
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full p-2 rounded-lg border border-secondary"
            />
            {errorUser.email && (
              <p className="text-myred flex text-center">{errorUser.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-white">
              Password:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={dataUser.password}
              required
              onChange={handleChange}
              placeholder="*******"
              className="w-full p-2 rounded-lg border border-secondary"
            />
            <div style={{ maxWidth: "200px" }}>
              {errorUser.password && (
                <p className="text-myred flex text-center">
                  {errorUser.password}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="p-2 w-full bg-secondary rounded-lg text-white  hover:text-black  shadow-md hover:bg-secondary">
              Login!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
