import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAllUsers = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: userProfileData = [], refetch } = useQuery({
    queryKey: ["userProfileData", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?email=${user.email}`);
      console.log(res.data);
      // ekhane fetch kora result ta userprofile e giye set hocche
      return res.data;
    },
  });
  return [userProfileData, refetch];
};

export default useAllUsers;
