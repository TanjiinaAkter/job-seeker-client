import Navbar from "../Shared/Navbar/Navbar";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "../Shared/Footer/Footer";
import img from "../../assets/luca-bravo-9l_326FISzk-unsplash.jpg";
import Pageheader from "../../components/Pageheader/Pageheader";
const Myjobs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="">
      <Navbar></Navbar>
      {/* <div className="addjob-img  bg-scroll space-y-28 relative">
        <div className="flex justify-center items-center py-24">
          <hr className="h-[2px] mb-12 bg-[#ff4848] w-[6%] border-none" />
          <p
            data-aos="fade-left"
            className="text-white font-semibold text-3xl md:text-5xl text-center">
            My Jobs
          </p>
          <hr className="h-[2px] mt-14 bg-[#ff4848] w-[6%] border-none" />
        </div>
      </div> */}
      <Pageheader heading='My Jobs'></Pageheader>
      <div
        data-aos="fade-left"
        className="overflow-x-auto  mt-12 m-1 mx-auto card rounded-none md:w-[75%] shadow-xl w-[90%]  mb-12">
        <table className="table ">
          {/* head#b0c5ca 353547*/}
          <thead className="bg-[#b0c5ca]">
            <tr className="text-lg font-base text-black ">
              <th>job application no.</th>
              <th>Image</th>
              <th>Job title</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Job category</th>
              <th>Salary</th>
              <th>Job description</th>
              <th>Job posting date</th>
              <th>Application Deadline</th>
              <th>status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {/* row 1 */}
            <tr>
              <td>1</td>

              <td>
                <div className="flex items-center gap-3">
                  <img src={img} alt="" />
                </div>
              </td>
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
                <h3>full stack</h3>
              </td>
              <td>
                <h3>$500</h3>
              </td>
              <td>
                <h3>
              1
                </h3>
              </td>
              <td>
                <h3>04/12/2024 </h3>
              </td>
              <td>
                <h3>24/12/2024 </h3>
              </td>
             
              <td>
                <button className="btn bg-[#b7e4a5] text-black text-base  btn-sm rounded-full ">
                  Complete
                </button>
              </td>
              <td>
                <div className="flex items-center justify-center space-x-3">
                  <div className=" p-2 rounded-md hover:bg-[#d3cccc]">
                    <MdModeEdit className="text-2xl text-yellow-600" />
                  </div>
                  <div className=" p-2 rounded-md hover:bg-[#d3cccc]">
                    <MdDelete className=" text-2xl text-[#ff4848]" />
                  </div>
                </div>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>1</td>

              <td>
                <div className="flex items-center gap-3">
                  <img src={img} alt="" />
                </div>
              </td>
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
                <h3>full stack</h3>
              </td>
              <td>
                <h3>$500</h3>
              </td>
              <td>
                <h3>
                  Benchmark is an architectural firm looking for a potential
                  experienced
                </h3>
              </td>
              <td>
                <h3>04/12/2024 </h3>
              </td>
              <td>
                <h3>24/12/2024 </h3>
              </td>
             
              <td>
                <button className="btn bg-[#b7e4a5] text-black text-base  btn-sm rounded-full ">
                  Complete
                </button>
              </td>
              <td>
                <div className="flex items-center justify-center space-x-3">
                  <div className=" p-2 rounded-md hover:bg-[#d3cccc]">
                    <MdModeEdit className="text-2xl text-yellow-600" />
                  </div>
                  <div className=" p-2 rounded-md hover:bg-[#d3cccc]">
                    <MdDelete className=" text-2xl text-[#ff4848]" />
                  </div>
                </div>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>1</td>

              <td>
                <div className="flex items-center gap-3">
                  <img src={img} alt="" />
                </div>
              </td>
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
                <h3>full stack</h3>
              </td>
              <td>
                <h3>$500</h3>
              </td>
              <td>
                <h3>
                  Benchmark is an architectural firm looking for a potential
                  experienced
                </h3>
              </td>
              <td>
                <h3>04/12/2024 </h3>
              </td>
              <td>
                <h3>24/12/2024 </h3>
              </td>
             
              <td>
                <button className="btn bg-[#b7e4a5] text-black text-base  btn-sm rounded-full ">
                  Complete
                </button>
              </td>
              <td>
                <div className="flex items-center justify-center space-x-3">
                  <div className=" p-2 rounded-md hover:bg-[#d3cccc]">
                    <MdModeEdit className="text-2xl text-yellow-600" />
                  </div>
                  <div className=" p-2 rounded-md hover:bg-[#d3cccc]">
                    <MdDelete className=" text-2xl text-[#ff4848]" />
                  </div>
                </div>
              </td>
            </tr>
            {/* row 4 */}
            <tr>
              <td>1</td>

              <td>
                <div className="flex items-center gap-3">
                  <img src={img} alt="" />
                </div>
              </td>
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
                <h3>full stack</h3>
              </td>
              <td>
                <h3>$500</h3>
              </td>
              <td>
                <h3>
                  Benchmark is an architectural firm looking for a potential
                  experienced
                </h3>
              </td>
              <td>
                <h3>04/12/2024 </h3>
              </td>
              <td>
                <h3>24/12/2024 </h3>
              </td>
             
              <td>
                <button className="btn bg-[#b7e4a5] text-black text-base  btn-sm rounded-full ">
                  Complete
                </button>
              </td>
              <td>
                <div className="flex items-center justify-center space-x-3">
                  <div className=" p-2 rounded-md hover:bg-[#d3cccc]">
                    <MdModeEdit className="text-2xl text-yellow-600" />
                  </div>
                  <div className=" p-2 rounded-md hover:bg-[#d3cccc]">
                    <MdDelete className=" text-2xl text-[#ff4848]" />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
          {/* foot */}
        </table>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Myjobs;
