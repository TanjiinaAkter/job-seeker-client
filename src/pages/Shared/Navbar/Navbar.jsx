import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import img from "../../../assets/Untitled.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
const Navbar = () => {
  const location = useLocation();
  //console.log(location);
  const isHomeRoute = location.pathname === "/";
  const { user, logOut } = useContext(AuthContext);
  //console.log(user);
  const userLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const links = (
    <div className="flex lg:flex-row flex-col lg:flex-1 space-y-2  md:space-y-0 md:space-x-2">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#ff4848] font-semibold underline  text-lg"
              : isHomeRoute
              ? "text-white font-semibold text-lg"
              : " text-black font-semibold text-lg "
          }>
          home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/alljobs"
          className={({ isActive }) =>
            isActive
              ? "text-[#ff4848] font-semibold underline  text-lg"
              : isHomeRoute
              ? "text-white font-semibold text-lg "
              : " text-black font-semibold text-lg"
          }>
          All jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutus"
          className={({ isActive }) =>
            isActive
              ? "text-[#ff4848] font-semibold underline  text-lg"
              : isHomeRoute
              ? "text-white font-semibold text-lg "
              : " text-black font-semibold text-lg"
          }>
          About us
        </NavLink>
      </li>
      {user?.email ? (
        <>
          <li>
            <NavLink
              to="/myjobs"
              className={({ isActive }) =>
                isActive
                  ? "text-[#ff4848] font-semibold underline  text-lg "
                  : isHomeRoute
                  ? "text-white font-semibold text-lg"
                  : " text-black font-semibold text-lg "
              }>
              My jobs
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/userprofile/${user?.email}`}>
              {" "}
              Dashboard
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}
      {/* <li>
        <NavLink
          to="/appliedjobs"
          className={({ isActive }) =>
            isActive
              ? "text-[#ff4848] font-semibold underline  text-lg"
              : isHomeRoute
              ? "text-white font-semibold text-lg"
              : " text-black font-semibold text-lg "
          }>
          Applied jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addjob"
          className={({ isActive }) =>
            isActive
              ? "text-[#ff4848] font-semibold underline  text-lg "
              : isHomeRoute
              ? "text-white font-semibold text-lg"
              : " text-black font-semibold text-lg "
          }>
          Add a job
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myjobs"
          className={({ isActive }) =>
            isActive
              ? "text-[#ff4848] font-semibold underline  text-lg "
              : isHomeRoute
              ? "text-white font-semibold text-lg"
              : " text-black font-semibold text-lg "
          }>
          My jobs
        </NavLink>
      </li> */}
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? "text-[#ff4848] font-semibold underline  text-lg"
              : isHomeRoute
              ? "text-white font-semibold text-lg"
              : " text-black font-semibold text-lg "
          }>
          Blogs
        </NavLink>
      </li>
    </div>
  );
  // ==================== USERNAME SHOW AFTER HOVER ON IMG ======================//
  const [Hovered, setHovered] = useState(false);
  const handlehover = () => {
    setHovered(true);
  };
  const handleNoHover = () => {
    setHovered(false);
  };
  return (
    <div className=" bg-white md:bg-transparent mx-auto max-w-6xl">
      <div className=" flex flex-col md:flex-row navbar pt-4 ">
        <div className="md:navbar-start w-full flex justify-between items-center">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-red-600 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu  dropdown-content bg-slate-700  rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <div className="flex justify-end items-center">
            <img className="w-12 h-12" src={img} alt="" />
            <Link
              to="/"
              className=" pl-[5px] text-2xl md:text-3xl text-[#ff4848] font-bold">
              JobNest
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu  px-1">{links}</ul>
        </div>
        <div className="md:navbar-end  space-y-2 sm:space-y-0 lg:space-x-4 mt-3 md:mt-0 md:pl-4 ">
          {user?.email ? (
            <div className="flex flex-row space-x-2 items-center justify-center ">
              <div className="relative z-10 ">
                <Link to={`dashboard/userprofile/${user?.email}`}>
                  <img
                    onMouseEnter={handlehover}
                    onMouseLeave={handleNoHover}
                    className="object-cover w-12 h-12 hover:border hover:border-white border-2 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                </Link>
                {Hovered ? (
                  <div>
                    <p className="absolute text-lime-400 font-bold bg-red  top-14 ">
                      {user?.displayName}
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>

              {/* <p className="text-red-600 lg:hidden">{user?.displayName}</p> */}
              <button
                onClick={userLogOut}
                className="button lg:btn-sm  bg-[#ff4848] ">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="button  bg-[#ff4848] ">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
