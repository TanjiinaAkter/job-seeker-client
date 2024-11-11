import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAppliedjob = () => {
  const { user } = useAuth();
  
  console.log(user?.email)
  const axiosSecure = useAxiosSecure();
  const { data: applicationData = [], refetch } = useQuery({
    queryKey: ["applicationData", user?.email],
    queryFn: async () => {
      // jodi user thake then data show hobe
      if (user?.email) {
        try {
          const res = await axiosSecure.get(
            `/applications?email=${user?.email}`
          );
          console.log("Application Data:", res.data);
          return res.data;
        } catch (error) {
          console.error("Error fetching applications:", error);
          return [];
        }
      }
      // user na thakle empty array
      return [];
    },
    // user thakle e query cholbe only
    enabled: !!user?.email,
  });

  return [applicationData, refetch];
};

export default useAppliedjob;
