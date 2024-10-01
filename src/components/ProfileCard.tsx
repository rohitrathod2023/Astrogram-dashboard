import {
  FaUserFriends,
  FaCheckCircle,
  FaTrophy,
  FaSync,
  FaStar,
} from "react-icons/fa";

import ProfileImage from "../assets/profilePhoto.jpg";
const ProfileCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center space-y-4 relative w-full">
      <div className="absolute top-4 right-4">
        <FaSync className="text-gray-400 text-lg cursor-pointer" />
      </div>

      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-pink-400 to-red-300 p-1">
          <img
            src={ProfileImage}
            alt="Profile"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-1 right-1 bg-white rounded-full p-1">
          <div className="bg-black rounded-full p-1 text-white">
            <FaStar className="text-xs" />
          </div>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-lg font-bold">Kristin Watson</h3>
        <p className="text-sm text-gray-400">Design Manager</p>
      </div>

      <div className="flex justify-between space-x-4">
        <div className="flex justify-between items-center gap-2">
          <FaUserFriends className="text-red-400 text-xl" />
          <span className="text-sm font-semibold">11</span>
        </div>
        <div className="flex justify-betweenitems-center gap-2">
          <FaCheckCircle className="text-orange-400 text-xl" />
          <span className="text-sm font-semibold">56</span>
        </div>
        <div className="flex justify-between items-center gap-2">
          <FaTrophy className="text-yellow-500 text-xl" />
          <span className="text-sm font-semibold">12</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
