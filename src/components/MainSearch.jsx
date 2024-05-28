import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const MainSearch = () => {
  return (
    <div className="h-screen w-full pt-20">
      <h1 className="w-full text-5xl py-32 text-center flex flex-wrap justify-center items-center">
        Unlocking Intelligent Financial Mastery
      </h1>
      <div className="w-full h-10 flex justify-center">
        <form action="submit" className=" h-full items-center w-[60%]">
          <input
            type="text"
            placeholder="search stocks"
            className=" px-5 h-full items-center w-full text-black rounded-md"
          />
        </form>
      </div>
      <br />
      <div className="flex justify-center gap-2">
        <div>popular stocks :</div>
        <Link className=" underline" to="/stock">
          GOOG
        </Link>
        <Link className=" underline" to="/stock">
          META
        </Link>
        <Link className=" underline" to="/stock">
          MICR
        </Link>
        <Link className=" underline" to="/stock">
          META
        </Link>
        <Link className=" underline" to="/stock">
          GOOG
        </Link>
        <Link className=" underline" to="/stock">
          MICR
        </Link>
      </div>
    </div>
  );
};

export default MainSearch;
