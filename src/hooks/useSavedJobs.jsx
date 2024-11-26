import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useSavedJobs = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: savedJobs = [], refetch } = useQuery({
    queryKey: ["savedJobs", user?.email],

    queryFn: async () => {
      const res = await axiosPublic.get(`/savedJobs?email=${user?.email}`);
      //console.log(res.data);
      return res.data;
    },
  });
  return [savedJobs, refetch];
};

export default useSavedJobs;
