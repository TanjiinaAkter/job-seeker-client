import "./Sectionone.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Sectionone = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="section-img  z-0 relative mb-8">
      <div data-aos ='fade-left' className="flex text-center w-[90%] space-y-4 md:w-2/3 mx-auto my-auto h-full flex-col justify-center items-center text-white z-10 overflow-hidden">
        <h2 className="text-3xl md:text-3xl font-semibold">
          Your Dream Jobs Are Waiting
        </h2>
        <p className=" text-base md:text-2xl font-semibold">
          Over 1 million interactions, 50,000 success stories Make yours now.
        </p>
        <div className="flex justify-between items-center gap-5">
          <button className="btn bg-transparent  border-white btn-md text-white rounded-sm">
            Search jobs
          </button>
          <button className="btn bg-red-600 btn-md text-white rounded-sm border-none">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sectionone;
