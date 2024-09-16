import { FaSearch } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className=" text-white mx-auto max-w-4xl p-4 my-12" data-aos="zoom-in">
      <div className="flex mt-12 md:mt-24 items-center justify-center flex-col space-y-4">
        <h2 className="text-3xl md:text-5xl text-center font-semibold">
          Find Your Future, Start Today
        </h2>
        <p className="text-center px-2 text-lg md:px-0">
          Connect talent with opportunity through a seamless, powerful job
          search platform
        </p>
      </div>
      {/* // justify-center */}
      <div className="flex items-center justify-center md:w-[80%] mx-auto space-x-2 my-12  ">
        <div className="flex relative items-center md:space-x-6  flex-1 ">
          <FaSearch className="absolute left-7 md:left-8   text-gray-400 mr-3 " />
          <input
            type="text"
            placeholder="Search here"
            className="input-sm w-full  md:input-md pl-[40px] md:pl-[32px] hover:outline-none focus:outline-none rounded-md text-white bg-transparent  border-2 border-[#ff4848] input-error "
          />
        </div>

        <button className="pl-2 btn-sm md:btn-md bg-[#ff4848] text-base md:text-lg rounded-md">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
