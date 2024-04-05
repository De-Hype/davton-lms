import { useState } from "react";
import { AiOutlineClose, AiOutlineCloudUpload } from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";
import { AiOutlineBook } from "react-icons/ai";

const Courses = () => {
  const [modalShow, setModalShow] = useState(true);
  const closeModal = () => {
    setModalShow(!modalShow);
  };
  return (
    <div className="relative">
      <div
        className={`min-h-screen pl-6 relative bg-green-50  ${
          modalShow && "brightness-50"
        }`}
      >
        <div className={`pt-8 pb-4 uppercase flex items-center gap-4 `}>
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
      {modalShow && (
        <div className="h-screen absolute top-0 left-0 right-0  flex items-center justify-center">
          <div className=" shadow-md z-50 bg-white rounded-md w-[50%] px-4 py-5">
            <div className="relative gap-3 flex flex-col items-center">
              <AiOutlineClose
                onClick={closeModal}
                className="absolute cursor-pointer  right-0 text-xl font-black"
              />
              <h3 className="font-medium">Upload assignment Instruction</h3>
              <div className="flex flex-col items-center">
                <AiOutlineCloudUpload className="h-14 w-14" />
                <h3 className="text-sm">
                  Select the file you wish to upload
                  <span className="text-green-600"> PDF, DOC & PPA</span>
                </h3>
              </div>

              <div className="w-full flex items-center gap-4">
                <input
                  className="w-full px-1 outline-none border-2 border-black rounded-md"
                  type="text"
                  name=""
                  placeholder="Choose file"
                  contentEditable={false}
                  id=""
                />{" "}
                <input
                  className="bg-green-600 text-white px-4 py-1 rounded-md cursor-pointer text-sm"
                  type="button"
                  value="Upload"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
