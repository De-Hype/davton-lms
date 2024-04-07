import {
  MdDashboard,
  MdLibraryBooks,
  MdOutlineSettingsInputAntenna,
  MdQuiz,
} from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FcComboChart, FcDepartment } from "react-icons/fc";
import { IoIosSettings } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";
const AdminSidebar = () => {
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonActive = (button) => {
    setActiveButton(button);
  };
  return (
    <div className="h-screen shadow-2xl border-r w-[250px] pt-5 ">
      <div className="flex flex-col items-start px-9">
        <h3 className="font-bold">Hi Adeyemi Inc</h3>
        <p className="font-light text-slate-600">Hr247@asanta.com</p>
      </div>
      <div className="mt-3">
        <div className="">
          <Link
            to="/dashboard"
            onClick={() => handleButtonActive("dashboard")}
            className={`hover:border-l-8 hover:border-green-800 hover:bg-slate-100 transition-all ${
              activeButton == "dashboard" &&
              "border-l-8 border-green-800 bg-slate-100"
            } py-2 w-full flex items-center justify-center`}
          >
            <span className=" w-[70%] pl-3  flex items-center gap-3">
              <span>
                <MdDashboard className="" />
              </span>
              <p className="font-medium">Dashboard</p>
            </span>
          </Link>
        </div>
        <div className="">
          <p className="px-9 font-light text-slate-600">Staff Management</p>
          <div className="flex flex-col">
            <Link
              to="/staff"
              onClick={() => handleButtonActive("staff")}
              className={`hover:border-l-8 hover:border-green-800 hover:bg-slate-100 transition-all ${
                activeButton == "staff" &&
                "border-l-8 border-green-800 bg-slate-100"
              } py-2 w-full flex items-center justify-center`}
            >
              <span className=" w-[70%] pl-3 flex items-center gap-3">
                <span>
                  <HiMiniUserGroup />
                </span>
                <p className="font-medium">Staff</p>
              </span>
            </Link>
            <Link
              to="/department"
              onClick={() => handleButtonActive("department")}
              className={`hover:border-l-8 hover:border-green-800 hover:bg-slate-100 transition-all ${
                activeButton == "department" &&
                "border-l-8 border-green-800 bg-slate-100"
              } py-2 w-full flex items-center justify-center`}
            >
              <span className=" w-[70%] pl-3 flex items-center gap-3">
                <span>
                  <FcDepartment className="text-black" />{" "}
                </span>
                <p className="font-medium">Department</p>
              </span>
            </Link>
            <Link
              to="/courses"
              onClick={() => handleButtonActive("courses")}
              className={`hover:border-l-8 hover:border-green-800 hover:bg-slate-100 transition-all ${
                activeButton == "courses" &&
                "border-l-8 border-green-800 bg-slate-100"
              } py-2 w-full flex items-center justify-center`}
            >
              <span className=" w-[70%] pl-3 flex items-center gap-3">
                <span>
                  <MdLibraryBooks />
                </span>
                <p className="font-medium">Courses</p>
              </span>
            </Link>
            <Link
              to="/reports"
              onClick={() => handleButtonActive("reports")}
              className={`hover:border-l-8 hover:border-green-800 hover:bg-slate-100 transition-all ${
                activeButton == "reports" &&
                "border-l-8 border-green-800 bg-slate-100"
              } py-2 w-full flex items-center justify-center`}
            >
              <span className=" w-[70%] pl-3 flex items-center gap-3">
                <span>
                  <FcComboChart className="text-black" />
                </span>
                <p className="font-medium">Reports</p>
              </span>
            </Link>
            <Link
              to="/quizzes"
              onClick={() => handleButtonActive("quizzes")}
              className={`hover:border-l-8 hover:border-green-800 hover:bg-slate-100 transition-all ${
                activeButton == "quizzes" &&
                "border-l-8 border-green-800 bg-slate-100"
              } py-2 w-full flex items-center justify-center`}
            >
              <span className=" w-[70%] pl-3 flex items-center gap-3">
                <span>
                  <MdQuiz className="" />{" "}
                </span>
                <p className="font-medium">Quizzes</p>
              </span>
            </Link>
          </div>
        </div>
        <div className="">
          <p className="px-9 font-light text-slate-600">Communications</p>
          <div className="">
            <Link
              to="message"
              onClick={() => handleButtonActive("message")}
              className={`hover:border-l-8 hover:border-green-800 hover:bg-slate-100 transition-all ${
                activeButton == "message" &&
                "border-l-8 border-green-800 bg-slate-100"
              } py-2 w-full flex items-center justify-center`}
            >
              <span className=" w-[70%] pl-3 flex items-center gap-3">
                <span>
                  <MdOutlineSettingsInputAntenna />{" "}
                </span>
                <p className="font-medium">Message</p>
              </span>
            </Link>
          </div>
        </div>
        <div className="">
          <p className="px-9 font-light text-slate-600">Account Management</p>
          <div className="flex flex-col">
            <Link
              to="/admins"
              onClick={() => handleButtonActive("admins")}
              className={`hover:border-l-8 hover:border-green-800 hover:bg-slate-100 transition-all ${
                activeButton == "admins" &&
                "border-l-8 border-green-800 bg-slate-100"
              } py-2 w-full flex items-center justify-center`}
            >
              <span className=" w-[70%] pl-3 flex items-center gap-3">
                <span>
                  <RiAdminFill />{" "}
                </span>
                <p className="font-medium">Admins</p>
              </span>
            </Link>
            <Link
              to="/settings"
              onClick={() => handleButtonActive("settings")}
              className={`hover:border-l-8 hover:border-green-800 hover:bg-slate-100 transition-all ${
                activeButton == "settings" &&
                "border-l-8 border-green-800 bg-slate-100"
              } py-2 w-full flex items-center justify-center`}
            >
              <span className=" w-[70%] pl-3 flex items-center gap-3">
                <span>
                  <IoIosSettings />
                </span>
                <p className="font-medium">Settings</p>
              </span>
            </Link>
            <button
              type="button"
              onClick={() => handleButtonActive("logout")}
              className={`hover:border-l-8 hover:border-green-800 hover:bg-slate-100 transition-all ${
                activeButton == "logout" &&
                "border-l-8 border-green-800 bg-slate-100"
              } py-2 w-full flex items-center justify-center`}
            >
              <span className=" w-[70%] pl-3 flex items-center gap-3">
                <span>
                  <FaPowerOff />{" "}
                </span>
                <p className="font-medium">Log Out</p>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
