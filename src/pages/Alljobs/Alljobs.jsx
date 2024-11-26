import { useEffect, useRef, useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import useAuth from "../../hooks/useAuth";
import AOS from "aos";
import "aos/dist/aos.css";
import Pageheader from "../../components/Pageheader/Pageheader";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAlljobs from "../../hooks/useAlljobs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavTop from "../Home/NavTop/NavTop";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
const Alljobs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [alljobs] = useAlljobs();
  const [showJobs, setShowJobs] = useState(alljobs);
  // const axiosPublic = useAxiosPublic();
  useEffect(() => {
    if (alljobs.length > 0) {
      setShowJobs(alljobs);
    }
  }, [alljobs]);
  const valuedata = useRef(null);
  const clickToSearch = () => {
    // kono space remove korte trim use hoy
    const valueget = valuedata.current.value.trim();
    //console.log(valueget);
    if (valueget == "") {
      setShowJobs(alljobs);
    } else {
      const firstWord = valueget.split(" ")[0];
      const searchJob = alljobs.filter((job) =>
        job.jobtitle.toLowerCase().startsWith(firstWord.toLowerCase())
      );
      setShowJobs(searchJob);
    }
  };

  return (
    <div className="">
      <NavTop></NavTop>
      <Navbar></Navbar>
      <Pageheader heading={'Add job'}></Pageheader>
      <div className="flex flex-wrap space-y-3 justify-center space-x-2 items-center md:justify-between my-12 mx-auto w-[90%] md:w-[75%]">
        <h3 className="text-3xl text-[#ff4848] font-semibold">
          Job Vacancies :
        </h3>

        <div onChange={clickToSearch}>
          <label className="input input-bordered  rounded-sm focus:outline-none focus:border-none flex items-center gap-2 border border-red-500">
            <input
              type="text"
              name="search"
              ref={valuedata}
              className="grow"
              placeholder="Search by title"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>

      <div
        data-aos="fade-left"
        className="overflow-x-auto  m-1 mx-auto card rounded-none md:w-[75%] shadow-xl w-[90%]  mb-12">
        <table className="table">
          {/* head#b0c5ca 353547*/}
          <thead className="bg-[#b0c5ca]">
            <tr className="text-lg font-base text-black ">
              <th>List no.</th>
              <th>Job Title</th>
              <th>Job posting Date</th>
              <th>Application Deadline</th>
              <th>Salary</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {/* row 1 */}
            {showJobs.map((job, index) => (
              <tr key={job._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold">{job.jobtitle}</h3>
                  </div>
                </td>
                <td>
                  <h3>{job.date}</h3>
                </td>
                <td>
                  <h3>{job.deadline}</h3>
                </td>
                <td>
                  <h3>{job.salary}</h3>
                </td>
                <th>
                  {user && user?.email ? (
                    <Link to={`/jobdetail/${job._id}`}>
                      <button className="btn bg-[#b7e4a5] text-black text-base  btn-sm rounded-full ">
                        details
                      </button>
                    </Link>
                  ) : (
                    <button
                      onClick={() =>
                        navigate("/login", { state: { from: location } })
                      }
                      className="btn bg-[#b7e4a5] text-black text-base  btn-sm rounded-full ">
                      details
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Alljobs;
