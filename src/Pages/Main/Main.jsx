import React from "react";
import Header from "../../components/Header/Header";
import CoffeeFooter from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <CoffeeFooter />
    </div>
  );
};

export default Container;
