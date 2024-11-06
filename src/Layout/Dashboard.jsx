import { Link, NavLink, Outlet } from "react-router-dom";
import "./dashboard.css";
import { FaHome } from "react-icons/fa";
import { TbDeviceMobileSearch } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import useAuth from "../hooks/useAuth";
import { RiFileListLine } from "react-icons/ri";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdRecommend } from "react-icons/md";
import { AiFillCalendar } from "react-icons/ai";
const Dashboard = () => {
  const { logOut } = useAuth();
  return (
    <div className="flex flex-col md:flex-row ">
      {/* SIDEBAR CONTENT */}
      <div className="w-full md:max-w-64 bg-img1  text-white font-semibold  min-h-screen">
        <ul className="menu space-y-3 p-3 ">
          <li className=" text-[1rem]">
            <NavLink to="/dashboard/userprofile">
              <CgProfile className="text-2xl text-red-600" /> User Profile
            </NavLink>
          </li>
          <li className=" text-[1rem]">
            <NavLink to="/dashboard/appliedjobs">
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
          <div className="divider border-b-2 border-rose-600"></div>

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
