import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../img/logo.png"; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "courses", label: "Courses" },
    { to: "gallery", label: "Gallery" },
  ];

  return (
    <header className="bg-gradient-to-r from-purple-400 to-blue-300 shadow-lg py-4 fixed top-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center px-2">
        
        {/*Logo*/}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Veatify Logo" className="h-10 w-10" />
          <a href="#home" className="text-white text-3xl font-bold">Veatify</a>
        </div>

        {/*Garis 3*/}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/*tampilan*/}
        <div className="hidden md:flex space-x-4 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="text-white bg-purple-500 bg-opacity-80 px-4 py-2 rounded-full shadow-md hover:bg-purple-200 hover:text-purple-900 transition-all duration-300 cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/*Tampilan di mobile*/}
        <div className={`absolute top-16 left-0 w-full bg-gradient-to-r from-purple-400 to-blue-300 md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
          <div className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className="text-white bg-purple-500 bg-opacity-80 px-4 py-2 rounded-full shadow-md hover:bg-purple-200 hover:text-purple-900 transition-all duration-300 cursor-pointer"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
