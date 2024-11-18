import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAllUsers = () => {
  // const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      console.log(res.data);
      return res.data;
    },
  });
  return [allUsers, refetch];
};

export default useAllUsers;
