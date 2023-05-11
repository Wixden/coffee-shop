import React from "react";
import { AiFillEye } from "react-icons/ai";
import { HiPencil, HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, photo, supplier, taste } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // send selected ID to server
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "This Item has been deleted.", "success");
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="bg-[#F5F4F1] px-7 py-10 rounded-lg hover:shadow-2xl hover:-translate-y-2 duration-500">
      <div className="flex items-center justify-around">
        <div>
          <img src={photo} alt={name} />
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
            <Link to={`/coffee/${_id}`}>
              <AiFillEye />
            </Link>
          </div>
          <div className="bg-[#3C393B] p-2 rounded-md text-white">
            <Link to={`/update-coffee/${_id}`}>
              <HiPencil />
            </Link>
          </div>
          <div className="bg-[#EA4744] p-2 rounded-md text-white">
            <Link onClick={() => handleDelete(_id)}>
              <HiTrash />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
