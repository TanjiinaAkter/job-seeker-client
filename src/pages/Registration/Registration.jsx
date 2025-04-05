import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import "./Registration.css";
import Footer from "../Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import NavTop from "../Home/NavTop/NavTop";
import useAxiosPublic from "../../hooks/useAxiosPublic";
// import img from "../../assets/update-user.png";
const Registration = () => {
  <Helmet>
    <title>Job seeker | Registration</title>
  </Helmet>;
  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();
  const { createUser, updateUserProfile, emailVerify, logOut } =
    useContext(AuthContext);
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
    // ============ USER CREATE USING AUTHENTICATION ===================//
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        updateUserProfile(name, photo) // No destructuring here, new user er first update hocche
          .then(() => {
            console.log("User profile updated successfully");
            const userInfo = {
              email,
              name,
              photo,
              role: "user",
            };
            console.log(userInfo);
            axiosPublic.post("/users", userInfo).then((res) => {
              console.log("user collection", res.data);
              if (res.data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title:
                    "user profile created successfully",
                  showConfirmButton: false,
                  timer: 6000,
                });
              }
            });
            navigate("/");
          })
          .catch((error) => {
            console.error(
              "Error during registration or profile update:",
              error
            );
          });

        emailVerify(email)
          .then(() => {
            console.log("result verification");
            Swal.fire({
              title: "Successfully Registered !!!",
              showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `,
              },
              hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `,
              },
            });
            logOut();
            navigate("/login");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(
          "This email is already registered. Try logging in instead.",
          error
        );
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "This email is already registered. Try logging in instead.",
          showConfirmButton: false,
          timer: 6000,
        });
      });
  };
  return (
    <div className="">
      <NavTop></NavTop>
      <Navbar></Navbar>
      <hr />
      <div className="reg-img  relative md:mb-[25rem]">
        <div className="flex w-1/2 mx-auto reg-img  items-center pt-[12rem] md:pt-32 justify-start flex-col space-y-4">
          <h2 className="text-xl  text-white md:text-3xl text-center font-semibold">
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
