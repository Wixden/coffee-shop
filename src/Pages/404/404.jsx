import React from "react";
import Header from "../../components/Header/Header";
import CoffeeFooter from "../../components/Footer/Footer";
import errorImage from "../../assets/404.svg";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className="m-20">
        <button className="group flex items-center gap-3 mx-auto mb-20 font-Rancho font-semibold text-2xl">
          <BsArrowLeft />
          <Link to="/">
            Return Home
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-amber-400 mt-[2px]"></span>
          </Link>
        </button>
        <div className="flex justify-center items-center h-[500px]">
          <img className="h-full" src={errorImage} alt="404 Page not found" />
        </div>
      </div>
      <CoffeeFooter />
    </div>
  );
};

export default ErrorPage;
