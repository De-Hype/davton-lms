import { IoIosColorPalette, IoIosNotificationsOutline } from "react-icons/io";
import { CiUnlock } from "react-icons/ci";
import { SlUser } from "react-icons/sl";
import { MdOutlineWorkOutline } from "react-icons/md";

const Settings = () => {
  return (
    <div className=" pl-6 h-full bg-green-50">
      <h3 className="pt-8 pb-4 uppercase text-green-600">Settings</h3>
      <div className="shadow-2xl border-r bg-white mr-5 rounded-md">
        <h3 className=" py-4 font-bold text-xl border-b pl-6 text-slate-700">
          Account Settings
        </h3>
        <div className="grid grid-cols-3 px-6 gap-6 py-7">
        <div className="flex items-center px-3 py-3 bg-slate-100 border rounded-md">
            <SlUser className="text-green-600 h-20 w-20 pr-2" />
            <div className="">
              <h4 className="font-medium">Company's Profile</h4>
              <p className="text-sm pt-1">
                Fermentum, et amet lectus non ultrices fringila justo volutpat
              </p>
            </div>
          </div>
          <div className="flex items-center px-3 py-3 bg-slate-100 border rounded-md">
            <CiUnlock className="text-green-600 h-20 w-20 pr-2" />
            <div className="">
              <h4 className="font-medium">Manage Password</h4>
              <p className="text-sm pt-1">
                Fermentum, et amet lectus non ultrices fringila justo volutpat
              </p>
            </div>
          </div>
          <div className="flex items-center px-3 py-3 bg-slate-100 border rounded-md">
            <IoIosColorPalette className="text-green-600 h-20 w-20 pr-2" />
            <div className="">
              <h4 className="font-medium">Customize Dashboard</h4>
              <p className="text-sm pt-1">
                Fermentum, et amet lectus non ultrices fringila justo volutpat
              </p>
            </div>
          </div>
          <div className="flex items-center px-3 py-3 bg-slate-100 border rounded-md">
            <IoIosNotificationsOutline className="text-green-600 h-20 w-20 pr-2" />
            <div className="">
              <h4 className="font-medium">Notifications</h4>
              <p className="text-sm pt-1">
                Fermentum, et amet lectus non ultrices fringila justo volutpat
              </p>
            </div>
          </div>
          <div className="flex items-center px-3 py-3 bg-slate-100 border rounded-md">
            <MdOutlineWorkOutline className="text-green-600 h-20 w-20 pr-2" />
            <div className="">
              <h4 className="font-medium">Work Flow</h4>
              <p className="text-sm pt-1">
                Fermentum, et amet lectus non ultrices fringila justo volutpat
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
