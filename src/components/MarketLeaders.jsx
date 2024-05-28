import React from "react";
import { Link } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import nvdia from "../assests/nvidia.webp";
const MarketLeaders = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="h-full pb-32">
      <div className="pl-5">
        {" "}
        <div className="text-4xl">MARKET LEADERS:</div>
        <div className="text-4xl">TODAY'S TOP TRADE</div>
      </div>

      <br />
      <br />
      <div className="group">
        <div className="flex overflow-hidden space-x-10">
          <div className="flex space-x-10 animate-loop-scroll  group-hover:paused">
            <Link to="/stock" className="bg-gray-700 h-60 w-48 rounded-lg">
              <div className="h-full w-full z-10  justify-center text-center">
                <div className="flex justify-center my-5">
                  <img
                    src={nvdia}
                    alt="Lucy"
                    className=" flex justify-center bg-gray-200 h-10 w-10"
                  />
                </div>

                <div className="flex justify-center my-5">
                  <button className="flex   items-center justify-center rounded-md border text-black p-3 bg-gray-500 border-b">
                    LUCY
                  </button>
                </div>

                <p className="text-center ">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </Link>
            <Link to="/stock" className="bg-gray-700 h-60 w-48 rounded-lg">
              <div className="h-full w-full z-10  justify-center text-center">
                <div className="flex justify-center my-5">
                  <img
                    src={nvdia}
                    alt="Lucy"
                    className=" flex justify-center bg-gray-200 h-10 w-10"
                  />
                </div>

                <div className="flex justify-center my-5">
                  <button className="flex   items-center justify-center rounded-md border text-black p-3 bg-gray-500 border-b">
                    LUCY
                  </button>
                </div>

                <p className="text-center ">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </Link>
            <Link to="/stock" className="bg-gray-700 h-60 w-48 rounded-lg">
              <div className="h-full w-full z-10  justify-center text-center">
                <div className="flex justify-center my-5">
                  <img
                    src={nvdia}
                    alt="Lucy"
                    className=" flex justify-center bg-gray-200 h-10 w-10"
                  />
                </div>

                <div className="flex justify-center my-5">
                  <button className="flex   items-center justify-center rounded-md border text-black p-3 bg-gray-500 border-b">
                    LUCY
                  </button>
                </div>

                <p className="text-center ">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </Link>
            <Link to="/stock" className="bg-gray-700 h-60 w-48 rounded-lg">
              <div className="h-full w-full z-10  justify-center text-center">
                <div className="flex justify-center my-5">
                  <img
                    src={nvdia}
                    alt="Lucy"
                    className=" flex justify-center bg-gray-200 h-10 w-10"
                  />
                </div>

                <div className="flex justify-center my-5">
                  <button className="flex   items-center justify-center rounded-md border text-black p-3 bg-gray-500 border-b">
                    LUCY
                  </button>
                </div>

                <p className="text-center ">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </Link>
            <Link to="/stock" className="bg-gray-700 h-60 w-48 rounded-lg">
              <div className="h-full w-full z-10  justify-center text-center">
                <div className="flex justify-center my-5">
                  <img
                    src={nvdia}
                    alt="Lucy"
                    className=" flex justify-center bg-gray-200 h-10 w-10"
                  />
                </div>

                <div className="flex justify-center my-5">
                  <button className="flex   items-center justify-center rounded-md border text-black p-3 bg-gray-500 border-b">
                    LUCY
                  </button>
                </div>

                <p className="text-center ">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </Link>
            <Link to="/stock" className="bg-gray-700 h-60 w-48 rounded-lg">
              <div className="h-full w-full z-10  justify-center text-center">
                <div className="flex justify-center my-5">
                  <img
                    src={nvdia}
                    alt="Lucy"
                    className=" flex justify-center bg-gray-200 h-10 w-10"
                  />
                </div>

                <div className="flex justify-center my-5">
                  <button className="flex   items-center justify-center rounded-md border text-black p-3 bg-gray-500 border-b">
                    LUCY
                  </button>
                </div>

                <p className="text-center ">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </Link>
          </div>
          <div className=" aria-hidden:true flex space-x-10 animate-loop-scroll  group-hover:paused">
            <Link to="/stock" className="bg-gray-700 h-60 w-48 rounded-lg">
              <div className="h-full w-full z-10  justify-center text-center">
                <div className="flex justify-center my-5">
                  <img
                    src={nvdia}
                    alt="Lucy"
                    className=" flex justify-center bg-gray-200 h-10 w-10"
                  />
                </div>

                <div className="flex justify-center my-5">
                  <button className="flex   items-center justify-center rounded-md border text-black p-3 bg-gray-500 border-b">
                    LUCY
                  </button>
                </div>

                <p className="text-center ">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </Link>
            <Link to="/stock" className="bg-gray-700 h-60 w-48 rounded-lg">
              <div className="h-full w-full z-10  justify-center text-center">
                <div className="flex justify-center my-5">
                  <img
                    src={nvdia}
                    alt="Lucy"
                    className=" flex justify-center bg-gray-200 h-10 w-10"
                  />
                </div>

                <div className="flex justify-center my-5">
                  <button className="flex   items-center justify-center rounded-md border text-black p-3 bg-gray-500 border-b">
                    LUCY
                  </button>
                </div>

                <p className="text-center ">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </Link>
            <Link to="/stock" className="bg-gray-700 h-60 w-48 rounded-lg">
              <div className="h-full w-full z-10  justify-center text-center">
                <div className="flex justify-center my-5">
                  <img
                    src={nvdia}
                    alt="Lucy"
                    className=" flex justify-center bg-gray-200 h-10 w-10"
                  />
                </div>

                <div className="flex justify-center my-5">
                  <button className="flex   items-center justify-center rounded-md border text-black p-3 bg-gray-500 border-b">
                    LUCY
                  </button>
                </div>

                <p className="text-center ">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </Link>
            <Link to="/stock" className="bg-gray-700 h-60 w-48 rounded-lg">
              <div className="h-full w-full z-10  justify-center text-center">
                <div className="flex justify-center my-5">
                  <img
                    src={nvdia}
                    alt="Lucy"
                    className=" flex justify-center bg-gray-200 h-10 w-10"
                  />
                </div>

                <div className="flex justify-center my-5">
                  <button className="flex   items-center justify-center rounded-md border text-black p-3 bg-gray-500 border-b">
                    LUCY
                  </button>
                </div>

                <p className="text-center ">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </Link>
            <Link to="/stock" className="bg-gray-700 h-60 w-48 rounded-lg">
              <div className="h-full w-full z-10  justify-center text-center">
                <div className="flex justify-center my-5">
                  <img
                    src={nvdia}
                    alt="Lucy"
                    className=" flex justify-center bg-gray-200 h-10 w-10"
                  />
                </div>

                <div className="flex justify-center my-5">
                  <button className="flex   items-center justify-center rounded-md border text-black p-3 bg-gray-500 border-b">
                    LUCY
                  </button>
                </div>

                <p className="text-center ">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </Link>
            <Link to="/stock" className="bg-gray-700 h-60 w-48 rounded-lg">
              <div className="h-full w-full z-10  justify-center text-center">
                <div className="flex justify-center my-5">
                  <img
                    src={nvdia}
                    alt="Lucy"
                    className=" flex justify-center bg-gray-200 h-10 w-10"
                  />
                </div>

                <div className="flex justify-center my-5">
                  <button className="flex   items-center justify-center rounded-md border text-black p-3 bg-gray-500 border-b">
                    LUCY
                  </button>
                </div>

                <p className="text-center ">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketLeaders;
