import { useEffect } from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css'
const Alljobs = () => {
  useEffect(() => {
    AOS.init({
    duration:1200
    })
  },[])
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="addjob-img  bg-scroll space-y-28 relative">
        <div className="flex justify-center items-center py-24">
          <hr className="h-[2px] mb-12 bg-[#ff4848] w-[6%] border-none" />
          <p data-aos="fade-left" className="text-white font-semibold text-3xl md:text-5xl text-center">
            All Job Page
          </p>
          <hr className="h-[2px] mt-14 bg-[#ff4848] w-[6%] border-none" />
        </div>
      </div>
      <div className="flex flex-wrap space-y-3 justify-center space-x-2 items-center md:justify-between my-12 mx-auto w-[90%] md:w-[75%]">
        <h3 className="text-3xl text-[#ff4848] font-semibold">
          Job Vacancies :
        </h3>
        <div>
          <label className="input input-bordered  rounded-sm focus:outline-none focus:border-none flex items-center gap-2 border border-red-500">
            <input type="text" className="grow" placeholder="Search by title" />
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

      <div data-aos="fade-left" className="overflow-x-auto  m-1 mx-auto card rounded-none md:w-[75%] shadow-xl w-[90%]  mb-12">
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
            <tr>
              <td>1</td>

              <td>
                <div className="flex items-center gap-3">
                  <h3 className="font-bold">Software engineer</h3>
                </div>
              </td>
              <td>
                <h3>12/12/2024</h3>
              </td>
              <td>
                <h3>04/12/2024</h3>
              </td>
              <td>
                <h3>$500</h3>
              </td>

              <th>
                <button className="btn bg-[#b7e4a5] text-black text-base  btn-sm rounded-full ">
                  details
                </button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>1</td>

              <td>
                <div className="flex items-center gap-3">
                  <h3 className="font-bold">Software engineer</h3>
                </div>
              </td>
              <td>
                <h3>12/12/2024</h3>
              </td>
              <td>
                <h3>04/12/2024</h3>
              </td>
              <td>
                <h3>$500</h3>
              </td>

              <th>
              <button className="btn bg-[#b7e4a5] text-black text-base  btn-sm rounded-full ">
                  details
                </button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <td>1</td>

              <td>
                <div className="flex items-center gap-3">
                  <h3 className="font-bold">Software engineer</h3>
                </div>
              </td>
              <td>
                <h3>12/12/2024</h3>
              </td>
              <td>
                <h3>04/12/2024</h3>
              </td>
              <td>
                <h3>$500</h3>
              </td>

              <th>
              <button className="btn bg-[#b7e4a5] text-black text-base  btn-sm rounded-full ">
                  details
                </button>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <td>1</td>

              <td>
                <div className="flex items-center gap-3">
                  <h3 className="font-bold">Software engineer</h3>
                </div>
              </td>
              <td>
                <h3>12/12/2024</h3>
              </td>
              <td>
                <h3>04/12/2024</h3>
              </td>
              <td>
                <h3>$500</h3>
              </td>

              <th>
              <button className="btn bg-[#b7e4a5] text-black text-base  btn-sm rounded-full ">
                  details
                </button>
              </th>
            </tr>
          </tbody>
          {/* foot */}
        </table>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Alljobs;
