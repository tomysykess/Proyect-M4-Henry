"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [login, setLogin] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const token = localStorage.getItem("userSession");
    if (token) {
      setLogin(!login);
    }
  }, []);
  const logoutHandle = () => {
    localStorage.removeItem("userSession");
    localStorage.removeItem("cart");
    router.push("/login");
    window.location.reload();
  };
  return (
    <div
      className="flex flex-col items-center justify-around p-3 bg-primary bg-opacity-90 w-full"
      style={{ minWidth: "320px" }}
    >
      <div className="flex items-center justify-center w-full">
        <Link href="/home">
          <img
            src="/LOGO.jpg"
            alt="Logo"
            width={45}
            height={45}
            className="min-w-sd"
          />
        </Link>

        <input
          type="text"
          placeholder="Search..."
          className="w-full md:max-w-md md:flex-1 md:px-2 md:py-1 rounded-full bg-white md:mr-5 md:ml-5"
          style={{ minWidth: "20px" }}
        />
        <Link href="/carrito">
          <img
            src="/Vector.png"
            alt="Cart"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </Link>

        <div className="block md:hidden ml-2" onClick={toggleMenu}>
          <div className="w-3 h-0.5 bg-white my-1"></div>
          <div className="w-3 h-0.5 bg-white my-1"></div>
          <div className="w-3 h-0.5 bg-white my-1"></div>
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:flex-row items-center justify-around w-full mt-5 transition-transform transform -translate-y-full ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-around text-center">
          <Link href="/home/Smartphones">
            <span className="text-white mb-2 md:mb-0 mr-4  hover:text-secondary transition duration-300">
              Smartphones
            </span>
          </Link>

          <Link href="/home/Laptops">
            <span className="text-white mb-2 md:mb-0 mr-4  hover:text-secondary transition duration-300">
              Laptops
            </span>
          </Link>
          <Link href="/home/Tablets">
            <span className="text-white mb-2 md:mb-0 mr-4  hover:text-secondary transition duration-300">
              Tablets
            </span>
          </Link>

          <Link href="/home/Headphones">
            <span className="text-white mb-2 md:mb-0 mr-4  hover:text-secondary transition duration-300">
              Headphones
            </span>
          </Link>

          <Link href="/home/Cameras">
            <span className="text-white mb-2 md:mb-0 mr-4 hover:text-secondary transition duration-300">
              Cameras
            </span>
          </Link>

          <Link href="/home/Printers">
            <span className="text-white mb-2 md:mb-0 mr-4 hover:text-secondary transition duration-300">
              Printers
            </span>
          </Link>

          <Link href="/home/Monitors">
            <span className="text-white mb-2 md:mb-0 mr-4 hover:text-secondary transition duration-300">
              Monitors
            </span>
          </Link>
          {login ? (
            <Link href="/login">
              <button
                onClick={logoutHandle}
                className="hover:text-black  hover:bg-secondary text-white p-1 bg-primary border border-secondary rounded-xl opacity-85"
              >
                Logout
              </button>
            </Link>
          ) : (
            <Link href="/login">
              <button className=" hover:text-black  hover:bg-secondary text-white p-1 bg-primary border border-secondary rounded-xl opacity-85">
                Login
              </button>
            </Link>
          )}
          {login ? (
            <Link href="/dashboard">
              <button className="hover:text-black  hover:bg-secondary text-white p-1 bg-primary border border-secondary rounded-xl opacity-85">
                Profile
              </button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
/* 
Laptops
Tablets
Headphones
Cameras
Printers
Monitors
Storage
Accessories */
