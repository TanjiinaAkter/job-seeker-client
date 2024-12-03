import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSavedJobs = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: savedJobs = [], refetch } = useQuery({
    queryKey: [user?.email, "savedJobs"],
    enabled: !!user?.email,
    queryFn: async () => {
      const token = localStorage.getItem("access-token");

      console.log("useSavedJobs before request:", {
        user,
        token,
      });
      const res = await axiosSecure.get(`/savedjobs?email=${user?.email}`);
      //console.log(res.data);
      return res.data;
    },
  });
  return [savedJobs, refetch];
};

export default useSavedJobs;
