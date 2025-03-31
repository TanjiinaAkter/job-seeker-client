import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";

const AdminProfile = () => {
  const { user } = useAuth();
  //console.log(user);

  const axiosSecure = useAxiosSecure();
  const { data: singleUser = {} } = useQuery({
    queryKey: ["singleUser", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/single?email=${user?.email}`);
      //console.log("in user profile page", res.data);
      return res.data;
    },
    enabled: !!user?.email, // Fetch only when email is available
  });
  //console.log("singleUser is", singleUser);

  return (
    <div className="md:px-20 px-3 md:py-4 flex flex-col md:flex-row justify-between gap-2 md:gap-6 items-center">
      <div className="card m-3 bg-base-100 w-full md:w-1/3  mx-auto shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={singleUser?.photo || user?.photoURL}
            alt="Shoes"
            className="rounded-full object-cover w-[10rem] h-[10rem]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            {singleUser?.name || user?.displayName}
          </h2>
          <p> {singleUser?.email || user?.email}</p>
        </div>
      </div>
      <div className="card bg-base-100 w-full md:w-2/3 mx-auto rounded-none shadow-xl">
        <div className="card-body md:flex md:justify-normal space-y-6">
          <div className="md:flex items-center justify-start gap-4 ">
            <h2 className="md:text-xl font-semibold">Full Name:</h2>
            <h2 className="md:text-xl text-gray-500">
              {singleUser?.name || user?.displayName}
            </h2>
          </div>
          <div className="md:flex items-center justify-start gap-4">
            <h2 className="md:text-xl font-semibold"> Email: </h2>
            <h2 className=" text-lg text-gray-500">
              {singleUser?.email || user?.email}
            </h2>
          </div>
          <div className="md:flex items-center justify-start gap-4">
            <h2 className="md:text-xl font-semibold"> Role :</h2>
            <h2 className=" text-lg text-gray-500">{singleUser?.role}</h2>
          </div>
          <div className="md:flex items-center justify-start gap-4">
            <h2 className="md:text-xl font-semibold"> Contact no. :</h2>
            <h2 className=" text-lg text-gray-500">{singleUser?.phone}</h2>
          </div>
          <div className="md:flex items-center justify-start gap-4">
            <h2 className="md:text-xl font-semibold"> Location :</h2>
            <h2 className=" text-lg text-gray-500">{singleUser?.location}</h2>
          </div>

          <div className="md:flex items-center justify-start gap-4">
            <h2 className="md:text-xl font-semibold"> Gender :</h2>
            <h2 className=" text-lg text-gray-500">{singleUser?.gender}</h2>
          </div>
          <div className="md:flex items-center justify-start gap-4">
            <h2 className="md:text-xl font-semibold">Skills:</h2>
            <h2 className=" text-lg text-gray-500">{singleUser?.skills}</h2>
          </div>

          <div className="card-actions">
            <Link to={`/dashboard/userprofileedit/${user?.email}`}>
              <button className="btn px-12 bg-black text-white rounded-sm">
                Edit profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
