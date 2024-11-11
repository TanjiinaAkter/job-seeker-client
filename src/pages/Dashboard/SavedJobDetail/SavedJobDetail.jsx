import { FaBriefcase } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import useAlljobs from "../../../hooks/useAlljobs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useSavedJobs from "../../../hooks/useSavedJobs";
import Swal from "sweetalert2";
import Aos from "aos";
import "aos/dist/aos.css";
const SavedJobDetail = ({ job }) => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  const [, refetch] = useSavedJobs();
  const axiosPublic = useAxiosPublic();
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
    const res = await axiosPublic.delete(`/savedJobs/${job._id}`);
    console.log(res.data);
    if (res.data.deletedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${jobDetail?.jobtitle} is deleted`,
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    }

    return res.data;
  };

  return (
    <div data-aos="fade-left" className="card  rounded-none bg-base-100 shadow-xl">
      <div className="md:flex text-center items-center  gap-3 px-[.8rem]">
        <figure>
          <img
            className="w-full lg:w-[5.5rem] h-24 object-contain"
            src={jobDetail?.photo}
            alt="Shoes"
          />
        </figure>
        <div>
          <h2 className="text-[1.3rem] text-gray-600  font-semibold">
            {jobDetail?.jobtitle}
          </h2>
          <h4 className="text-gray-500 text-[1.1rem] font-semibold">
            - {jobDetail?.company}
          </h4>
        </div>
      </div>
      <div className="card-body flex md:items-center lg:items-start lg:justify-start  px-[1rem] pb-3">
        <p className="flex items-center justify-start gap-3 text-gray-600 text-lg">
          <FaBriefcase />
          {jobDetail?.category}
        </p>
        <p className="flex items-center justify-start gap-3 text-gray-600 text-lg">
          <SlCalender />
          {jobDetail?.deadline}
        </p>

        <div className="card-actions justify-start">
          <Link to={`/jobdetail/${jobDetail?._id}`}>
            <div className="badge bg-[#D24A4A] text-white rounded-none  text-base font-semibold py-4 px-3">
              Details
            </div>
          </Link>
          <div
            onClick={handleDeleteSavedJobs}
            className="badge bg-[#D24A4A] text-white text-base rounded-none font-semibold py-4 px-3">
            Unsave
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedJobDetail;
