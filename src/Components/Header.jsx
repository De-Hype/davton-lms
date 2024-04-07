import logoOne from "../assets/logoOne.svg";
import { RiMenu3Line } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
const Header = () => {
  return (
    <div className="bg-green-700 py-2">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-3">
          <img src={logoOne} className="" alt="" />
          <RiMenu3Line className="text-white font-bold text-lg" />
        </div>
        <div className="flex items-center gap-5">
          <IoMail className="text-white text-lg" />
          <FaBell className="text-white text-lg" />
          <div className="flex items-center gap-1">
            <h3 className="py-1 px-2 text-sm rounded-full bg-white text-green-700">
              M
            </h3>
            <p className="text-sm text-white">Hr247@asanta.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
