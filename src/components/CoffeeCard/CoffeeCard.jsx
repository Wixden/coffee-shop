import React from "react";
import { AiFillEye } from "react-icons/ai";
import { HiPencil, HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee }) => {
  const { name, quantity, photo, supplier, taste } = coffee;
  return (
    <div className="bg-[#F5F4F1] px-7 py-10 rounded-lg hover:shadow-2xl hover:-translate-y-2 duration-500">
      <div className="flex items-center justify-around">
        <div>
          <img src={photo} alt="" />
        </div>
        <div className="space-y-2">
          <p>
            <span className="font-medium">Name: </span>
            <span>{name}</span>
          </p>
          <p>
            <span className="font-medium">Quantity: </span>
            <span>{quantity}</span>
          </p>
          <p>
            <span className="font-medium">Supplier: </span>
            <span>{supplier}</span>
          </p>
          <p>
            <span className="font-medium">Taste: </span>
            <span>{taste}</span>
          </p>
        </div>
        <div className="space-y-4">
          <div className="bg-[#D2B48C] p-2 rounded-md text-white">
            <Link>
              <AiFillEye />
            </Link>
          </div>
          <div className="bg-[#3C393B] p-2 rounded-md text-white">
            <Link>
              <HiPencil />
            </Link>
          </div>
          <div className="bg-[#EA4744] p-2 rounded-md text-white">
            <Link>
              <HiTrash />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
