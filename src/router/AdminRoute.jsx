import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
// ekhane ki korsi je user ar admin na hole amra admin er route gulate jete dibo na, sathekintu router e private kore secure korte hobe
const AdminRoute = ({ children }) => {
  const location = useLocation();

  const { user, loader } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  if (loader || isAdminLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  // children e jete hole obosshoi user ar admin  hote hobe
  if (user && isAdmin) {
    return children;
  }
  if (isAdmin) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  return <Navigate to={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
