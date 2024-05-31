import Link from "next/link";
import React from "react";

const navMenu = [
  { label: "Home", link: "#" },
  { label: "Home", link: "#" },
  { label: "Home", link: "#" },
];

const NavBar = () => {
  return (
    <nav className="">
      <div>
        {navMenu.map((item) => {
          return <Link href="#">{item.label}</Link>;
        })}
      </div>
      <div>Contact Us</div>
    </nav>
  );
};

export default NavBar;
