import React from "react";
import { SlCup, SlBadge } from "react-icons/sl";
import { GiCoffeeBeans } from "react-icons/gi";
import { MdCoffeeMaker } from "react-icons/md";

const OurServices = () => {
  return (
    <div className=" bg-[#ECEAE3]">
      <div className=" max-w-7xl container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center p-5 md:text-left">
        <div className="hover:shadow-2xl rounded-lg border border-gray-300 duration-300 py-5 px-8 hover:-translate-y-1">
          <div className="text-5xl text-[#331A15]">
            <SlCup className="mx-auto md:mx-0" />
          </div>
          <img src="" alt="" />
          <h2 className="text-4xl font-Rancho mt-3 md:mt-5 text-[#331A15]">
            Awesome Aroma
          </h2>
          <p className="font-Raleway text-[#1B1A1A] mt-2 ">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="hover:shadow-2xl rounded-lg border border-gray-300 duration-300 py-5 px-8 hover:-translate-y-1">
          <div className="text-5xl text-[#331A15]">
            <SlBadge className="mx-auto md:mx-0" />
          </div>
          <img src="" alt="" />
          <h2 className="text-4xl font-Rancho mt-5 text-[#331A15]">
            High Quality
          </h2>
          <p className="font-Raleway text-[#1B1A1A] mt-2">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div className="hover:shadow-2xl rounded-lg border border-gray-300 duration-300 py-5 px-8 hover:-translate-y-1">
          <div className="text-5xl text-[#331A15]">
            <GiCoffeeBeans className="mx-auto md:mx-0" />
          </div>
          <img src="" alt="" />
          <h2 className="text-4xl font-Rancho mt-5 text-[#331A15]">
            Pure Grades
          </h2>
          <p className="font-Raleway text-[#1B1A1A] mt-2">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div className="hover:shadow-2xl rounded-lg border border-gray-300 duration-300 py-5 px-8 hover:-translate-y-1">
          <div className="text-5xl text-[#331A15]">
            <MdCoffeeMaker className="mx-auto md:mx-0" />
          </div>
          <img src="" alt="" />
          <h2 className="text-4xl font-Rancho mt-5 text-[#331A15]">
            Proper Roasting
          </h2>
          <p className="font-Raleway text-[#1B1A1A] mt-2">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
