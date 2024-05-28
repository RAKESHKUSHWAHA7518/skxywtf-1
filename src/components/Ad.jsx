import React from "react";
import { Link } from "react-router-dom";
import Apple from "../assests/appleLogo.png";
import Google from "../assests/googleLogo.webp";
import Microsoft from "../assests/microsoftLogo.png";
const Ad = () => {
  return (
    <div className="h-40 w-full bg-gray-700 py-10  ">
      <div className="flex lg:pl-20 h-full w-full justify-between items-center">
        <div className="text-3xl ">
          <div> SKXYWTF</div>
          <button className="bg-orange-400 p-1 rounded-lg">Signup</button>
        </div>
        <div className="flex justify-center  items-ceneter w-full gap-5 overflow-x-hidden">
          <Link to="/stock" className="h-24 w-24 lg:h-32 lg:w-36 bg-teal-200">
            <img src={Apple} className="h-full w-full" alt="apple" />
          </Link>
          <Link to="/stock" className="h-24 w-24 lg:h-32 lg:w-36 bg-teal-200">
            <img src={Google} className="h-full w-full" alt="google" />
          </Link>
          <Link to="/stock" className="h-24 w-24 lg:h-32 lg:w-36 bg-teal-200">
            <img src={Microsoft} className="h-full w-full" alt="microsoft" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ad;
