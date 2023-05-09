import { Carousel } from "flowbite-react";
import React from "react";
import bannerImage from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="relative h-[640px]">
      <div className="absolute inset-0 z-10 bg-gradient-to-l from-black to-transparent"></div>
      <div className="absolute md:top-1/3 top-1/3  z-20 text-white">
        <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-2 justify-around">
          <div>
            {/* <h1 className="text-6xl font-Rancho font-bold mb-4">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="text-lg">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p> */}
          </div>
          <div className="px-2 md:p-0">
            <h1 className="text-5xl md:text-6xl font-Rancho font-bold mb-4">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="font-Raleway mt-4 mb-8">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of <br /> every moment!!! Enjoy
              the beautiful moments and make them memorable.
            </p>
            <button className="font-Rancho font-medium bg-[#E3B577] px-5 py-2 text-[#242222] text-2xl rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <img
        src={bannerImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
    </div>
  );
};

export default Banner;
