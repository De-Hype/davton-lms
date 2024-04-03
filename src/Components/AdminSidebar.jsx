import {MdDashboard, MdLibraryBooks, MdOutlineSettingsInputAntenna, MdQuiz} from "react-icons/md";
import {HiMiniUserGroup} from "react-icons/hi2";
import {FcComboChart, FcDepartment} from "react-icons/fc";
import {IoIosSettings} from "react-icons/io";
import {FaPowerOff} from "react-icons/fa";
import {RiAdminFill} from "react-icons/ri";
const AdminSidebar = () => {
  return (
    <div className="h-screen shadow-2xl border-r w-[250px] pt-5 ">
        <div className="flex flex-col items-start px-9">
            <h3 className="font-bold">Hi Adeyemi Inc</h3>
            <p className="font-light text-slate-600">Hr247@asanta.com</p>
        </div>
        <div className="mt-3">
            <div className="">
                <button type="button" className="hover:border-l-8 hover:border-green-800 hover:bg-slate-100 transition-all py-2 w-full flex items-center justify-center">  
                <span className=" w-[70%] pl-3 flex items-center gap-3">
                    <span><MdDashboard className="" /></span>
                    <p className="">Dashboard</p>
                </span>
            </button>
            </div>
            <div className="">
                <p className="px-9 font-light text-slate-600">Staff Management</p>
                <div className="flex flex-col">
                    <button type="button" className="hover:border-l-8 hover:border-green-800 hover:bg-slate-100 transition-all py-2 w-full flex items-center justify-center">  
                        <span className=" w-[70%] pl-3 flex items-center gap-3">
                            <span><HiMiniUserGroup /></span>
                            <p className="">Staff</p>
                        </span>
                    </button>
                    <button type="button" className="hover:border-l-8 hover:border-green-800 hover:bg-slate-100 transition-all py-2 w-full flex items-center justify-center">  
                        <span className=" w-[70%] pl-3 flex items-center gap-3">
                            <span><FcDepartment  className="text-black" /> </span>
                            <p className="">Department</p>
                        </span>
                    </button>
                    <button type="button" className="hover:border-l-8 hover:border-green-800 hover:bg-slate-100 transition-all py-2 w-full flex items-center justify-center">  
                        <span className=" w-[70%] pl-3 flex items-center gap-3">
                            <span><MdLibraryBooks /></span>
                            <p className="">Courses</p>
                        </span>
                    </button>
                    <button type="button" className="hover:border-l-8 hover:border-green-800 hover:bg-slate-100 transition-all py-2 w-full flex items-center justify-center">  
                        <span className=" w-[70%] pl-3 flex items-center gap-3">
                            <span><FcComboChart className="text-black" /></span>
                            <p className="">Reports</p>
                        </span>
                    </button>
                    <button type="button" className="hover:border-l-8 hover:border-green-800 hover:bg-slate-100 transition-all py-2 w-full flex items-center justify-center">  
                        <span className=" w-[70%] pl-3 flex items-center gap-3">
                            <span><MdQuiz className="" /> </span>
                            <p className="">Quizzes</p>
                        </span>
                    </button>
                  
                </div>
            </div>
            <div className="">
            <p className="px-9 font-light text-slate-600">Communications</p>
                <div className="">
                <button type="button" className="hover:border-l-8 hover:border-green-800 hover:bg-slate-100 transition-all py-2 w-full flex items-center justify-center">  
                        <span className=" w-[70%] pl-3 flex items-center gap-3">
                            <span><MdOutlineSettingsInputAntenna /> </span>
                            <p className="">Message</p>
                        </span>
                    </button>
                </div>
            </div>
            <div className="">
            <p className="px-9 font-light text-slate-600">Account Management</p>
                <div className="flex flex-col">
                <button type="button" className="hover:border-l-8 hover:border-green-800 hover:bg-slate-100 transition-all py-2 w-full flex items-center justify-center">  
                        <span className=" w-[70%] pl-3 flex items-center gap-3">
                            <span><RiAdminFill /> </span>
                            <p className="">Admins</p>
                        </span>
                    </button>
                    <button type="button" className="hover:border-l-8 hover:border-green-800 hover:bg-slate-100 transition-all py-2 w-full flex items-center justify-center">  
                        <span className=" w-[70%] pl-3 flex items-center gap-3">
                            <span><IoIosSettings /></span>
                            <p className="">Settings</p>
                        </span>
                    </button>
                    <button type="button" className="hover:border-l-8 hover:border-green-800 hover:bg-slate-100 transition-all py-2 w-full flex items-center justify-center">  
                        <span className=" w-[70%] pl-3 flex items-center gap-3">
                            <span><FaPowerOff /> </span>
                            <p className="">Log Out</p>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminSidebar