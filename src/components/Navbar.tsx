import React from "react";
import LogoIcon from "../assets/blue-whale.svg";
import SearchIcon from "../assets/search.svg";
import UserIcon from "../assets/user-profile.svg";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-gray-100 px-8 py-4 shadow-sm rounded-lg">
      <div className="flex items-center space-x-4">
        <div className="bg-blue-600 rounded-full w-10 h-10 flex justify-center items-center text-white">
          <img src={LogoIcon} alt="Logo Icon" />
        </div>
        <div>
          <h1 className="text-lg font-semibold">Welcome, Kristin</h1>
          <p className="text-sm text-gray-500">
            Your personal dashboard overview
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative flex items-center bg-gray-200 rounded-lg w-64">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-300 outline-none text-sm flex-1 rounded-lg px-10 py-2" // Increased padding for height
          />
          <img
            src={SearchIcon}
            alt="Search Icon"
            className="absolute left-3 w-4 h-4"
          />{" "}
        </div>

        <img src={UserIcon} alt="User profile Icon" />
        <div className="bg-white p-2 rounded-full shadow-md cursor-pointer"></div>
      </div>
    </div>
  );
};

export default Navbar;
