import { Label, TextInput, Textarea } from "flowbite-react";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const loadCoffeeData = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, photo, details } =
    loadCoffeeData;
  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const details = form.details.value;

    const updateCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      photo,
      details,
    };
    console.log(updateCoffee);

    // Send data to server/
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: `${name} Updated Successfully`,
            icon: "success",
            confirmButtonText: "OK",
          });
        } else if (data.upsertedId) {
          Swal.fire({
            title: "Success!",
            text: `${name} Item Added Successfully`,
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
    // form.reset();
  };

  return (
    <div>
      <div className="mt-8 mb-24 max-w-5xl mx-auto ">
        <button className="group flex items-center gap-3">
          <BsArrowLeft />
          <Link to="/">
            Back To Home
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-amber-400 mt-[2px]"></span>
          </Link>
        </button>
        <div className="bg-[#F4F3F0] px-20 py-16 rounded-xl mt-5">
          <h2 className=" text-center mb-5">
            <span className="text-3xl font-Raleway font-semibold stroke-white text-[#374151] ">
              Update:
            </span>{" "}
            <span className="text-3xl font-Rancho ml-5 font-semibold stroke-white text-[#374151] ">
              {name}
            </span>
          </h2>
          <p className="font-Raleway text-center md:max-w-3xl md:mx-auto">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </p>
          <form
            className="flex flex-col gap-4 mt-7"
            onSubmit={handleUpdateCoffee}
          >
            <div className="flex justify-between items-center gap-10">
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Coffee Name" />
                </div>
                <TextInput
                  name="name"
                  id="name"
                  type="text"
                  defaultValue={name}
                  required={true}
                />
              </div>
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="quantity" value="Quantity" />
                </div>
                <TextInput
                  name="quantity"
                  id="quantity"
                  type="text"
                  defaultValue={quantity}
                  required={true}
                />
              </div>
            </div>
            <div className="flex justify-between items-center gap-10">
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="coffee-supplier" value="Coffee Supplier" />
                </div>
                <TextInput
                  name="supplier"
                  id="coffee-supplier"
                  type="text"
                  defaultValue={supplier}
                  required={true}
                />
              </div>
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="taste" value="Taste" />
                </div>
                <TextInput
                  name="taste"
                  id="coffee-taste"
                  type="text"
                  defaultValue={taste}
                  required={true}
                />
              </div>
            </div>
            <div className="flex justify-between items-center gap-10">
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="category" value="Category" />
                </div>
                <TextInput
                  name="category"
                  id="Category"
                  type="text"
                  defaultValue={category}
                  required={true}
                />
              </div>
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="photo" value="Photo URL" />
                </div>
                <TextInput
                  name="photo"
                  id="photo"
                  type="text"
                  defaultValue={photo}
                  required={true}
                />
              </div>
            </div>
            <div className="w-full mb-5">
              <div className="mb-2 block">
                <Label htmlFor="details" value="Coffee Details" />
              </div>
              <Textarea
                id="details"
                name="details"
                defaultValue={details}
                required={true}
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="py-3 bg-[#D2B48C] hover:bg-[#c4914e] rounded-md font-semibold duration-300"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
