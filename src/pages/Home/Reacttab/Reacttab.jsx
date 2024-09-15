import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Reacttab.css";
import { Link } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import loti from "../../../assets/luca-bravo-9l_326FISzk-unsplash.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Reacttab = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="my-12 lg:mx-auto max-w-6xl overflow-hidden mx-7">
      <h2 className="text-[#ff4848] text-center text-2xl md:text-4xl font-semibold mt-4 mb-8 ">
        Job by Category
      </h2>
      <hr className="mb-2 h-1 w-[10%] mx-auto bg-[#ff4848]" />
      <Tabs className="line">
        <TabList>
          <Tab>All Jobs</Tab>
          <Tab>Onsite Job</Tab>
          <Tab>Remote Job</Tab>
          <Tab>Hybrid Job</Tab>
          <Tab>Part Time Job</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 gap-4">
            <div
              data-aos="fade-left"
              className=" card bg-base-100 rounded-none  shadow-xl">
              <div className="card-body flex-col  md:flex-row items-center justify-between">
                <div className="flex flex-col  items-center justify-start gap-2">
                  <div className="base:pr-4">
                    <img
                      src={loti}
                      style={{ height: "70px", width: "70px", color: "red" }}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col space-y-2 space-x-2 md:space-x-0">
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      Product Designer
                    </h3>
                    <h3 className="text-gray-500 text-base text-center md:text-left">
                      User name
                    </h3>
                    <div className="flex flex-col md:flex-row  items-center justify-center md:justify-start  space-x-5 ">
                      <div className="flex items-center justify-center gap-2 text-gray-500">
                        <IoMdTime className="text-base text-red-600" />
                        <p>12/12/2024</p>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-gray-500">
                        <FaMoneyCheckDollar className="text-base text-red-600" />
                        <p>$123 - $456</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center ">
                  <div className="flex justify-center items-center">
                    <Link to="/jobdetail">
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
                      deadline : 03/12/2024
                    </h3>
                  </div>
                  <h3 className="text-gray-500 text-base">
                    Job applicants no. 1
                  </h3>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className=" card bg-base-100 rounded-none  shadow-xl">
              <div className="card-body flex-col  md:flex-row items-center justify-between">
                <div className="flex flex-col  items-center justify-start gap-2">
                  <div className="base:pr-4">
                    <img
                      src={loti}
                      style={{ height: "70px", width: "70px", color: "red" }}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col space-y-2 space-x-2 md:space-x-0">
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      Product Designer
                    </h3>
                    <h3 className="text-gray-500 text-base text-center md:text-left">
                      User name
                    </h3>
                    <div className="flex flex-col md:flex-row  items-center justify-center md:justify-start  space-x-5 ">
                      <div className="flex items-center justify-center gap-2 text-gray-500">
                        <IoMdTime className="text-base text-red-600" />
                        <p>12/12/2024</p>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-gray-500">
                        <FaMoneyCheckDollar className="text-base text-red-600" />
                        <p>$123 - $456</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center ">
                  <div className="flex justify-center items-center">
                    <Link to="/jobdetail">
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
                      deadline : 03/12/2024
                    </h3>
                  </div>
                  <h3 className="text-gray-500 text-base">
                    Job applicants no. 1
                  </h3>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className=" card bg-base-100 rounded-none  shadow-xl">
              <div className="card-body flex-col  md:flex-row items-center justify-between">
                <div className="flex flex-col  items-center justify-start gap-2">
                  <div className="base:pr-4">
                    <img
                      src={loti}
                      style={{ height: "70px", width: "70px", color: "red" }}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col space-y-2 space-x-2 md:space-x-0">
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      Product Designer
                    </h3>
                    <h3 className="text-gray-500 text-base text-center md:text-left">
                      User name
                    </h3>
                    <div className="flex flex-col md:flex-row  items-center justify-center md:justify-start  space-x-5 ">
                      <div className="flex items-center justify-center gap-2 text-gray-500">
                        <IoMdTime className="text-base text-red-600" />
                        <p>12/12/2024</p>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-gray-500">
                        <FaMoneyCheckDollar className="text-base text-red-600" />
                        <p>$123 - $456</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center ">
                  <div className="flex justify-center items-center">
                    <Link to="/jobdetail">
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
                      deadline : 03/12/2024
                    </h3>
                  </div>
                  <h3 className="text-gray-500 text-base">
                    Job applicants no. 1
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 gap-4">
            <div
              data-aos="fade-left"
              className=" card bg-base-100 rounded-none  shadow-xl">
              <div className="card-body flex-col  md:flex-row items-center justify-between">
                <div className="flex flex-col  items-center justify-start gap-2">
                  <div className="base:pr-4">
                    <img
                      src={loti}
                      style={{ height: "70px", width: "70px", color: "red" }}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col space-y-2 space-x-2 md:space-x-0">
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      Product Designer
                    </h3>
                    <h3 className="text-gray-500 text-base text-center md:text-left">
                      User name
                    </h3>
                    <div className="flex flex-col md:flex-row  items-center justify-center md:justify-start  space-x-5 ">
                      <div className="flex items-center justify-center gap-2 text-gray-500">
                        <IoMdTime className="text-base text-red-600" />
                        <p>12/12/2024</p>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-gray-500">
                        <FaMoneyCheckDollar className="text-base text-red-600" />
                        <p>$123 - $456</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center ">
                  <div className="flex justify-center items-center">
                    <Link to="/jobdetail">
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
                      deadline : 03/12/2024
                    </h3>
                  </div>
                  <h3 className="text-gray-500 text-base">
                    Job applicants no. 1
                  </h3>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className=" card bg-base-100 rounded-none  shadow-xl">
              <div className="card-body flex-col  md:flex-row items-center justify-between">
                <div className="flex flex-col  items-center justify-start gap-2">
                  <div className="base:pr-4">
                    <img
                      src={loti}
                      style={{ height: "70px", width: "70px", color: "red" }}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col space-y-2 space-x-2 md:space-x-0">
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      Product Designer
                    </h3>
                    <h3 className="text-gray-500 text-base text-center md:text-left">
                      User name
                    </h3>
                    <div className="flex flex-col md:flex-row  items-center justify-center md:justify-start  space-x-5 ">
                      <div className="flex items-center justify-center gap-2 text-gray-500">
                        <IoMdTime className="text-base text-red-600" />
                        <p>12/12/2024</p>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-gray-500">
                        <FaMoneyCheckDollar className="text-base text-red-600" />
                        <p>$123 - $456</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center ">
                  <div className="flex justify-center items-center">
                    <Link to="/jobdetail">
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
                      deadline : 03/12/2024
                    </h3>
                  </div>
                  <h3 className="text-gray-500 text-base">
                    Job applicants no. 1
                  </h3>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className=" card bg-base-100 rounded-none  shadow-xl">
              <div className="card-body flex-col  md:flex-row items-center justify-between">
                <div className="flex flex-col  items-center justify-start gap-2">
                  <div className="base:pr-4">
                    <img
                      src={loti}
                      style={{ height: "70px", width: "70px", color: "red" }}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col space-y-2 space-x-2 md:space-x-0">
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      Product Designer
                    </h3>
                    <h3 className="text-gray-500 text-base text-center md:text-left">
                      User name
                    </h3>
                    <div className="flex flex-col md:flex-row  items-center justify-center md:justify-start  space-x-5 ">
                      <div className="flex items-center justify-center gap-2 text-gray-500">
                        <IoMdTime className="text-base text-red-600" />
                        <p>12/12/2024</p>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-gray-500">
                        <FaMoneyCheckDollar className="text-base text-red-600" />
                        <p>$123 - $456</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center ">
                  <div className="flex justify-center items-center">
                    <Link to="/jobdetail">
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
                      deadline : 03/12/2024
                    </h3>
                  </div>
                  <h3 className="text-gray-500 text-base">
                    Job applicants no. 1
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 gap-4">
            <div
              data-aos="fade-left"
              className=" card bg-base-100 rounded-none  shadow-xl">
              <div className="card-body flex-col  md:flex-row items-center justify-between">
                <div className="flex flex-col  items-center justify-start gap-2">
                  <div className="base:pr-4">
                    <img
                      src={loti}
                      style={{ height: "70px", width: "70px", color: "red" }}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col space-y-2 space-x-2 md:space-x-0">
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      Product Designer
                    </h3>
                    <h3 className="text-gray-500 text-base text-center md:text-left">
                      User name
                    </h3>
                    <div className="flex flex-col md:flex-row  items-center justify-center md:justify-start  space-x-5 ">
                      <div className="flex items-center justify-center gap-2 text-gray-500">
                        <IoMdTime className="text-base text-red-600" />
                        <p>12/12/2024</p>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-gray-500">
                        <FaMoneyCheckDollar className="text-base text-red-600" />
                        <p>$123 - $456</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center ">
                  <div className="flex justify-center items-center">
                    <Link to="/jobdetail">
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
                      deadline : 03/12/2024
                    </h3>
                  </div>
                  <h3 className="text-gray-500 text-base">
                    Job applicants no. 1
                  </h3>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className=" card bg-base-100 rounded-none  shadow-xl">
              <div className="card-body flex-col  md:flex-row items-center justify-between">
                <div className="flex flex-col  items-center justify-start gap-2">
                  <div className="base:pr-4">
                    <img
                      src={loti}
                      style={{ height: "70px", width: "70px", color: "red" }}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col space-y-2 space-x-2 md:space-x-0">
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      Product Designer
                    </h3>
                    <h3 className="text-gray-500 text-base text-center md:text-left">
                      User name
                    </h3>
                    <div className="flex flex-col md:flex-row  items-center justify-center md:justify-start  space-x-5 ">
                      <div className="flex items-center justify-center gap-2 text-gray-500">
                        <IoMdTime className="text-base text-red-600" />
                        <p>12/12/2024</p>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-gray-500">
                        <FaMoneyCheckDollar className="text-base text-red-600" />
                        <p>$123 - $456</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center ">
                  <div className="flex justify-center items-center">
                    <Link to="/jobdetail">
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
                      deadline : 03/12/2024
                    </h3>
                  </div>
                  <h3 className="text-gray-500 text-base">
                    Job applicants no. 1
                  </h3>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className=" card bg-base-100 rounded-none  shadow-xl">
              <div className="card-body flex-col  md:flex-row items-center justify-between">
                <div className="flex flex-col  items-center justify-start gap-2">
                  <div className="base:pr-4">
                    <img
                      src={loti}
                      style={{ height: "70px", width: "70px", color: "red" }}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col space-y-2 space-x-2 md:space-x-0">
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      Product Designer
                    </h3>
                    <h3 className="text-gray-500 text-base text-center md:text-left">
                      User name
                    </h3>
                    <div className="flex flex-col md:flex-row  items-center justify-center md:justify-start  space-x-5 ">
                      <div className="flex items-center justify-center gap-2 text-gray-500">
                        <IoMdTime className="text-base text-red-600" />
                        <p>12/12/2024</p>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-gray-500">
                        <FaMoneyCheckDollar className="text-base text-red-600" />
                        <p>$123 - $456</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center ">
                  <div className="flex justify-center items-center">
                    <Link to="/jobdetail">
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
                      deadline : 03/12/2024
                    </h3>
                  </div>
                  <h3 className="text-gray-500 text-base">
                    Job applicants no. 1
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Reacttab;
