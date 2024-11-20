import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
// import useAuth from "./useAuth";

const useAppliedjob = () => {
  // const { user } = useAuth();

  // console.log(user?.email);
  const axiosSecure = useAxiosSecure();
  const { data: applicationData = [], refetch } = useQuery({
    queryKey: ["applicationData"],
    queryFn: async () => {
      // jodi user thake then data show hobe

      try {
        const res = await axiosSecure.get("/applications");
        //console.log("Application Data:", res.data);
        return res.data;
      } catch (error) {
        console.error("Error fetching applications:", error);
        return [];
      }
    },
  });

  return [applicationData, refetch];
};

export default useAppliedjob;
