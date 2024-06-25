"use client";

import { IRegisterErrorProps, IRegisterProps } from "@/types/types";
import { validateRegister } from "@/utils/registerValidations";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { error } from "console";
const RegisterFrom = () => {
  const router = useRouter();
  const [flagValidation, setFlagValidation] = useState(false);
  const [dataRegister, setDataRegister] = useState<IRegisterProps>({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const [errorDataRegister, setErrorDataRegister] =
    useState<IRegisterErrorProps>({
      name: "",
      email: "",
      password: "",
      address: "",
      phone: "",
    });
  useEffect(() => {
    if (flagValidation) {
      const errors = validateRegister(dataRegister);
      setErrorDataRegister(errors);
    } else {
      setFlagValidation(true);
    }
  }, [dataRegister]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataRegister({
      ...dataRegister,
      [event.target.name]: event.target.value,
    });
    console.log(dataRegister);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(dataRegister);
    fetch("http://localhost:3001/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataRegister),
    })
      .then((res) => {
        if (!res.ok) {
          console.log("error");
        }
        return res.json();
      })
      .then((json) => {
        /*  localStorage.setItem("token", json.token); */
        alert("👾Se registró correctamente👾");
      });
    setDataRegister({
      name: "",
      email: "",
      password: "",
      address: "",
      phone: "",
    });

    window.location.reload();
  };
  console.log(dataRegister);
  return (
    <div
      className="flex items-center justify-center p-4 min-h-96 min-w-51 "
      style={{ minWidth: "320px" }}
    >
      <div className="p-5 bg-primary rounded-lg opacity-85 border border-secondary ">
        <h2 className="flex justify-center text-white pt-5">Register</h2>
        <form className="p-5" onSubmit={handleSubmit}>
          <div>
            <div className="mb-4">
              <label className="block text-white">Name</label>
              <input
                id="nameRegister"
                name="name"
                type="text"
                value={dataRegister.name}
                required
                onChange={handleChange}
                placeholder="Name..."
                className="w-full p-2 rounded-lg border border-secondary"
              />
              <div style={{ maxWidth: "200px" }}>
                {errorDataRegister.name && (
                  <p className="text-myred flex text-center">
                    {errorDataRegister.name}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-white">Email</label>
              <input
                id="emailRegister"
                name="email"
                type="text"
                value={dataRegister.email}
                required
                onChange={handleChange}
                placeholder="Email..."
                className="w-full p-2 rounded-lg border border-secondary"
              />
              {errorDataRegister.email && (
                <p className="text-myred flex text-center">
                  {errorDataRegister.email}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-white">Password</label>
              <input
                id="passwordRegister"
                name="password"
                type="password"
                value={dataRegister.password}
                required
                onChange={handleChange}
                placeholder="*******"
                className="w-full p-2 rounded-lg border border-secondary"
              />
              <div style={{ maxWidth: "200px" }}>
                {errorDataRegister.password && (
                  <p className="text-myred flex text-center">
                    {errorDataRegister.password}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-white">Address</label>
              <input
                id="addressRegister"
                name="address"
                type="text"
                value={dataRegister.address}
                required
                onChange={handleChange}
                placeholder="Address..."
                className="w-full p-2 rounded-lg border border-secondary"
              />
              <div style={{ maxWidth: "200px" }}>
                {errorDataRegister.address && (
                  <p className="text-myred flex text-center">
                    {errorDataRegister.address}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-white">Phone</label>
              <input
                id="phoneRegister"
                name="phone"
                type="text"
                value={dataRegister.phone}
                required
                onChange={handleChange}
                placeholder="Phone..."
                className="w-full p-2 rounded-lg border border-secondary"
              />
              <div style={{ maxWidth: "200px" }}>
                {errorDataRegister.phone && (
                  <p className="text-myred flex text-center">
                    {errorDataRegister.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button className="p-2 w-full bg-secondary rounded-lg text-white  hover:text-black  shadow-md hover:bg-secondary">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterFrom;
