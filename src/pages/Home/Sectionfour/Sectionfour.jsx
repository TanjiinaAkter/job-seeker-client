import register from "../../../assets/safeguarding.png";
import update from "../../../assets/update-user.png";
import bag from "../../../assets/job-search.png";
import job from "../../../assets/job-creation.png";

const Sectionfour = () => {
  return (
    <div className="mx-auto w-full md:w-[90%] lg:w-[80%] mb-12">
      <h2 className="text-[#ff4848] text-4xl mb-6 text-center font-semibold">
        How It Works
      </h2>
      <p className="text-center text-gray-500 font-medium">
        Effortlessly register, update your profile, search for your dream job,
        and apply with ease.
      </p>
      <div className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="card hover:bg-[#EDF5FF] transition-all hover:duration-500 hover:transform hover:scale-105  rounded-none shadow-xl">
            <div className="card-body ">
              <img
                className="h-20 w-20 object-cover self-center"
                src={register}
                alt=""
              />
              <h2 className="justify-center card-title">Register Account</h2>
              <p className="text-center">
                Create an account to start your job search journey.
              </p>
            </div>
          </div>
          <div className="card hover:bg-[#EDF5FF] transition-all hover:duration-500 hover:transform hover:scale-105  rounded-none shadow-xl">
            <div className="card-body ">
              <img
                className="h-20 w-20 object-cover self-center"
                src={update}
                alt=""
              />
              <h2 className="justify-center card-title">Update User</h2>
              <p className="text-center">
                Keep your profile up-to-date to attract employers.
              </p>
            </div>
          </div>
          <div className="card hover:bg-[#EDF5FF] transition-all hover:duration-500 hover:transform hover:scale-105  rounded-none shadow-xl">
            <div className="card-body ">
              <img
                className="h-20 w-20 object-cover self-center"
                src={bag}
                alt=""
              />
              <h2 className="justify-center card-title">Search Dream Job</h2>
              <p className="text-center">
                Find your ideal job from a wide range of listings
              </p>
            </div>
          </div>
          <div className="card hover:bg-[#EDF5FF] transition-all hover:duration-500 hover:transform hover:scale-105  rounded-none shadow-xl">
            <div className="card-body ">
              <img
                className="h-20 w-20 object-cover self-center"
                src={job}
                alt=""
              />
              <h2 className="justify-center card-title">Apply For Job</h2>
              <p className="text-center">
                Easily apply for jobs that match your skills and interests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectionfour;
