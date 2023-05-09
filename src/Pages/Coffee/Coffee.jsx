import React from "react";
import { Link } from "react-router-dom";
import { GiCoffeeCup } from "react-icons/gi";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";

const Coffee = ({ coffees }) => {
  console.log(coffees);
  return (
    <div className="my-24 max-w-7xl mx-auto">
      <div className="text-center">
        <p>---Sip & Savor---</p>
        <h2 className="text-4xl font-Rancho font-semibold text-[#331A15]">
          Our Popular Products
        </h2>
        <button className="py-2 px-5 rounded-md bg-[#E3B577] flex items-center mx-auto gap-2 font-Rancho font-medium my-7">
          <Link to="/add-coffee">Add Coffee</Link>
          <GiCoffeeCup />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-5 md:p-0">
        {coffees.map((coffee) => (
          <CoffeeCard coffee={coffee} key={coffee._id} />
        ))}
      </div>
    </div>
  );
};

export default Coffee;
