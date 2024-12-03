import { Link } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import useAuth from "../../../hooks/useAuth";

const NavTop = () => {
  const [isAdmin] = useAdmin();
  const { user } = useAuth();

  return (
    <div className="bg-transparent absolute z-10 top-0 left-[3%] right-[3%]">
      <div className="flex justify-end pb-2 pt-3 ">
        {user && !isAdmin && (
          <Link to="/">
            <button
              disabled
              className="px-6 py-1 hover:bg-white hover:transition-all hover:duration-500 font-semibold  hover:text-black bg-transparent  border-white border-2 text-white text-semibold text-lg">
              Post A Job
            </button>
          </Link>
        )}

        {isAdmin && (
          <Link to="/dashboard/addjob">
            <div className="tooltip" data-tip="hello">
              <button className="px-6 py-1 hover:bg-white hover:transition-all hover:duration-500 font-semibold hover:text-black bg-transparent border-white border-2 text-white text-semibold text-lg">
                Post A Job
              </button>
            </div>
          </Link>
        )}

        {!user && (
          <Link to="/">
            <button className="px-6 py-1 hover:bg-white hover:transition-all hover:duration-500 font-semibold  hover:text-black bg-transparent  border-white border-2 text-white text-semibold text-lg">
              Post A Job
            </button>
          </Link>
        )}
      </div>
      <hr className="h-[1px] w-full bg-white" />
    </div>
  );
};

export default NavTop;
