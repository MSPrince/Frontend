import React from "react";

function Modal({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? "" : "hidden"
      } bg-black bg-opacity-50`}
    >
      <div className="bg-white p-8 h-auto lg:w-[400px] rounded shadow-md relative">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-700 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        {/* Modal content */}
        <h2 className="text-2xl font-semibold mb-6 mt-4 uppercase text-indigo-700">
          Please Login
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-700 text-white font-semibold py-2 rounded-lg hover:bg-indigo-800 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-indigo-700 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Modal;
