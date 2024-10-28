import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import Footer from "../Shared/Footer/Footer";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
  const [open, setOpen] = useState(false);
  const { login, logOut,resetPassword } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(form, email, password);
    // ============ USER LOGIN USING AUTHENTICATION ===================//
    login(email, password)
      .then((result) => {
        //console.log(result)
        if (result.user.emailVerified) {
          navigate("/");
        } else {
          logOut();
        }
      })

      .catch((error) => {
        console.error(error);
      });
  };
  const emailRef = useRef(null);
  console.log(emailRef);
  const handleReset = () => {
    const email = emailRef.current.value;
    console.log("yyyyyyyyyy", email);
    resetPassword(email)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="">
      <Navbar></Navbar>
      <hr />
      <div className="reg-img  relative md:mb-[25rem]">
        <div className="flex w-1/2 mx-auto reg-img  items-center pt-12 justify-start flex-col space-y-4">
          <h2 className="text-xl  text-white md:text-xl text-center font-semibold">
            Account Login
          </h2>
          <hr className="h-[2px] w-[30px] md:w-[50px] border-none  bg-red-600" />
          <p className="text-center text-white px-2 text-lg md:px-0">
            Join us to unlock personalized job recommendations, track
            applications, and build a standout profile.
          </p>
        </div>
        <div className=" md:w-[50%] reg-box ">
          {/*=================== LOGIN FORM ===================*/}
          <form
            onSubmit={handleLogin}
            className="card-body bg-white rounded-none shadow-md">
            <h2 className="text-left font-semibold text-2xl text-[#ff4848]">
              Login Using your email
            </h2>

            <div className="form-control">
              <input
                type="email"
                placeholder="email"
                name="email"
                ref={emailRef}
                className="input input-bordered rounded-sm focus:outline-none"
                required
              />
            </div>
            <div className="form-control relative">
              <input
                type={open ? "text" : "password"}
                placeholder="password"
                name="password"
                className="input input-bordered rounded-sm focus:outline-none"
                required
              />

              <span onClick={() => setOpen(!open)}>
                {open ? (
                  <FaEye className="text-2xl absolute text-center top-3 right-3" />
                ) : (
                  <FaEyeSlash className="text-2xl absolute text-center top-3 right-3" />
                )}
              </span>
            </div>

            <p onClick={handleReset} className="text-[#ff4848] underline">
              Forget Password
            </p>
            <div className="form-control mt-6">
              <button className="btn text-white text-lg  bg-[#ff4848]">
                Login
              </button>
            </div>
            <Link to="/registration">
              Dont you have account?
              <span className="text-[#ff4848] font-semibold ">Sign up</span>
              now
            </Link>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
