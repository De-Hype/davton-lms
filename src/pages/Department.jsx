import { IoIosArrowRoundBack } from "react-icons/io";
import { AiOutlineBook } from "react-icons/ai";
import Header from "../Components/Header";
import AdminSidebar from "../Components/AdminSidebar";

const Department = () => {
  return (
    <div className="">
      <Header />
      <div className="flex">
        <AdminSidebar />
        <div
          style={{ width: "calc(100% - 250px)" }}
          className="overflow-y-auto min-h-full"
        >
          <div className=" pl-6 h-full bg-green-50">
            <div className="pt-8 pb-4 uppercase flex items-center gap-4 ">
              <div className="border px-3 py-3 rounded-full hover:bg-black cursor-pointer hover:text-white transition-all ">
                <IoIosArrowRoundBack className="text-xl " />
              </div>
              <h3 className="">Back</h3>
            </div>
            <div className="shadow-2xl border-r bg-white mr-5 rounded-md">
              <h3 className=" py-4 font-bold text-xl border-b pl-6 text-slate-700">
                Work Flow
              </h3>
              <div className="grid grid-cols-3 px-6 gap-6 py-7">
                <div className="border flex flex-col shadow rounded-md items-center gap-2 hover:bg-slate-50 transition-all cursor-pointer py-4">
                  <AiOutlineBook className="h-16 w-16" />
                  <h3 className="font-semibold">Course Assignment</h3>
                  <button
                    type="button"
                    className="font-semibold border-2 py-1 px-3 text-green-700 border-green-700"
                  >
                    View Course Assignment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
