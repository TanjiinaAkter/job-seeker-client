import { useEffect } from "react";
import UserPageHeader from "../../../components/UserPageHeader/UserPageHeader";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import useAppliedjob from "../../../hooks/useAppliedjob";
import { LuDownload } from "react-icons/lu";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { MdScheduleSend } from "react-icons/md";
// import { useQuery } from "@tanstack/react-query";

const Applicants = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // ekhane sob jobseeker er applied job ache (/applications) route
  const [applicationData, refetch] = useAppliedjob();
  console.log(applicationData);

  // const { data: singleApplicantsData = [] } = useQuery({
  //   queryKey: ["singleApplicantsData", user?.email],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get(
  //       `/applications/single?email=${user?.email}`
  //     );
  //     console.log(res.data);
  //     return res.data;
  //   },
  // });
  // console.log(singleApplicantsData);
  //   const { data: specificId = [] } = useQuery({
  //     queryKey: ['specificid'],
  //     queryFn: async () => {
  //       const res= await axiosSecure.get(`/applications/${}`)
  //     }
  // })
  console.log(applicationData);
  // ekahne status k parameter e kore pacchi
  const updateStatus = async (job_id, status) => {
    console.log(job_id, status);
    // only  to specific job in /applications route.. application route holo total jobseekers appliedjob niye baniyechi, ekhn specific job seeker k accept or reject korar jonno ekta put operation kore status add kore setake update(accept/reject) kore dicchi..put use korechi karon onek job jokhn apply hoye create korechilam oigulay status kichu kichu te chilo and kichu te chilo na tai..thakle update hobe noyto add hobe
    axiosSecure.get(`/applications/${job_id}`);
    const res = await axiosSecure.put(`/applications/${job_id}`, {
      status: status,
    });
    console.log(res.data);
    refetch();
  };
  return (
    <div>
      <div>
        <UserPageHeader userheading={"Applications"}></UserPageHeader>
      </div>
      <div
        data-aos="fade-left"
        className="overflow-x-auto rounded-md   mt-12 m-1 mx-auto card  md:max-w-6xl shadow-xl w-[90%]  mb-12">
        <table className="table ">
          {/* head#b0c5ca 353547*/}
          <thead className="">
            <tr className="text-lg font-base text-black ">
              <th>Applicant</th>
              <td>Company Name</td>
              <th>Job title</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Resume</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {/* row 1 */}

            {applicationData.map((data, index) => (
              <tr key={data._id}>
                <td>{index + 1}</td>

                <td>{data.company}</td>
                <td>
                  <h3>{data.jobTitle}</h3>
                </td>
                <td>
                  <h3>{data.name}</h3>
                </td>
                <td>
                  <h3>{data.email}</h3>
                </td>

                {
                  <td className="flex justify-center items-center">
                    <a
                      className="flex items-center flex-col space-x-2"
                      href={`http://localhost:5000/uploads/${data.resume}`}>
                      <LuDownload className=" font-semibold text-xl text-blue-500"></LuDownload>
                      <span className="text-blue-500">Download</span>
                    </a>
                  </td>
                }
                <td>
                  <h3 className="">{data?.status?.status || data.status}</h3>
                </td>

                <td>
                  <div className="flex items-center justify-center space-x-1">
                    {/* =================== STATUS PENDING WITH BOTH ACCEPT AND REJECT ICONS(pending thakle duita icon e dekhabo)  ==================*/}
                    {data?.status?.status ||
                      (data.status === "pending" && (
                        <div className=" p-2 rounded-md hover:bg-[#d3cccc]">
                          <FaCheckCircle
                            onClick={() => updateStatus(data._id, "accepted")}
                            className="text-2xl text-green-600"
                          />
                        </div>
                      ))}
                    {/* <div className=" p-2 rounded-md hover:bg-[#d3cccc]">
                      <FaCheckCircle
                        onClick={() => updateStatus(data._id, "accepted")}
                        className="text-2xl text-green-600"
                      />
                    </div> */}
                    {data.status?.status ||
                      (data.status === "pending" && (
                        <div className=" p-2 rounded-md hover:bg-[#d3cccc]">
                          <FaTimesCircle
                            onClick={() => updateStatus(data._id, "rejected")}
                            className=" text-2xl text-[#ff4848]"
                          />
                        </div>
                      ))}
                    {data.status?.status ||
                      (data.status === "accepted" && (
                        <div className=" p-2 rounded-md hover:bg-[#d3cccc]">
                          <FaCheckCircle className="text-2xl text-green-600" />
                        </div>
                      ))}
                    {data.status?.status ||
                      (data.status === "rejected" && (
                        <div className=" p-2 rounded-md hover:bg-[#d3cccc]">
                          <FaTimesCircle className=" text-2xl text-[#ff4848]" />
                        </div>
                      ))}

                    {/* {data?.status?.status ||
                      (data.status === "accepted" && (
                        <div
                          data-tip="make schedule"
                          className="bg-pink-600 rounded-badge flex items-center tooltip text-center badge-secondary font-semibold py-1 text-[13px] pl-1">
                       
                          Schedule <MdScheduleSend></MdScheduleSend>
                        </div>
                      ))} */}
                    {/* <div className=" p-2 rounded-md hover:bg-[#d3cccc]">
                      <FaTimesCircle
                        onClick={() => updateStatus(data._id, "rejected")}
                        className=" text-2xl text-[#ff4848]"
                      />
                    </div> */}
                  </div>
                </td>
              </tr>
            ))}
            {/* <tr>
              <td>1</td>

              <td>Company Name</td>
              <td>
                <h3>Software engineer</h3>
              </td>
              <td>
                <h3>ishehrin</h3>
              </td>
              <td>
                <h3>user@gmail.com</h3>
              </td>

              <td>
                <h3>04/12/2024 </h3>
              </td>
              <td>
                <h3>24/12/2024 </h3>
              </td>

              <td>
                <div className="flex items-center justify-center space-x-1">
                  <div className=" p-2 rounded-md hover:bg-[#d3cccc]">
                  <FaCheckCircle className="text-2xl text-green-600" />
                  </div>
                  <div className=" p-2 rounded-md hover:bg-[#d3cccc]">
                    <FaTimesCircle className=" text-2xl text-[#ff4848]" />
                  </div>
                </div>
              </td>
            </tr> */}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Applicants;
