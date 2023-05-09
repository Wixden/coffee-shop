import React from "react";
import OurServices from "../../components/OurServices/OurServices";
import Banner from "../../components/Banner/Banner";
import Coffee from "../Coffee/Coffee";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const coffees = useLoaderData();
  return (
    <div>
      <Banner />
      <OurServices />
      <Coffee coffees={coffees} />
    </div>
  );
};

export default Home;
