import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const details = form.details.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      photo,
      details,
    };
    // console.log(newCoffee);

    // Send data to server/
    fetch("http://localhost:5000/add-coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
    form.reset();
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
          <h2 className="text-3xl font-Rancho font-semibold stroke-white text-[#374151] text-center mb-5">
            Add New Coffee
          </h2>
          <p className="font-Raleway text-center md:max-w-4xl md:mx-auto">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content.
          </p>
          <form className="flex flex-col gap-4 mt-7" onSubmit={handleAddCoffee}>
            <div className="flex justify-between items-center gap-10">
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Coffee Name" />
                </div>
                <TextInput
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Latte/Iced Latte"
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
                  placeholder="Available quantity"
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
                  placeholder="Starbucks/Dunkin"
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
                  placeholder="French Vanilla/Peppermint"
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
                  placeholder="Cappuccino/Americano/Espresso"
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
                  placeholder="Photo Urs"
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
                placeholder="A brief coffee details"
                required={true}
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="py-3 bg-[#D2B48C] hover:bg-[#c4914e] rounded-md font-semibold duration-300"
            >
              Add Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
