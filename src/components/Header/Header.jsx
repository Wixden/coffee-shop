import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import Banner from "../Banner/Banner";
import OurServices from "../OurServices/OurServices";

const Header = () => {
  return (
    <div>
      <div className="border-b border-gray-200 py-1">
        <Navbar
          fluid={true}
          rounded={true}
          className="max-w-7xl container mx-auto"
        >
          <Navbar.Brand href="/">
            <img
              src="https://marketplace.canva.com/EAFLU7Mm3FI/1/0/1600w/canva-brown-and-beige-simple-minimalist-coffee-shop-circle-logo-ww1u6OsW_3o.jpg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Coffee Shop
            </span>
          </Navbar.Brand>
          <Navbar.Collapse>
            <Navbar.Link href="/" active={true}>
              Home
            </Navbar.Link>
            <Navbar.Link href="/add-coffee">Add Coffee</Navbar.Link>
            <Navbar.Link href="/update-coffee">Update Coffee</Navbar.Link>
            <Navbar.Link href="/">Pricing</Navbar.Link>
            <Navbar.Link href="/">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
