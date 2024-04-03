import {MdDashboard} from "react-icons/md";
import {HiMiniUserGroup} from "react-icons/hi2";
import {FcComboChart} from "react-icons/fc";
import {IoIosSettings} from "react-icons/io";
const AdminSidebar = () => {
  return (
    <div className="h-screen shadow-2xl w-[250px] pt-5 ">
        <div className="flex flex-col items-start px-9">
            <h3 className="font-bold">Hi Adeyemi Inc</h3>
            <p className="font-light text-slate-600">Hr247@asanta.com</p>
        </div>
        <div className="">
            <div className="">
                <button type="button" className=" bg-red-500 w-full"> <MdDashboard />  Dashboard</button>
            </div>
            <div className="">
                <p className="px-9">Staff Management</p>
                <div className="flex flex-col">
                    <button type="button" className="bg-red-500 w-full flex items-center justify-center">  
                        <span className="bg-blue-500 w-[70%] flex">
                            <span><HiMiniUserGroup /></span>
                            <p className="">Staff</p>
                        </span>
                    </button>
                    <button type="button" className="bg-red-500 w-full flex items-center justify-center">  
                        <span className="bg-blue-500 w-[70%] flex">
                            <span>Icon</span>
                            <p className="">Department</p>
                        </span>
                    </button>
                    <button type="button" className="bg-red-500 w-full flex items-center justify-center">  
                        <span className="bg-blue-500 w-[70%] flex">
                            <span>Icon</span>
                            <p className="">Courses</p>
                        </span>
                    </button>
                    <button type="button" className="bg-red-500 w-full flex items-center justify-center">  
                        <span className="bg-blue-500 w-[70%] flex">
                            <span><FcComboChart /></span>
                            <p className="">Reports</p>
                        </span>
                    </button>
                    <button type="button" className="bg-red-500 w-full flex items-center justify-center">  
                        <span className="bg-blue-500 w-[70%] flex">
                            <span>Icon</span>
                            <p className="">Quizzes</p>
                        </span>
                    </button>
                  
                </div>
            </div>
            <div className="">
            <p className="">Communications</p>
                <div className="">
                    <button type="button">  Messages</button>
                </div>
            </div>
            <div className="">
            <p className="">Account Management</p>
                <div className="flex flex-col">
                <button type="button" className="bg-red-500 w-full flex items-center justify-center">  
                        <span className="bg-blue-500 w-[70%] flex">
                            <span>Icon</span>
                            <p className="">Admins</p>
                        </span>
                    </button>
                    <button type="button" className="bg-red-500 w-full flex items-center justify-center">  
                        <span className="bg-blue-500 w-[70%] flex">
                            <span><IoIosSettings /></span>
                            <p className="">Settings</p>
                        </span>
                    </button>
                    <button type="button" className="bg-red-500 w-full flex items-center justify-center">  
                        <span className="bg-blue-500 w-[70%] flex">
                            <span>Icon</span>
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