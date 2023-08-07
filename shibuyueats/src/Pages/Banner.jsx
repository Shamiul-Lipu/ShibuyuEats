import { useState } from "react";
import { Link } from "react-router-dom";
import resturantOne from "../assets/rest/res.png";
import resturantTwo from "../assets/rest/res1.png";
import resturantThree from "../assets/rest/res3.png";
import resturantFour from "../assets/rest/res4.png";
import resturantFive from "../assets/rest/res5.png";
import coverImg from "../assets/japan-restaurants-og.jpg";

export default () => {
  const [state, setState] = useState(false);

  return (
    <>
      <section className="py-10">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h1 className="text-sm text-indigo-600 font-medium">
              Over 100 recipes
            </h1>
            <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
              Welcome to ShibuyuEats
            </h2>
            <p>
              Cook up a storm with our mouth-watering recipes that will leave
              your guests asking for more.
              <br />
              Get access to exclusive recipes from top chefs around the world
              and impress your guests.
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <Link
                to={"/login"}
                className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
              >
                Let's get started
              </Link>
              <Link
                to={"/register"}
                className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
              >
                Get access
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <img
              // "https://i.ibb.co/tstLTgP/Screenshot-24.png"
              src={coverImg}
              className=" md:rounded-tl-[108px]"
              alt=""
            />
          </div>
        </div>
        <div className="mt-14 px-4 md:px-8">
          <p className="text-center text-sm text-gray-700 font-semibold">
            Trusted by the best restaurants in Japan
          </p>
          <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
            <img
              className="w-1/6 h-1/6 rounded-lg "
              src={resturantFive}
              alt=""
            />
            <img
              className="w-1/6 h-1/6 rounded-lg "
              src={resturantOne}
              alt=""
            />
            <img className="w-1/6 h-1/6 rounded-lg" src={resturantTwo} alt="" />
            <img
              className="w-1/6 h-1/6 rounded-lg"
              src={resturantThree}
              alt=""
            />
            <img
              className="w-1/6 h-1/6 rounded-lg"
              src={resturantFour}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};
