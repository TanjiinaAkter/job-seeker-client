import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import loaderimg from "../assets/loader.gif";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const PrivateRouter = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();

  const location = useLocation();

  //console.log(location);
  if (loader || isAdminLoading) {
    return (
      <span className="mx-auto my-auto text-center w-full">
        <img src={loaderimg} alt="" />
      </span>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  //  from object er moddhe location ta send krotesi private route er
};

export default PrivateRouter;
