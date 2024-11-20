import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAlljobs = () => {
  const axiosSecure = useAxiosPublic();

  // USING TANSTACK QUERY
  const { data: alljobs = [], refetch } = useQuery({
    queryKey: ["alljobs"],
    queryFn: async () => {
      const res = await axiosSecure.get("/alljobs");
      //console.log('all data',res.data);
      return res.data;
    },
  });
  return [alljobs, refetch];
};

export default useAlljobs;
