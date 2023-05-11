import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const selectedCoffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    selectedCoffee;
  return (
    <div className="max-w-4xl container mx-auto mt-16 mb-20">
      <button className="group flex items-center gap-3 my-10">
        <BsArrowLeft />
        <Link to="/">
          Back To Home
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-amber-400 mt-[2px]"></span>
        </Link>
      </button>
      <div className="bg-[#F5F4F1] px-7 py-20 rounded-2xl hover:shadow-2xl hover:-translate-y-2 duration-500 border border-gray-200">
        <div className="grid gird-cols-1 md:grid-cols-2 items-center justify-center gap-10">
          <div className="flex justify-center items-center">
            <img className="h-80" src={photo} alt={name} />
          </div>
          <div className="space-y-2 ">
            <h2 className="text-3xl font-Rancho font-semibold text-[#331A15] mb-4">
              El Mejor EsposoTrabajador
            </h2>
            <p>
              <span className="font-semibold text-[#331A15]">Name: </span>
              <span className="text-gray-500 font-Raleway">{name}</span>
            </p>
            <p>
              <span className="font-semibold text-[#331A15]">Quantity: </span>
              <span className="text-gray-500 font-Raleway">{quantity}</span>
            </p>
            <p>
              <span className="font-semibold text-[#331A15]">Supplier: </span>
              <span className="text-gray-500 font-Raleway">{supplier}</span>
            </p>
            <p>
              <span className="font-semibold text-[#331A15]">Taste: </span>
              <span className="text-gray-500 font-Raleway">{taste}</span>
            </p>
            <p>
              <span className="font-semibold text-[#331A15]">Category: </span>
              <span className="text-gray-500 font-Raleway">{category}</span>
            </p>
            <p>
              <span className="font-semibold text-[#331A15]">Details: </span>
              <span className="text-gray-500 font-Raleway">{details}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
