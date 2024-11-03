import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Pageheader from "../../components/Pageheader/Pageheader";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

// import { useLocation } from "react-router-dom";

const Appliedjob = () => {
  // const location = useLocation();
  // const applicationData = location.state;
  // console.log(applicationData);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  const { data: applicationData = [] } = useQuery({
    queryKey: ["applicationData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/applications");
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div>
      <Navbar></Navbar>
      {/* <div className="addjob-img  bg-scroll space-y-28 relative">
        <div className="flex justify-center items-center py-24">
          <hr className="h-[2px] mb-12 bg-[#ff4848] w-[6%] border-none" />
          <p
            data-aos="fade-left"
            className="text-white font-semibold text-3xl md:text-5xl text-center">
            My Applied Jobs
          </p>
          <hr className="h-[2px] mt-14 bg-[#ff4848] w-[6%] border-none" />
        </div>
      </div> */}
      <Pageheader
        heading={`Applied Jobs : ${applicationData.length}`}></Pageheader>
      {/* Table */}
      <div
        data-aos="fade-left"
        className="overflow-x-auto  mt-12 m-1 mx-auto card rounded-none md:w-[75%] shadow-xl w-[90%]  mb-12">
        <table className="table ">
          {/* head#b0c5ca 353547*/}
          <thead className="bg-[#b0c5ca]">
            <tr className="text-lg font-base text-black ">
              <th>Name</th>
              <th>Email</th>
              <th>Resume</th>
              <th>No. of applicants</th>
              <th>Download summery</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {/* row 1 */}
            {applicationData.map((data) => (
              <tr key={data._id}>
                <td>
                  <h3>{data.name}</h3>
                </td>
                <td>
                  <h3>{data.email}</h3>
                </td>
                <td>
                  <h3>{data.resume}</h3>
                </td>
                <td>{<h3>{data.resume}</h3>}</td>
                {
                  <td>
                    <a
                      href={`http://localhost:5000/uploads/${data.resume}`} // Link to download the resume
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-[#b7e4a5] text-black text-base btn-sm rounded-full">
                      Download
                    </a>
                  </td>
                }
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

export default Appliedjob;
