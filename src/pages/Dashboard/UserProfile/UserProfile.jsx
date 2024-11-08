import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAllUsers from "../../../hooks/useAllUsers";

const UserProfile = () => {
  const { user } = useAuth();
  console.log(user);
  const [userProfileData] = useAllUsers();

  console.log(userProfileData);
  return (
    <div className="md:px-20 px-3 md:py-12 flex flex-col md:flex-row justify-between gap-2 md:gap-6 items-center">
      <div className="card m-3 bg-base-100 w-full md:w-1/3  mx-auto shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={userProfileData[0]?.photo || user?.photoURL}
            alt="Shoes"
            className="rounded-full object-cover w-[10rem] h-[10rem]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            {userProfileData[0]?.name || user?.displayName}
          </h2>
          <p> {userProfileData[0]?.email || user?.email}</p>
        </div>
      </div>
      <div className="card bg-base-100 w-full md:w-2/3 mx-auto rounded-none shadow-xl">
        <div className="card-body md:flex md:justify-normal  space-y-6">
          <div className="md:flex items-center justify-start gap-4 ">
            <h2 className="md:text-xl font-semibold">Full Name:</h2>
            <h2 className="md:text-xl text-gray-500">
              {userProfileData[0]?.name || user?.displayName}
            </h2>
          </div>
          <div className="md:flex items-center justify-start gap-4">
            <h2 className="md:text-xl font-semibold"> Email: </h2>
            <h2 className=" text-lg text-gray-500">
              {userProfileData[0]?.email || user?.email}
            </h2>
          </div>
          <div className="md:flex items-center justify-start gap-4">
            <h2 className="md:text-xl font-semibold"> Role :</h2>
            <h2 className=" text-lg text-gray-500">
              {userProfileData[0]?.role || user?.role}
            </h2>
          </div>
          <div className="md:flex items-center justify-start gap-4">
            <h2 className="md:text-xl font-semibold"> Contact no. :</h2>
            <h2 className=" text-lg text-gray-500">
              {userProfileData[0]?.phone || user?.phone}
            </h2>
          </div>
          <div className="md:flex items-center justify-start gap-4">
            <h2 className="md:text-xl font-semibold"> Location :</h2>
            <h2 className=" text-lg text-gray-500">
              {userProfileData[0]?.location || user?.location}
            </h2>
          </div>

          <div className="md:flex items-center justify-start gap-4">
            <h2 className="md:text-xl font-semibold"> Gender :</h2>
            <h2 className=" text-lg text-gray-500">
              {userProfileData[0]?.gender || user?.gender}
            </h2>
          </div>

          <div className="card-actions">
            <Link to={`userprofileedit/${user?.email}`}>
              <button className="btn px-12 bg-black text-white rounded-sm">
                Edit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
