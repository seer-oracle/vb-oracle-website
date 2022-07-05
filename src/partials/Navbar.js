import React from "react";
import { NavLink } from "react-router-dom";
import { iconsNav } from "../assets";

const Navbar = () => {
  return (
    <div className="nav__bar w-full flex flex-row fixed justify-center z-[2]">
      <div className="container w-full flex flex-row justify-between items-center py-4">
        <NavLink to={"/home"}>
          <img src={iconsNav.logoVB} alt="logoVB" />
        </NavLink>
        <button>
          <p className="text-white font-inter text-sm font-semibold">Oracles</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
