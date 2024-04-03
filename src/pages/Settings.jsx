import { IoIosNotificationsOutline } from "react-icons/io";

const Settings = () => {
  return (
    <div
      className=" pl-6 bg-green-50"
    >
      <h3 className="pt-5 uppercase text-green-600">Settings</h3>
      <div className="shadow-2xl border-r bg-white mr-5 rounded-md">
        <h3 className=" py-4 font-bold text-xl border-b pl-6 text-slate-700">
          Account Settings
        </h3>
        <div className="grid grid-cols-3 px-6 gap-6 py-7">
          <div className="flex items-center px-3 py-2 bg-slate-100">
            <IoIosNotificationsOutline className="text-green-600 h-11 w-11" />
            <div className="">
              <h4 className="">Company's Profile</h4>
              <p className="">
                Fermentum, et amet lectus non ultrices fringila justo volutpat
              </p>
            </div>
          </div>
          <div className="flex items-center bg-slate-100">
            <IoIosNotificationsOutline className="text-green-600 h-11 w-11" />
            <div className="">
              <h4 className="">Company's Profile</h4>
              <p className="">
                Fermentum, et amet lectus non ultrices fringila justo volutpat
              </p>
            </div>
          </div>
          <div className="flex items-center bg-slate-100">
            <IoIosNotificationsOutline className="text-green-600 h-11 w-11" />
            <div className="">
              <h4 className="">Company's Profile</h4>
              <p className="">
                Fermentum, et amet lectus non ultrices fringila justo volutpat
              </p>
            </div>
          </div>
          <div className="flex items-center bg-slate-100">
            <IoIosNotificationsOutline className="text-green-600 h-11 w-11" />
            <div className="">
              <h4 className="">Company's Profile</h4>
              <p className="">
                Fermentum, et amet lectus non ultrices fringila justo volutpat
              </p>
            </div>
          </div>
          <div className="flex items-center bg-slate-100">
            <IoIosNotificationsOutline className="text-green-600 h-11 w-11" />
            <div className="">
              <h4 className="">Company's Profile</h4>
              <p className="">
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
