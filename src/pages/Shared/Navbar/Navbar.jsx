import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import img from "../../../assets/Untitled.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useAdmin from "../../../hooks/useAdmin";
const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  // console.log("admin value",isAdmin)
  // const location = useLocation();
  //console.log(location);
  // const isHomeRoute = location.pathname === "/";
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
              : " text-white font-semibold text-lg "
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
              : " text-white font-semibold text-lg "
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
              : " text-white font-semibold text-lg "
          }>
          About us
        </NavLink>
      </li>
      {isAdmin && (
        <li className="text-white font-semibold   text-lg">
          <NavLink to={`/dashboard/adminprofile/${user?.email}`}>
            admin Dashboard
          </NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li className="text-white font-semibold   text-lg">
          <NavLink to={`/dashboard/userprofile/${user?.email}`}>
            user Dashboard
          </NavLink>
        </li>
      )}

      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? "text-[#ff4848] font-semibold underline  text-lg"
              : " text-white font-semibold text-lg "
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
    //bg-white
    <div className="mx-auto absolute top-[8%] md:top-7 left-0 right-0 z-50  max-w-[95%] bg-transparent">
      <div className=" flex flex-col md:flex-row navbar pt-[2.4rem]  ">
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
        <div className="md:navbar-end space-y-2 sm:space-y-0 lg:space-x-4 mt-3 md:mt-0 md:pl-4 ">
          { isAdmin ? (
            <div className="flex flex-row space-x-2 items-center justify-center ">
           <div className=" flex justify-between items-center gap-3 z-10 ">
                <Link to={`/dashboard/adminprofile/${user?.email}`}>
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
                 <p className="absolute text-lime-400 right-[10%] font-bold bg-red  top-24 ">
                      {user?.displayName}
                    </p>
                  </div>
                ) : (
                  ""
                )}
                <button
                  onClick={userLogOut}
                  className="button lg:btn-sm  bg-[#ff4848] ">
                  Logout
                </button>
              </div>

              {/* <p className="text-red-600 lg:hidden">{user?.displayName}</p> */}
            </div>
          ) : user?.email?  (
            <div className="flex flex-row space-x-2 items-center justify-center ">
              <div className=" flex justify-between items-center gap-3 z-10 ">
                <Link to={`/dashboard/userprofile/${user?.email}`}>
                  <img
                    onMouseEnter={handlehover}
                    onMouseLeave={handleNoHover}
                    className="object-cover  w-12 h-12 hover:border hover:border-white border-2 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                </Link>
                {Hovered ? (
                  <div>
                    <p className="absolute text-lime-400 right-[10%] font-bold bg-red  top-24 ">
                      {user?.displayName}
                    </p>
                  </div>
                ) : (
                  ""
                )}
                <button
                  onClick={userLogOut}
                  className="button lg:btn-sm  bg-[#ff4848] ">
                  Logout
                </button>
              </div>

              {/* <p className="text-red-600 lg:hidden">{user?.displayName}</p> */}
            </div>
          ) : (
            <Link
              to="/login"
              className="text-white px-8 text-lg py-2 text-semibold rounded-none  bg-[#ff4848] ">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
