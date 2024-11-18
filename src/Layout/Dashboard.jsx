import { Link, NavLink, Outlet } from "react-router-dom";
import "./dashboard.css";
import { FaHome, FaRegFileAlt, FaUsers } from "react-icons/fa";
import { TbDeviceMobileSearch } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import useAuth from "../hooks/useAuth";
import { RiFileListLine } from "react-icons/ri";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWork, MdRecommend } from "react-icons/md";
import { AiFillCalendar } from "react-icons/ai";
import { HiOutlineDocumentAdd } from "react-icons/hi";
const Dashboard = () => {
  const { logOut, user } = useAuth();

  const isAdmin = true;
  return (
    <div className="flex flex-col md:flex-row ">
      {/* SIDEBAR CONTENT */}
      <div className="w-full md:max-w-64 bg-img1  text-white font-semibold  min-h-screen">
        <ul className="menu space-y-3 p-3 ">
          {isAdmin ? (
            <>
              <li className=" text-[1rem]">
                <NavLink to="/dashboard/adminhome">
                  <CgProfile className="text-2xl text-red-600" /> Admin Profile
                </NavLink>
              </li>
              <li className=" text-[1rem]">
                <NavLink to={"/dashboard/stats"}>
                  <RiFileListLine className="text-2xl text-red-600" />
                  Stats
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addjob">
                  <HiOutlineDocumentAdd className="text-2xl text-red-600" />
                  Add Job
                </NavLink>
              </li>
              <li className=" text-[1rem]">
                <NavLink to="/dashboard/managejob">
                  <MdOutlineWork className="text-2xl text-red-600" />
                  Manage Jobs
                </NavLink>
              </li>
              <li className=" text-[1rem]">
                <NavLink to="/dashboard/applications">
                  <FaRegFileAlt className="text-2xl text-red-600" />
                  Applicants
                </NavLink>
              </li>
              <li className=" text-[1rem]">
                <NavLink to="/dashboard/manageusers">
                  <FaUsers className="text-2xl text-red-600" />
                  Manage Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className=" text-[1rem]">
                <NavLink to={`/dashboard/userprofile/${user?.email}`}>
                  <CgProfile className="text-2xl text-red-600" /> User Profile
                </NavLink>
              </li>
              <li className=" text-[1rem]">
                <NavLink to={`/dashboard/appliedjobs/${user?.email}`}>
                  <RiFileListLine className="text-2xl text-red-600" />
                  Applied Jobs
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/savedjobs">
                  <BsBookmarkCheckFill className="text-2xl text-red-600" />
                  Saved Jobs
                </NavLink>
              </li>
              <li className=" text-[1rem]">
                <NavLink to="/dashboard/recommendation">
                  <MdRecommend className="text-2xl text-red-600" /> Job
                  Recommendations
                </NavLink>
              </li>
              <li className=" text-[1rem]">
                <NavLink to="/dashboard/interview">
                  <AiFillCalendar className="text-2xl text-red-600" />
                  Intereview Scheduler
                </NavLink>
              </li>
            </>
          )}
          <div className="divider border-b-2 border-rose-600"></div>
          {/* 2nd row  of sidebar */}
          <li className=" text-[1rem]">
            <NavLink to="/">
              <FaHome className="text-2xl text-red-600"></FaHome>
              Home
            </NavLink>
          </li>
          <li className=" text-[1rem]">
            <NavLink to="/alljobs">
              <TbDeviceMobileSearch className="text-2xl text-red-600" />
              All jobs
            </NavLink>
          </li>
          <li className=" text-[1rem]">
            <NavLink to="/">
              <button
                className="flex  items-center gap-2 "
                onClick={() => logOut()}>
                <BiLogOut className="text-2xl text-red-600" /> Logout
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* DASHBOARD CONTENT */}
      <div className="flex-1  px-3 py-3 ">
        <div className="flex justify-end m-4">
          <Link to="/">
            <button className="btn text-white bg-black">
              <FaHome className="text-2xl text-white"></FaHome>
              Home
            </button>
          </Link>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
