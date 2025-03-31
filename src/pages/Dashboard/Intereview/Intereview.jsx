import { useEffect, useState } from "react";
import UserPageHeader from "../../../components/UserPageHeader/UserPageHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import useSingleApplicantsData from "../../../hooks/useSingleApplicantsData";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const Intereview = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  // specific appluicant er sob interview job list
  const [singleApplicantsData, refetch] = useSingleApplicantsData();
  const [scheduledJobs, setcheduledJobs] = useState([]);
  // joto accepted job  ache sei joblist er interview schedulelist
  const { data: allInterviewdata = [] } = useQuery({
    queryKey: ["allInterviewdata"],
    queryFn: async () => {
      const res = await axiosSecure.get("/interviewschedule");
      return res.data;
    },
  });

  useEffect(() => {
    if (user) {
      // accepteddata e singleApplicantsData (ei user er sob apply kora job ekhane ache ,filter kore accepted gulo nisi)
      const acceptedData = Object.values(singleApplicantsData).filter(
        (accept) => accept.status === "accepted"
      );
      // accepteed gulo theke just jobId gulo niye nicchi
      const acceptJobId = acceptedData.map((acce) => acce.jobId);
      // console.log(
      //   "all accept data",
      //   acceptedData,
      //   "interview date of all job",
      //   allInterviewdata,
      //   "id nilam accepted job gular",
      //   acceptJobId
      // );

      //then notun array te jei jobs mile oigulo filter kore data niye nicchi
      const newData = allInterviewdata.filter((data) =>
        acceptJobId.includes(data.jobid)
      );
      setcheduledJobs(newData);
      // console.log("schedule interview info of accepted jobs", newData);
    }
  }, [singleApplicantsData, user, allInterviewdata]);
  //console.log(details);
  return (
    <div className="overflow-hidden">
      <UserPageHeader userheading={"Interview Schedule"}></UserPageHeader>
      <div data-aos="fade-left" className="max-w-6xl mx-auto">
        <div className="overflow-auto card shadow-xl rounded-md">
          <table className="table w-full p-8">
            {/* head */}
            <thead className="bg-[#b0c5ca]">
              <tr className="text-lg font-base text-black ">
                <th>Schedule Date</th>
                <th>Schedule Time</th>
                <th>Job Location</th>
                <th>Applied Position </th>
                <th>Interviwer Email </th>
                <th>Interviwer Name</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {scheduledJobs.map((job) => (
                <tr key={job._id} className="bg-base-200">
                  <th>{job.date}</th>
                  <td>{job.time} AM</td>
                  <td>{job.jobLocation}</td>
                  <td>{job.jobtitle}</td>
                  <td>{job.email}</td>
                  <td>{job.name}</td>
                </tr>
              ))}
              {/* <tr className="bg-base-200">
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>Quality Control Specialist</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Intereview;
