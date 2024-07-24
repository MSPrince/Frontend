import React from "react";
import { FaFacebook, FaInstagram, FaThreads } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-gray-900">
      <div className="px-4 pt-16 mx-auto sm:max-e-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 ">
        <div className="grid pb-10 lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4 ">
            <div className="">
              <div>
                <p className="font-medium tracking-wider text-gray-300">
                  Category
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      World
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      Games
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      Reference
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* category 2 */}
            <div className="">
              <div>
                <p className="font-medium tracking-wider text-gray-300">
                  Category
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      World
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      Games
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      Reference
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      Reference
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* category 3 */}
            <div className="">
              <div>
                <p className="font-medium tracking-wider text-gray-300">
                  Category
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      World
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      Games
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      Reference
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      Reference
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* category 4 */}
            <div className="">
              <div>
                <p className="font-medium tracking-wider text-gray-300">
                  Category
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      World
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      Games
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      Reference
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      Reference
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Suscriber */}
          <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5">
            <p className="font-medium tracking-wider text-gray-300">
              Suscribe to Update
            </p>
            <form action="" className="mt-4 flex flex-col md:flex-row">
              <input
                type="email"
                name="email"
                id="email"
                className="flex-grow items-center w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none focus:shadow-out"
              />
              <button
                type="submit"
                className="inline-flex items-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-orange-500 focus:outline-none border"
              >
                Suscribe
              </button>
            </form>
            <p className="text-gray-500 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              veniam architecto unde, labore exercitationem repellat odit rerum,
              ab sint quaerat vero illo, earum nam quisquam voluptas esse
              incidunt ratione deserunt!
            </p>
          </div>
        </div>

        {/*  */}
        <div className=" flex flex--col justify-between pt-5 pb-10 border-t border-gray-800">
          <p className="text-gray-500">
            {" "}
            <span className="font-bold text-2xl text-orange-500">©</span> Copyright 2024 | All rights Reserved .
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              className="text-gray-500 transition-all duration-300 hover:text-orange-500"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
            <a
              href="/"
              className="text-gray-500 transition-all duration-300 hover:text-orange-500"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="/"
              className="text-gray-500 transition-all duration-300 hover:text-orange-500"
            >
              <FaThreads className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
