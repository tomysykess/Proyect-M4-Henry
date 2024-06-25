"use client";
import { useState } from "react";

import LoginForm from "@/components/loginForm/LoginForm";
import RegisterForm from "@/components/registerForm/RegisterFrom";

export default function App() {
  const [cambiarForm, setCambiarForm] = useState(true);

  const toggleForm = () => {
    setCambiarForm((valor) => !valor);
  };

  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ minWidth: "320px" }}
    >
      {cambiarForm ? <LoginForm /> : <RegisterForm />}
      <div className="ml-4">
        <button
          className="px-4 py-2 bg-primary text-white b-s-secondaty border border-secondary hover:text-black rounded-md shadow-md hover:bg-secondary"
          onClick={toggleForm}
        >
          {cambiarForm
            ? "¿No tienes cuenta? Regístrate"
            : "¿Ya tienes cuenta? Inicia sesión"}
        </button>
      </div>
    </div>
  );
}
