import React, { useState } from "react";
import { Link } from "react-router-dom";
import Headerdown from "./Headerdown";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import MenuIntroduction from "../Dropdowns/Navdropdown";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className="bg-gray-800 text-white sticky top-0"
        style={{ zIndex: 1000 }}
      >
        <div className="max-w-9xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* Logo */}
              <div>
                <Link
                  to="/fast-track-pro-bootcamps"
                  className="flex items-center py-5 px-2 animate-pulse"
                >
                  <button className="bg-[#FFBA4A] text-black px-1 text-sm py-1 md:px-3 md:text-xs">
                    Fast Track Pro Bootcamps in 2024
                  </button>
                </Link>
              </div>

              {/* Primary nav */}
              <div className="hidden lg:flex items-center space-x-1 lg:text-xs xl:text-sm relative xl:left-52">
                <Link
                  to="https://eraflip.com/"
                  target="_blank"
                  className="py-5 px-1 hover:underline"
                >
                  Amazon Services
                </Link>
                <Link
                  to="https://www.pnygenius.com/"
                  target="_blank"
                  className="py-5 px-1 hover:underline"
                >
                  Kids Courses
                </Link>
                <Link
                  to="https://www.joinpnypink.com/"
                  target="_blank"
                  className="py-5 px-1 hover:underline"
                >
                  Female Courses
                </Link>
                <Link to="/flyers" className="py-5 px-1 hover:underline">
                  E-Flyers
                </Link>
                <Link
                  to="/training-schedule"
                  className="py-5 px-1 hover:underline"
                >
                  Training Schedule
                </Link>
                <Link
                  to="/pny-training-fee-structure"
                  className="py-5 px-1 hover:underline"
                >
                  Fee Structure
                </Link>
                {/* Add more items here */}
              </div>
            </div>

            {/* Secondary nav */}
            <div className="hidden lg:flex items-center space-x-3">
              <MenuIntroduction />
              <Link
                to="https://lms.pnytraining.com/"
                target="_blank"
                className="py-2 px-3 bg-[#F10900] text-white rounded hover:bg-red-800 transition duration-300"
              >
                Enroll Now
              </Link>
            </div>

            {/* Mobile button */}
            <div className="lg:hidden flex items-center">
              <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={
            isMobileMenuOpen ? "mobile-menu block" : "mobile-menu hidden"
          }
        >
          <Link
            to="https://eraflip.com/"
            target="_blank"
            className="block py-2 px-4 text-sm hover:bg-gray-700"
          >
            Amazon Services
          </Link>
          <Link
            to="https://www.pnygenius.com/"
            target="_blank"
            className="block py-2 px-4 text-sm hover:bg-gray-700"
          >
            Kids Courses
          </Link>
          <Link
            to="https://www.joinpnypink.com/"
            target="_blank"
            className="block py-2 px-4 text-sm hover:bg-gray-700"
          >
            Female Courses
          </Link>
          <Link
            to="/flyers"
            className="block py-2 px-4 text-sm hover:bg-gray-700"
          >
            E-Flyers
          </Link>
          <Link
            to="/training-schedule"
            className="block py-2 px-4 text-sm hover:bg-gray-700"
          >
            Training Schedule
          </Link>
          <Link
            to="/pny-training-fee-structure"
            className="block py-2 px-4 text-sm hover:bg-gray-700"
          >
            Fee Structure
          </Link>
          <Link
            to="https://www.admin786.pnytrainings.com/login/"
            target="_blank"
            className="block py-2 px-4 text-sm hover:bg-gray-700"
          >
            Dashboard
          </Link>
          <Link
            to="https://exam.pnytrainings.com/home/"
            target="_blank"
            className="block py-2 px-4 text-sm hover:bg-gray-700"
          >
            Exam Portal
          </Link>

          {/* Add more items here */}
        </div>
      </nav>

      <nav className="flex flex-col border-t neon-light-top border-white border-opacity-30 p-1 gap-1 md:flex-row md:gap-10 justify-center items-center bg-gray-700 text-white rgb-light-animation">
        <span className="flex gap-3 opacity-85">
          <FaPhoneAlt className="mt-1" />
          UAN -03041111774
        </span>
        <span className="flex gap-3 opacity-85">
          <MdEmail className="mt-1" />
          info@pnytrainings.com
        </span>
      </nav>

      <Headerdown />
    </>
  );
};

export default Header;
//  sticky top-[67px]' style={{ zIndex: 10 }}>
