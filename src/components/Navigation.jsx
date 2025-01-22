import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
<nav className="bg-gray-800 text-white text-4xl py-5 fixed top-0 w-full z-10 shadow-md">
  <div className="px-10 flex items-center">

    <h1 className="text-3xl font-bold">
      <NavLink to="/" className="hover:text-blue-400 text-3xl">
        My Portfolio
      </NavLink>
    </h1>

    <ul className="flex list-none space-x-10 ml-auto pr-10">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 border-b-2 border-blue-400 pb-1"
              : "hover:text-blue-400 pb-1"
          }
        >
          About Me
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 border-b-2 border-blue-400 pb-1"
              : "hover:text-blue-400 pb-1"
          }
        >
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 border-b-2 border-blue-400 pb-1"
              : "hover:text-blue-400 pb-1"
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 border-b-2 border-blue-400 pb-1"
              : "hover:text-blue-400 pb-1"
          }
        >
          Resume
        </NavLink>
      </li>
    </ul>
  </div>
</nav>


  );
};

export default Navigation;
