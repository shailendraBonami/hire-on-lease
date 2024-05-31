import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/assets/logo.png";
import Link from "next/link";

const navMenu = [
  { label: "Home", link: "#" },
  { label: "About Us", link: "#" },
  { label: "Services", link: "#" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Image src={Logo} alt="logo"  width={120} height={40} className="h-auto w-auto mr-[40px]" />
            <div className="hidden md:flex space-x-20">
              {navMenu.map((navItem, index) => (
                <Link key={index} href={navItem.link}>
                  <span className="font-semibold text-lg text-gray-800 hover:text-orange-500">
                    {navItem.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#contact">
              <span className="px-6 py-2 border border-gray-800 rounded-2xl text-gray-800 hover:text-white hover:bg-[#ED4542] hover:border-[#110054] hover:font-semibold">
                Contact Us
              </span>
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-orange-500 hover:text-orange-500 focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navMenu.map((navItem, index) => (
              <Link key={index} href={navItem.link}>
                <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-white hover:bg-gray-800">
                  {navItem.label}
                </span>
              </Link>
            ))}
            <Link href="#contact">
              <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-white hover:bg-gray-800">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
