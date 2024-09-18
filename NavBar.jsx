import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navLink = (
    <>
      <li>
        <Link to="/">
          <button className="btn-none text-xl md:text-white hover:text-yellow-400">
            Home
          </button>
        </Link>
      </li>
      <li>
        <Link to="/project">
          <button className="btn-none  text-xl md:text-white hover:text-yellow-400">
            Projects
          </button>
        </Link>
      </li>
      <li>
        <Link to="/pricing">
          <button className="btn-none text-center text-xl md:text-white hover:text-yellow-400">
            Pricing
          </button>
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <button  style={{ fontFamily: "Maxima Nouva" }} className="btn text-xl bg-yellow-300 border-none text-base-300 w-28 -mt-1 items-center p-2 h-6 mb-2 hover:bg-white hover:text-black">
            Contact
          </button>
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed top-0 py-4 bg-[#14141F] text-white z-50 w-full">
      <div className="navbar-start items-center justify-between w-full p-2">
        <img
          src={logo}
          alt="Logo"
          className={`ml-16 w-[40px] ${isMenuOpen ? "hidden sm:block" : "block"}`}
        />
        
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          className="btn btn-outline border-none lg:hidden"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-full sm:w-full text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-full sm:w-full text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <ul className="menu dropdown-content bg-white text-black rounded-box w-[3300px]  z-10 p-4 sm:p-6 shadow lg:hidden">
          {navLink}
        </ul>
      )}

      <div className="navbar-end hidden lg:flex items-center">
        <ul className="menu menu-horizontal flex justify-center w-full px-4">
          {navLink}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
