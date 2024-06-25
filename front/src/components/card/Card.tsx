"use client";
import Link from "next/link";
import categoriesToPreload from "../../utils/categories";
import { IProduct } from "@/types/types";

const Card = ({
  id,
  name,
  description,
  price,
  image,
  stock,
  categoryId,
}: IProduct) => {
  return (
    <Link href={`/product/${id}`}>
      <div
        className="flex flex-col items-center justify-center bg-primary opacity-85 text-white p-4 border border-secondary rounded-lg m-4 max-w-xs w-auto h-auto
        hover:bg-secondary hover:text-black transition duration-300"
        style={{ minWidth: "255px", minHeight: "485px" }}
      >
        <img
          src={image}
          className="w-full max-w-100 max-h-200 rounded-xl  mb-4"
          alt=""
        />
        <div className="text-center">
          <h2>{name}</h2>
          <p>${price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;

/*       <p>{description}</p> */
{
}
{
  /* <p>Category: {categoriesToPreload[categoryId].name}</p>
<p>Stock: {stock}</p> */
}
