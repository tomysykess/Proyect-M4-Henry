"use client";
import { Carousel } from "flowbite-react";
import { useState, useEffect } from "react";

export function TheCarousel() {
  const [vw, setVw] = useState(351);

  useEffect(() => {
    const handleResize = () => {
      setVw(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setVw(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const imagen1 = vw < 351 ? "pngegg3.png" : "/slide5.png";
  const imagen2 = vw < 351 ? "pngegg2.png" : "/slide2.jpg";
  const imagen3 = vw < 351 ? "pngegg1.png" : "/slide3.jpg";
  const imagen4 = vw < 351 ? "pngegg4.png" : "/slide1.jpg";
  const imagen5 = vw < 351 ? "pngegg5.png" : "/slide4.jpg";

  return (
    <div
      className="h-56 sm:h-66 lg:h-96 2xl:h-96 opacity-800"
      style={{ minWidth: "320px" }}
    >
      <Carousel>
        <img
          src={imagen1}
          className="h-full w-full sm:w-full sm:h-auto xl:h-500"
        />
        <img src={imagen2} className="h-full w-auto sm:w-full" />
        <img src={imagen3} className="h-full w-auto sm:w-full" />
        <img src={imagen4} className="h-full w-auto sm:w-full" />
        <img src={imagen5} className="h-full w-auto sm:w-full" />
      </Carousel>
    </div>
  );
}
