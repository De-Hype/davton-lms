import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";

const ProjectDetails = () => {
  return (
    <div className="">
      {/* <img src="" className="" alt="" /> */}
      <div className="">
        <div className="">
          <div className="">
            <h3 className="uppercase">Project Management</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                <AiOutlineClockCircle className="" />
                <p className="">
                  Days left <span className="">30 days</span>
                </p>
              </div>
              <div className="flex items-center">
                <AiOutlineCalendar className="" />
                <p className="">
                  Date assigned <span className="">22nd May, 2022</span>
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="uppercase">Progress Level</h3>
            <div className="flex items-center">
              <p className=""><span className="">20%</span> achievement</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
