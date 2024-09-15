import Navbar from "../Shared/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoMdTime } from "react-icons/io";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import loti from "../../assets/Animation - 1726164735519.gif";
import tickimg from "../../assets/Animation - 1726209450587.gif";
import corporateimg from "../../assets/luca-bravo-9l_326FISzk-unsplash.jpg";
import Footer from '../Shared/Footer/Footer'
import { useEffect } from "react";
const Jobdetail = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="addjob-img sm:h-auto bg-scroll space-y-28 relative">
        <div className="flex justify-center items-center py-24">
          <hr className="h-[2px] mb-12 bg-[#ff4848] w-[6%] border-none" />
          <p className="text-white font-semibold text-3xl md:text-5xl text-center">
            Job Details : Product Designer
          </p>
          <hr className="h-[2px] mt-14 bg-[#ff4848] w-[6%] border-none" />
        </div>
      </div>
      <div className="flex flex-col space-x-3 mx-auto w-full md:max-w-[75%] space-y-4 mb-12">
        {/* row-1 */}
        <div className="rowOne flex  mt-14 p-2 space-x-3">
          <div className="lg:pr-4">
            <img
              src={loti}
              style={{ height: "70px", width: "70px", color: "red" }}
              alt=""
            />
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="text-3xl font-semibold">Product Designer</h3>
            <div className="flex items-center justify-start space-x-5 ">
              <div className="flex items-center justify-center gap-2 text-gray-500">
                <IoMdTime className="text-lg" />
                <p>Full Time</p>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <FaMoneyCheckDollar className="text-lg" />
                <p>$123 - $456</p>
              </div>
            </div>
          </div>
        </div>
        {/* row-2 */}
        <div className=" overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 space-y-3">
            <div
              className="col-span-full lg:col-span-2 w-full mx-auto lg:p-2"
              data-aos="fade-right">
              <img
                className="w-full lg:w-[80%] rounded-sm"
                src={corporateimg}
                alt=""
              />
              <div></div>
            </div>
            <div className="col-span-full lg:col-span-1 border border-gray-200 space-y-3 p-4 bg-[#f8f9fa]">
              <h3 className="text-[#ff4848] my-5 text-2xl pl-2">
                Job Information
              </h3>
              <div className=" flex justify-start  items-center gap-2 ">
                <img
                  data-aos="fade-left"
                  src={tickimg}
                  style={{
                    width: "40px",
                    height: "40px",
                    fontWeight: "bold",
                  }}
                  alt=""
                />

                <h4
                  className="font-semibold text-gray-500 text-lg "
                  data-aos="fade-left">
                  Title :
                  <span className="text-gray-500 font-normal pl-1">
                    Product designer
                  </span>
                </h4>
              </div>
              <div className=" flex justify-start  items-center gap-2">
                <img
                  data-aos="fade-left"
                  src={tickimg}
                  style={{
                    width: "40px",
                    height: "40px",
                    fontWeight: "bold",
                  }}
                  alt=""
                />
                <h4
                  className="font-semibold text-gray-500 text-lg "
                  data-aos="fade-left">
                  Salary:
                  <span className="text-gray-500 font-normal pl-1">$450</span>
                </h4>
              </div>
              <div className=" flex justify-start  items-center gap-2">
                <img
                  data-aos="fade-left"
                  src={tickimg}
                  style={{
                    width: "40px",
                    height: "40px",
                    fontWeight: "bold",
                  }}
                  alt=""
                />
                <h4
                  className="font-semibold text-gray-500 text-lg "
                  data-aos="fade-left">
                  No. of Applicants :
                  <span className="text-gray-500 font-normal pl-1">0</span>
                </h4>
              </div>
              <div className="flex justify-start" data-aos="fade-left">
                <button className="btn-sm bg-[#ff4848] text-white font-bold rounded-sm  my-5 ml-3 md:text-base md:btn-md">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-auto m-4 w-full md:max-w-[75%]  border border-gray-200  bg-[#f8f9fa] ">
        <div className="flex items-center  font-medium text-gray-500 text-lg">
          <img
            src={tickimg}
            style={{
              width: "40px",
              height: "40px",
              fontWeight: "bold",
            }}
            alt=""
          />
          <p>Job Description : </p>
        </div>
        <p className="p-4 text-gray-500">
          Job Description : Benchmark is an architectural firm looking for a
          potential experienced Photo Editor Job duties and responsibilities
          Coordinate with the team to identify photography needs Review photos,
          edit, and make necessary changes Must be team-oriented and proactive
          in meeting the deadlines Study the work requirements and perform
          accordingly Good understanding of design software and technologies
          (such as Illustrator, Photoshop, etc.) Knows the concept of masking,
          cloning, lightroom, cameraman, and other terminologies related to its
          working. Have excellent time management skills and the ability to work
          under pressure.
        </p>
      </div>
     <Footer></Footer>
    </div>
  );
};

export default Jobdetail;
