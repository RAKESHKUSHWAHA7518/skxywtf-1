import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full z-20">
      <div className="flex justify-between w-full px-20 py-5 bg-slate-900">
        <Link className="text-3xl" to="/">
          SKXYWTF
        </Link>
        <div className="flex justify-center items-center gap-5">
          <FaSearch className="cursor-pointer" size={20} />
          <button className="px-2 py-1 rounded-lg bg-orange-500 text-center">
            signup
          </button>
          <div onClick={handleNav}>
            {nav ? (
              <IoClose size={24} className="menu-icon cursor-pointer" />
            ) : (
              <IoMenu size={24} className="menu-icon cursor-pointer" />
            )}
          </div>
        </div>
      </div>
      <div
        className="menu-bar "
        style={{
          width: "100%",
          height: "50%",
          position: "fixed",
          top: 75,
          right: nav ? 0 : "-100%",

          backgroundColor: "white",
          color: "black",
          transition: "right 0.3s ease-in-out",
          display: nav ? "flex" : "none",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="text-center w-full  ">
          <div className="my-4 py-1  hover:bg-gray-200">
            <Link to="/about"> About Us</Link>
          </div>
          <div className="my-4 py-1  hover:bg-gray-200">
            <Link to="/subscription">Subscription</Link>
          </div>
          <Link className="my-4 py-1  hover:bg-gray-200">
            <Link to="/terms">Terms & Conditions</Link>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
