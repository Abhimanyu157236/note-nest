import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import plus from "../assets/plus (1).png";

const Navbar = () => {
  return (
    <div className="border-b-2 border-gray-400 min-w-[600px] flex justify-between pt-6">
      <div className="min-w-72 flex justify-evenly">
        <NavLink to="/create" className="font-serif font-bold text-2xl mx-7 ">
          <img src={plus} alt="" className="w-8 mb-7" />
        </NavLink>

        <NavLink
          to="/"
          className="font-serif font-bold text-2xl mx-7 text-pink-900"
        >
          Home
        </NavLink>
      </div>
    </div>
  );
};

export { Navbar };
