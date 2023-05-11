import React, { useState } from "react";
import OurServices from "../../components/OurServices/OurServices";
import Banner from "../../components/Banner/Banner";
import Coffee from "../Coffee/Coffee";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div>
      <Banner />
      <OurServices />
      <Coffee coffees={coffees} setCoffees={setCoffees} />
    </div>
  );
};

export default Home;
