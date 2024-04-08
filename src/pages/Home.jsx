import HeaderTwo from "../Components/HeaderTwo";
import logoTwo from "../assets/logoTwo.svg";
import homeCoursesImg from "../assets/homeCoursesImg.svg";
import homeComVid from "../assets/homeComVid.svg";
import { FaCircleInfo } from "react-icons/fa6";
const Home = () => {
  return (
    <div className="">
      <HeaderTwo />
      <div className="bg-black">
        <div className="relative flex items-center h-[90vh] hero-image">
          <div className="pl-6 w-[450px] text-white flex flex-col gap-3">
            <img className="h-8 w-8" src={logoTwo} alt="" />
            <h4 className="font-semibold">PROJECT MANAGEMENT</h4>
            <h2 className="text-3xl font-black">THE ESSENTIAL</h2>
            <p className="text-sm font-light">
              Understand your audience, envision a creative solution, and test
              your prototype by Cooper Professional Education | By Cooper
              Professional Education
            </p>
            <div className="flex items-center gap-2">
              <button
                className="bg-white py-1 px-3 rounded-sm text-sm text-red-500"
                type="button"
              >
                Watch Now
              </button>
              <button
                className="bg-transparent flex items-center gap-2 border py-1 px-3 rounded-sm text-sm"
                type="button"
              >
                <FaCircleInfo /> <span>More Info</span>
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="py-2">
            <h3 className="px-6 text-white font-bold py-1">
              Courses In Progress
            </h3>
            <div className="flex overflow-x-auto items-center gap-1 px-6">
              <img src={homeCoursesImg} alt="" />
              <img src={homeCoursesImg} alt="" />
              <img src={homeCoursesImg} alt="" />
              <img src={homeCoursesImg} alt="" />
              <img src={homeCoursesImg} alt="" />
              {/* <img src={homeCoursesImg} alt="" /> */}
            </div>
          </div>
          <div className="py-2">
            <h3 className="px-6 text-white font-bold py-1">Company Videos</h3>
            <div className="flex overflow-x-auto items-center gap-1 px-6">
              <img src={homeComVid} alt="" />
              <img src={homeComVid} alt="" />
              <img src={homeComVid} alt="" />
              <img src={homeComVid} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
