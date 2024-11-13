import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Progress from "react-circle-progress-bar";
import { BiSolidInstitution } from "react-icons/bi";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

const SingleRecommandation = ({ job }) => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="" data-aos="fade-left">
      <div className="card hover:transition hover:ease hover:scale-95 hover:duration-1000  group hover:bg-[#353447] shadow-xl rounded-none p-3 border-gray-200 border">
        <div className="flex justify-around items-center">
          <h2 className=" text-3xl font-semibold group-hover:text-white text-gray-600">
            {job.jobtitle}
          </h2>
          <Progress
            style={{ width: 100, fontSize: 26, hover: "text-white" }}
            transitionTimingFunction="ease"
            gradient={[
              { stop: 0.0, color: "#f83600" },
              { stop: 1, color: "#f9d423" },
            ]}
            suffix
            subtitle={"matched"}
            transitionDuration=".5s"
            strokeWidth={8} // Adjust stroke width to match smaller size
            ballStrokeWidth={20} // Adjust as needed
            progress={job.totalMatchPercentage}
            size={80} // Smaller size (set to the desired diameter)
          />
        </div>
        <div className="flex justify-between items-center flex-wrap gap-2">
          <p className="flex group-hover:text-white  items-center justify-start gap-3 px-4  text-gray-500">
            <BiSolidInstitution className="text-xl" />
            {job.company} |
          </p>
          <p className="flex  group-hover:text-white  items-center justify-start gap-3 px-4 text-gray-500">
            <SlCalender className="text-xl" />
            {job.category} |
          </p>
          <p className="flex group-hover:text-white  items-center justify-start gap-3 px-4 text-gray-500">
            <CiLocationOn className="text-xl" />
            {job.location} |
          </p>
        </div>

        <div className="divider"></div>
        <div className="px-4 pb-2">
          <h2 className="text-lg group-hover:text-white text-gray-500">
            job percentage based on your
            <span className="text-[#f99615] font-semibold "> Skill</span> and
            <span className="text-[#f99615] font-semibold"> Location</span>
          </h2>
          <h2 className="group-hover:text-white text-gray-500">
            Total matched skills : {job.matchedSkills.length}
          </h2>
          <h2 className="text-base group-hover:text-white text-gray-500 mb-1">
            Skilled Matched : {job.matchedSkills.join(" , ")}
          </h2>
        </div>
        <div className="">
          {/* <progress
            className="progress progress-ring progress-info w-64"
            value={job.totalMatchPercentage}
            max="100"></progress> */}
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
         
          <div className="card-actions justify-end">
            <Link to={`/jobdetail/${job?._id}`}>
              <div>
                <BsFillArrowRightSquareFill className="text-3xl group-hover:text-white  rounded-full" />
              </div>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecommandation;
