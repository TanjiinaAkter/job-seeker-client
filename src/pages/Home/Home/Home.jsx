import { Helmet } from "react-helmet-async";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Reacttab from "../Reacttab/Reacttab";
import Sectionfour from "../Sectionfour/Sectionfour";
import Sectionone from "../Sectionone/Sectionone";
import Sectiontrhee from "../Sectiontrhee/Sectiontrhee";
import Sectiontwo from "../Sectiontwo/Sectiontwo";
import img1 from "/assets/pexels-artempodrez-5716004.jpg";
import CountUp from "react-countup";
import img2 from "/assets/pexels-silverkblack-23496919.jpg";
import img4 from "/assets/pexels-fauxels-3184405.jpg";
import "./Home.css";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import NavTop from "../NavTop/NavTop";
import { useLocation } from "react-router-dom";
import useAlljobs from "../../../hooks/useAlljobs";
import "aos/dist/aos.css";
import SearchResult from "../SearchResult/SearchResult";
import SearchCart from "../SearchCart/SearchCart";
import { useState } from "react";
const Home = () => {
  const location = useLocation();
  console.log(location.pathname);
  // const isHome = location.pathname === "/";
  const [alljobs] = useAlljobs();
  const [filteredJobs, setFilteredJobs] = useState([]);
  return (
    <div className="overflow-hidden w-full mx-auto">
      <Helmet>
        <title>Job seeker | Home</title>
      </Helmet>

      <div className="relative md:overflow-hidden  mb-12 max-h-screen">
        {/* {isHome && <NavTop></NavTop>} */}
        <NavTop></NavTop>
        <Navbar></Navbar>

        <div className="design max-h-screen mt-16 md:mt-16 text-center md:text-justify px-2 w-full md:w-[75%] z-20 absolute text-white">
          <div className="mt-24 md:mt-0">
            <h2 className="text-white text-2xl font-bold md:font-medium md:text-6xl ">
              <span className="text-red-600 font-bold md:font-semibold">
                <CountUp delay={2} end={alljobs.length} />+
              </span>
              Browse Jobs
            </h2>
            <p className="my-2 text-base md:text-xl">
              Find Jobs, Employment & Career Opportunities
            </p>
          </div>
          <SearchResult setFilteredJobs={setFilteredJobs}></SearchResult>
        </div>
        <Zoom
          indicators
          className=""
          onChange={function noRefCheck() {}}
          onStartChange={function noRefCheck() {}}
          scale={0.7}>
          <div className="h-[37rem] md:h-[55rem] ">
            <img
              className="object-cover brightness-[33%]"
              alt="Slide Image"
              src={img1}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
            <div className="absolute inset-0 bg-[#34347266] "></div>
          </div>
          <div className="h-[37rem] md:h-[55rem]">
            <img
              className="object-cover brightness-[39%]"
              alt="Slide Image"
              src={img2}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
            <div className="absolute inset-0 bg-[#34347266] "></div>
          </div>
          <div className="h-[37rem] md:h-[55rem]">
            <img
              className="object-cover brightness-[49%]"
              alt="Slide Image"
              src={img4}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
            <div className="absolute inset-0 bg-[#34347266]"></div>
          </div>
        </Zoom>
      </div>
      <SearchCart jobs={filteredJobs}></SearchCart>
      <Reacttab></Reacttab>
      <Sectionone></Sectionone>
      <Sectiontwo></Sectiontwo>
      <Sectiontrhee></Sectiontrhee>
      <Sectionfour></Sectionfour>
      <Footer></Footer>
    </div>
  );
};

export default Home;
