import { FaBell } from "react-icons/fa";
import logoTwo from "../assets/logoTwo.svg";
const HeaderTwo = () => {
  return (
    <div className="flex justify-between px-4 py-4 items-center gap-3">
      <div className="flex items-center">
        <img src={logoTwo} alt="" />
        <h3 className="font-medium">
          DAVTON<span className="font-light">learn</span>
        </h3>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative">
          <FaBell className="text-2xl" />
          <span className="h-2 w-2 top-0 right-0 rounded-full bg-red-600 absolute"></span>
        </div>
        <div className="flex items-center text-sm">
          <h3 className="py-1 px-1 text-white rounded-md bg-red-500">TO</h3>
          <p className="font-light">Hr247@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderTwo;
