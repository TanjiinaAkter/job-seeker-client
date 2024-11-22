import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSingleApplicantsData = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: singleApplicantsData = [], refetch } = useQuery({
    queryKey: ["singleApplicantsData", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/applications/single?email=${user?.email}`
      );
      console.log(res.data);
      return res.data;
    },
  });
  return [singleApplicantsData, refetch];
};

export default useSingleApplicantsData;
