import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 text-white text-4xl py-20 fixed top-0 left-0 w-full z-10 shadow-md">
      <div className="max-w-screen-xl flex justify-between ">
        {/* Left Logo */}
        <h1 className="text-4xl font-bold ml-10">
          <NavLink to="/" className="hover:text-blue-400 text-4xl">
            My Portfolio
          </NavLink>
        </h1>

        {/* Right Aligned Navigation Links */}
        <ul className="flex space-x-6 list-none">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                  : "hover:text-blue-400  pb-1"
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
                  : "hover:text-blue-400  pb-1"
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
                  : "hover:text-blue-400  pb-1"
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
                  : "hover:text-blue-400  pb-1"
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
