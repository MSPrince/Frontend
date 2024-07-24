import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXmark,
} from "react-icons/fa6";
import Modal from "./Modal";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen , setIsModalOpen] = useState(false)
  
  
  
const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  // navItems
  const navItems = [
    {
      path: "/",
      link: "Home",
    },
    {
      path: "/services",
      link: "Services",
    },
    {
      path: "/about",
      link: "About",
    },
    {
      path: "/blogs",
      link: "Blogs",
    },
    {
      path: "/contact-us",
      link: "Contact-Us",
    },
  ];

// Modal Detail
const openModal=()=>{
  setIsModalOpen(true);
}
const closeModal=()=>{
  setIsModalOpen(false);
  }




  return (
    <header className="bg-black text-white fixed top-0 right-0 left-0">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-white">
          A Doctor's <span className="text-orange-500">Diary</span>
        </a>

        {/* nav Items for large devices */}
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }) => (
            <li
              key={path}
              className="text-white hover:text-orange-300 transition"
            >
              <NavLink className={({isActive , isPending})=>isActive ? "active":isPending ? "pending":""} to={path}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* menu icons */}
        <div className="text-white lg:flex gap-4 items-center hidden">
          <a href="/" className="hover:text-orange-300">
            <FaFacebook />
          </a>
          <a href="/" className="hover:text-orange-300">
            <FaLinkedin />
          </a>
          <a href="/" className="hover:text-orange-300">
            <FaInstagram />
          </a>
          <button onClick={openModal} className="bg-orange-500 px-6 py-2 rounded-md font-medium hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">
            Login
          </button>
        </div>

{/* our modal component here */}
<Modal isOpen={isModalOpen}onClose={closeModal}/>






        {/* mobile menu button display only mobile screen */}
        <div className="md:hidden">
          <button className="cursor-pointer" onClick={toggleMenu}>
            {isMenuOpen ? <FaXmark /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* menu items only for mobile */}
      <div>
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-black ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full transition-all ease-in-out"
              : "hidden"
          }`}
        >
          {navItems.map(({ path, link }) => (
            <li key={path}>
              <NavLink
                onClick={toggleMenu}
                to={path}
                className="text-white hover:text-orange-300 transition"
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
