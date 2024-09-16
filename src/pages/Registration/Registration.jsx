import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import "./Registration.css";
import Footer from "../Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { sendEmailVerification, updateProfile } from "firebase/auth";
// import img from "../../assets/update-user.png";
const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegistration = (e) => {
    e.preventDefault();
    console.log("all ok");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);
    // ============ USER CREATE USING AUTHENTICATION ===================//
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.error(error.message);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="">
      <Navbar></Navbar>
      <hr />
      <div className="reg-img  relative md:mb-[25rem]">
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
        <div className="md:w-[50%] reg-box ">
          {/*=================== REGISTRATION FORM ===================*/}
          <form
            onSubmit={handleRegistration}
            className="card-body bg-white rounded-none shadow-md">
            <h2 className="text-left font-semibold text-2xl text-[#ff4848]">
              Register Using your email
            </h2>
            <div className="form-control">
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered focus:outline-none rounded-sm "
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered rounded-sm focus:outline-none"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered rounded-sm focus:outline-none"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="photo URL"
                name="photo"
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
      <Footer></Footer>
    </div>
  );
};

export default Registration;
