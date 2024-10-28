import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import loaderimg from "../assets/loader.gif";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRouter = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loader) {
    return (
      <span className="mx-auto my-auto text-center w-fulln">
        <img src={loaderimg} alt="" />
      </span>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.state} to="/login" replace></Navigate>;
  //   return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRouter;
