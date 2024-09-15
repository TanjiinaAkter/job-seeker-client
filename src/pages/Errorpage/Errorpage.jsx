import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";
import errorimg from "../../assets/Animation - 1726257420862.gif";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useEffect } from "react";
const Errorpage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="mx-auto w-full md:w-[70%] my-16">
      <div className="card bg-base-100  w-[60%] mx-auto rounded-none ">
        <div className="card-body">
          <img
            data-aos="fade-left"
            src={errorimg}
            style={{ height: "180px", width: "180px", alignSelf: "center" }}
            alt=""
          />
          <p className="text-center text-6xl text-red-600 font-semibold">404</p>
          <p className="text-center text-3xl text-red-600 font-semibold">
          Whoops! Page Not Found
          </p>
          <p className="text-center text-xl  font-semibold">
            We are sorry, the page you have looked for does not exist in our
            website! Maybe go to our home page or try to use a search?
          </p>
          <Link to="/">
            <div className="card-actions justify-center flex flex-row">
              <button className="btn btn-md bg-[#ff4848] text-white text-lg font-semibold rounded-none">
                <FaArrowLeftLong /> Back to Home
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
