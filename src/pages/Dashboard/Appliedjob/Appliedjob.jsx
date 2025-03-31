import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import useAppliedjob from "../../../hooks/useAppliedjob";
import useAuth from "../../../hooks/useAuth";
import { Link, useParams } from "react-router-dom";
import UserPageHeader from "../../../components/UserPageHeader/UserPageHeader";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { FaDownload } from "react-icons/fa";
const Appliedjob = () => {
  const { user } = useAuth();
  console.log(user);
  const { id } = useParams();
  console.log(user, id);
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  // ekhane sob jobseeker er applied job ache
  const [applicationData] = useAppliedjob();
  console.log("data of appliedjob", applicationData);
  const axiosSecure = useAxiosSecure();
  // ekhane specific single jobseeker er applied job ache
  const { data: singleApplicantsData = [] } = useQuery({
    queryKey: ["singleApplicantsData", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/applications/single?email=${user?.email}`
      );
      console.log(res.data);
      return res.data;
    },
  });
  console.log(singleApplicantsData);
  return (
    <div className="overflow-hidden">
      <div>
        <UserPageHeader
          userheading={`Applied Jobs : ${singleApplicantsData.length} `}></UserPageHeader>
      </div>

      {/* Table */}
      <div
        data-aos="fade-left"
        className="overflow-x-auto  mt-12 m-1 mx-auto card rounded-md md:w-[90%] shadow-xl w-[90%]  mb-12">
        <table className="table w-full p-8">
          {/* head#b0c5ca 353547*/}
          <thead className="bg-[#b0c5ca]">
            <tr className="text-lg font-base text-black ">
              <th>Name</th>
              <th>Email</th>

              <th>Job position</th>
              <th>Company</th>

              <th>Status</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {/* row 1 */}
            {Object.values(singleApplicantsData).map((data) => (
              <tr key={data._id}>
                <td>
                  <h3>{data.name}</h3>
                </td>
                <td>
                  <h3>{data.email}</h3>
                </td>

                <td>
                  <h3>{data.jobTitle}</h3>
                </td>
                <td>
                  <h3>{data.company}</h3>
                </td>
                {/* {
                  <td>
                    <a
                      href={`https://job-seeker-server-gamma.vercel.app/uploads/${data.resume}`} // Link to download the resume
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn  text-[#447de6] btn-sm rounded-full">
                     <FaDownload></FaDownload> 
                    </a>
                  </td>
                } */}
                <td>
                  {data?.status?.status ||
                    (data?.status === "accepted" && (
                      <Link to="/dashboard/interview">
                        <button className="badge py-4 px-3 font-semibold hover:scale-105 hover:bg-gray-700 bg-green-500 text-white  ">
                          {data?.status?.status || data?.status}
                        </button>
                      </Link>
                    ))}
                  {data?.status?.status ||
                    (data?.status === "rejected" && (
                      <button className="badge py-4 px-3 font-semibold hover:scale-105 hover:bg-gray-700 bg-[#ff0000] text-white  ">
                        {data?.status?.status || data?.status}
                      </button>
                    ))}
                  {data?.status?.status || data?.status === "pending" || "" ? (
                    <button className="badge py-4 px-3 font-semibold hover:scale-105 hover:bg-gray-700 bg-yellow-500 text-white  ">
                      pending
                    </button>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            ))}
          </tbody>

          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Appliedjob;
