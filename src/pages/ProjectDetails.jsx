import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import detailsImg from "../assets/detailsImg.svg";
const ProjectDetails = () => {
  return (
    <div className="">
      <div className="details-img h-[50vh]"></div>
      <div className="px-6 mt-3">
        <div className="flex items-center justify-between">
          <div className="">
            <h3 className="uppercase font-bold">Project Management</h3>
            <div className="flex items-center gap-5">
              <div className="flex gap-2 items-center">
                <AiOutlineClockCircle className="" />
                <p className="">
                  Days left <span className="">30 days</span>
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <AiOutlineCalendar className="" />
                <p className="">
                  Date assigned <span className="">22nd May, 2022</span>
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="uppercase font-bold">Progress Level</h3>
            <div className="flex items-center">
              <p className="">
                <span className="">20%</span> achievement
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className=" font-bold">Description</h3>
          <div className="">
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              diam, imperdiet est suscipit arcu, volutpat. Neque congue congue
              egestas felis senectus purus ultrices id posuere. Nunc diam tortor
              est gravida. Est diam sit mus pharetra tortor elit tellus
              consequat, purus. Turpis pretium lorem mauris id vivamus netus
              commodo bibendum libero. In nec suscipit varius condimentum urna,
              vestibulum odio. Dapibus aliquam augue eget consequat. Convallis
              quis in mattis nisl fames. Porttitor cras semper at lectus nec
              vel, at vulputate dolor. Malesuada nulla penatibus volutpat, nisi,
              tristique amet pretium consectetur. A amet, pharetra dui dolor
              quam non vel. Elit fames quis varius viverra. Vulputate pulvinar
              velit, sem placerat. Dui nam nibh at sem id in odio nulla commodo.
              Tortor, interdum nunc massa a aenean eget in. Massa neque quam
              nibh facilisi aliquet. Tincidunt integer euismod purus a. Nisi, et
              tempor, tellus quis nec. Facilisi neque eu, fusce egestas nec
              malesuada at. Vel purus ultricies penatibus ipsum diam hac nunc.
              Facilisis quisque arcu blandit feugiat turpis sed lacus etiam
              gravida. Habitasse eget integer morbi aenean elit sit in
              facilisis.
            </p>
            <p className="">
              Pellentesque vulputate amet, cursus porta a risus enim. Habitasse
              enim, et odio in. Massa adipiscing enim, hac aliquam nisi mattis.
              Purus augue congue nunc elementum dictum vitae tortor praesent et.
              Convallis nibh curabitur in est tempor mi dui morbi nec. Laoreet
              amet diam egestas ac nam ut. Proin aenean et ut nulla nibh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
