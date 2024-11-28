import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
// import useAxiosPublic from "./useAxiosPublic";
import useAxiosSecure from "./useAxiosSecure";

const useSavedJobs = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: savedJobs = [], refetch } = useQuery({
    queryKey: ["savedJobs", user?.email],

    queryFn: async () => {
      const res = await axiosSecure.get(`/savedJobs?email=${user?.email}`);
      //console.log(res.data);
      return res.data;
    },
  });
  return [savedJobs, refetch];
};

export default useSavedJobs;
