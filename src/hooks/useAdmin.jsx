import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

// admin check korar jonno hook create korechi
const useAdmin = () => {
  const { user, loader } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loader && !!user?.email, 
    queryFn: async () => {
      // admin check korar jonnno route nicchi
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      console.log("admin kina", res.data);
      return res.data?.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
