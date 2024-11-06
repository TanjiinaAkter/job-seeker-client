import useAuth from "../../../hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="md:px-20 px-3 md:py-32 flex flex-col md:flex-row justify-between gap-2 md:gap-6 items-center">
      <div className="card m-3 bg-base-100 w-full md:w-1/3  mx-auto shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={user?.photoURL}
            alt="Shoes"
            className="rounded-full w-[10rem] h-[10rem]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user?.displayName}</h2>
          <p>{user?.email}</p>
        </div>
      </div>
      <div className="card bg-base-100 w-full md:w-2/3 mx-auto shadow-xl">
        <div className="card-body md:flex md:justify-normal  space-y-6">
          <div className="flex md:gap-12">
            <h2 className="md:text-xl font-semibold">Full Name:</h2>
            <h2 className="md:text-xl">{user?.displayName}</h2>
          </div>

          <div className="md:flex gap-12">
            <h2 className="md:text-xl font-semibold"> Email: </h2>
            <h2>{user?.email}</h2>
          </div>
          <div className="md:flex md:gap-12">
            <h2 className="md:text-xl font-semibold"> Contact no. :</h2>
            <h2>{user?.email}</h2>
          </div>
          <div className="md:flex gap-12">
            <h2 className="md:text-xl font-semibold"> Resume Uploaded :</h2>
            <h2>{user?.email}</h2>
          </div>

          <div className="card-actions">
            <button className="btn px-12 bg-black text-white rounded-sm">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
