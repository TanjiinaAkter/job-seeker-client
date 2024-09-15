import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import "./Registration.css";
const Registration = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <hr />
      <div className="reg-img  relative">
        <div className="flex w-1/2 mx-auto reg-img  items-center pt-12 justify-start flex-col space-y-4">
          <h2 className="text-xl  text-white md:text-xl text-center font-semibold">
            Account Register
          </h2>
          <hr className="h-[2px] w-[30px] md:w-[50px] border-none  bg-red-600" />
          <p className="text-center text-white px-2 text-lg md:px-0">
            Join us to unlock personalized job recommendations, track
            applications, and build a standout profile.
          </p>
        </div>
        <div className=" md:w-[50%] reg-box ">
          <form className="card-body bg-white rounded-none shadow-md">
            <h2 className="text-left font-semibold text-2xl text-[#ff4848]">
              Register Using your email
            </h2>
            <div className="form-control">
              <input
                type="text"
                placeholder="name"
                className="input input-bordered focus:outline-none rounded-sm "
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="email"
                className="input input-bordered rounded-sm focus:outline-none"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="password"
                className="input input-bordered rounded-sm focus:outline-none"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="photo URL"
                className="input input-bordered rounded-sm focus:outline-none"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white text-lg  bg-[#ff4848]">
                Register
              </button>
            </div>
            <Link to="/login">
              Already have account?{" "}
              <span className="text-[#ff4848] font-semibold "> Login</span> now
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
