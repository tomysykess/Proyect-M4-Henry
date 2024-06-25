"use client";
import Link from "next/link";

const ButtonToHome = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Link href={"/home"}>
          <button className="px-4 py-2 bg-primary text-white  b-s-secondaty border border-secondary hover:text-black rounded-md shadow-md hover:bg-secondary ">
            Ir a la página de inicio
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ButtonToHome;
