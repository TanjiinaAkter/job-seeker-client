import { FaBriefcase } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import useAlljobs from "../../../hooks/useAlljobs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useSavedJobs from "../../../hooks/useSavedJobs";
import Swal from "sweetalert2";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { MdBookmarkRemove } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const SavedJobDetail = ({ job, style }) => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  const [, refetch] = useSavedJobs();
  const axiosSecure = useAxiosSecure();
  const [jobDetail, setJobDetail] = useState([]);
  console.log(jobDetail);
  const [alljobs] = useAlljobs();
  const { jobId, _id, email } = job;
  //console.log(job, alljobs);
  useEffect(() => {
    if (jobId) {
      const getDetailFromJobId = alljobs.find((job) => job._id === jobId);

      return setJobDetail(getDetailFromJobId);
    }
  }, [alljobs, jobId]);

  const handleDeleteSavedJobs = async () => {
    const res = await axiosSecure.delete(`/savedjobs/${job._id}`);
    console.log(res.data);
    if (res.data.deletedCount > 0) {
      refetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${jobDetail?.jobtitle} is deleted`,
        showConfirmButton: false,
        timer: 1500,
      });
     
    }

    return res.data;
  };

  return (
    <div
      data-aos="fade-left"
      style={style}
      className="card group  rounded-md bg-base-100 shadow-xl">
      <div className=" hover:bg-[#353447]  hover:rounded-md hover:scale-105  transition-all duration-400">
        <div className="md:flex  text-center items-center   gap-3 px-[.8rem]">
          <figure>
            <img
              className="w-full lg:w-[5.5rem] h-24 object-contain"
              src={jobDetail?.photo}
              alt="Shoes"
            />
          </figure>
          <div>
            <h2 className="text-[1.3rem] group-hover:text-white  text-gray-600  font-semibold">
              {jobDetail?.jobtitle}
            </h2>
            <h4 className="text-gray-500 group-hover:text-white  text-[1.1rem] font-semibold">
              - {jobDetail?.company}
            </h4>
          </div>
        </div>
        <div className="card-body   flex md:items-center lg:items-start lg:justify-start  px-[1rem] pb-3">
          <p className="flex group-hover:text-white  items-center justify-start gap-3 text-gray-600 text-lg">
            <FaBriefcase />
            {jobDetail?.category}
          </p>
          <p className="flex group-hover:text-white  items-center justify-start gap-3 text-gray-600 text-lg">
            <SlCalender />
            {jobDetail?.deadline}
          </p>
          <hr className="group-hover:text-white  h-[2px] bg-gray-300 w-full" />

          <div className="card-actions justify-start">
            <Link to={`/jobdetail/${jobDetail?._id}`}>
              <div>
                <BsFillArrowRightSquareFill className="text-3xl group-hover:text-white  rounded-full" />
              </div>
            </Link>
            <div onClick={handleDeleteSavedJobs}>
              <MdBookmarkRemove className=" text-3xl rounded-full bg-black  hover:bg-white p-1 text-white hover:text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedJobDetail;
