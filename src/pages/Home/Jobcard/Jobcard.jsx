import { FaBookmark, FaCalendarAlt } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";

import { GrBookmark } from "react-icons/gr";
import useSavedJobs from "../../../hooks/useSavedJobs";
const Jobcard = ({ job }) => {
  const [savedJobs, refetch] = useSavedJobs();
   const { user } = useAuth();
 const axiosPublic = useAxiosPublic();

  // const { data: savedJobs = [], refetch } = useQuery({
  //   queryKey: ["savedJobs", user?.email],

  //   queryFn: async () => {
  //     const res = await axiosPublic.get(`/savedJobs?email=${user?.email}`);
  //     console.log(res.data);
  //     return res.data;
  //   },
  // });

  const {
    photo,
    category,
    _id,
    name,
    salary,
    jobtitle,
    email,
    hiddenapplicationnumber,
    deadline,
    date,
  } = job;
  const [isSaved, setIsSaved] = useState(false);
  useEffect(() => {
    if (savedJobs.length > 0) {
      const jobIsSaved = savedJobs.some(
        (savedJob) => savedJob.jobId === job._id
      );
      setIsSaved(jobIsSaved);
    }
  }, [job._id, savedJobs]);

  const handleSavedJobs = async () => {
    const savedjob = {
      email: user.email,
      jobId: job._id,
    };
    console.log("click");
    try {
      const res = await axiosPublic.post("/savedjobs", savedjob);
      console.log(res.data);

      setIsSaved(true);
      refetch();
    } catch (error) {
      console.error("error in savedjob posting", error);
    }
  };

  return (
    <div
      data-aos="fade-left"
      className=" card bg-base-100 rounded-none  shadow-xl">
      <div className="card-body flex-col  md:flex-row items-center justify-between">
        <div className="flex flex-col  items-center justify-start gap-2">
          <div className="base:pr-4">
            <img
              src={photo}
              style={{ height: "70px", width: "70px", color: "red" }}
              alt=""
            />
          </div>
          <div className="flex flex-col space-y-2 space-x-2 md:space-x-0">
            <h3 className="text-2xl md:text-3xl font-semibold flex items-center">
              {job.jobtitle}

              <button disabled={isSaved}>
                <FaBookmark
                  onClick={handleSavedJobs}
                  className={`pl-3 text-[2rem] ${
                    isSaved ? "text-red-600" : ""
                  }`}
                />
              </button>
              <p
                className={`${
                  isSaved ? (
                    "bg-red-600"
                  ) : (
                    <GrBookmark className="bg-gray-200" />
                  )
                }`}></p>
              {/* <button
                disabled={isSaved}
                className={`btn ml-4 ${isSaved ? "btn-disabled" : "btn-primary"}`}>
                {isSaved ? "Saved" : "Save this Job"}
              </button> */}
            </h3>
            <h3 className="text-gray-500 text-base text-center md:text-left">
              {name}
            </h3>
            <div className="flex flex-col md:flex-row  items-center justify-center md:justify-start  space-x-5 ">
              <div className="flex items-center justify-center gap-2 text-gray-500">
                <IoMdTime className="text-base text-red-600" />
                <p>{job.date}</p>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-500">
                <FaMoneyCheckDollar className="text-base text-red-600" />
                <p>{job.salary}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <div className="flex justify-center items-center py-3">
            <Link to={`/jobdetail/${_id}`}>
              <button className="btn btn-md bg-red-600 text-white rounded-sm text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Details
              </button>
            </Link>
            {/* <button className="btn btn-wide  bg-red-600  text-white rounded-sm ">
                      Details
                    </button> */}
          </div>
          <div className="flex flex-row  items-center gap-2">
            <FaCalendarAlt className="text-base text-red-600" />
            <h3 className="text-base text-gray-500">
              deadline : {job.deadline}
            </h3>
          </div>
          <h3 className="text-gray-500 text-base">
            Job applicants no. {job.hiddenapplicationnumber}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Jobcard;
