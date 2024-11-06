import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import Navbar from "../Shared/Navbar/Navbar";
// import Footer from "../Shared/Footer/Footer";
// import Pageheader from "../../components/Pageheader/Pageheader";

// import useAuth from "../../hooks/useAuth";
import useAppliedjob from "../../../hooks/useAppliedjob";
import useAuth from "../../../hooks/useAuth";
// import Navbar from "../../Shared/Navbar/Navbar";
// import Pageheader from "../../../components/Pageheader/Pageheader";
// import Footer from "../../Shared/Footer/Footer";
// import useAppliedjob from "../../hooks/useAppliedjob";

const Appliedjob = () => {
  const { user } = useAuth();
  console.log(user);
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const [applicationData] = useAppliedjob();
  return (
    <div>
      {/* <Navbar></Navbar>

      <Pageheader
        heading={`Applied Jobs : ${applicationData.length}`}></Pageheader> */}
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
              <th>Job position</th>
              <th>Company</th>
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

                <td>
                  <h3>{data.jobTitle}</h3>
                </td>
                <td>
                  <h3>{data.company}</h3>
                </td>
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

      {/* <Footer></Footer> */}
    </div>
  );
};

export default Appliedjob;
