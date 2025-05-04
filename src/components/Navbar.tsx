// src/components/Navbar.tsx
import { Link } from "react-router";
import { JSX } from "react";

const Navbar = (): JSX.Element => {
  return (
    <nav className="sticky top-0 bg-[#1D2951] text-white py-4 px-10 shadow-md border-b-1 border-b-[#F7AA18] sm:px-[4px] md:px-[50px] ">
      <div className="container mx-auto flex justify-between  items-center">
        <div className="flex items-center space-x-5">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
          <Link to="/" className="text-xl font-bold">
          Raju Courier
        </Link>
        </div>
        <div className="space-x-4 hidden md:flex">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          {/* <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
