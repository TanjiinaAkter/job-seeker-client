import { useEffect } from "react";
import Pageheader from "../../components/Pageheader/Pageheader";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import NavTop from "../Home/NavTop/NavTop";
const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div>
      <NavTop></NavTop>
      <Navbar></Navbar>
      <Pageheader heading={"About Us"}></Pageheader>
      <div className="relative flex flex-col md:flex-row my-12 mx-auto max-w-6xl justify-between items-center gap-8">
        <div data-aos="fade-right" className="w-full md:w-1/2 px-6 space-y-5">
          <h1 className="text-xl font-bold text-red-600 ">
            What we are doing!
          </h1>
          <p className="text-3xl text-gray-700  font-semibold">
            32k Talented people are getting their dream jobs.
          </p>
          <p className="text-gray-500">
            Welcome to
            <span className="text-red-600 tracking-widest font-semibold">
              JOB SEEKER
            </span>
            , a platform dedicated to connecting talented individuals with job
            opportunities tailored to their skills and aspirations. We aim to
            simplify the job search process and empower job seekers by providing
            a comprehensive tool to find their next career move.
          </p>
          <p className="py-6 text-gray-500">
            Our mission is to bridge the gap between job seekers and employers,
            creating a seamless experience that allows users to discover new
            roles, enhance their professional profiles, and apply to jobs with
            confidence. We believe that every individual deserves a role that
            aligns with their passion and potential.
          </p>
          <button className="btn btn-wide  bg-red-600  text-white rounded-sm ">
            Post A Job
          </button>
        </div>
        <div data-aos="flip-right" className="p-4 w-full md:w-1/2">
          <img
            className="md:h-[35rem] object-cover"
            src="https://i.ibb.co.com/fxZz0pz/pexels-divinetechygirl-1181405.jpg"
            alt=""
          />
        </div>

        <div >
          <p className="absolute md:left-[45%] left-[40%]  bottom-0 px-4 py-8 md:px-4 md:py-16 bg-opacity-65 bg-black text-white rounded-lg text-center text-2xl font-semibold">
            Since 2000
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
