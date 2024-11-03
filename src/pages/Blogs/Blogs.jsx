import Navbar from "../Shared/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
// import img1 from "../../assets/slider11.png";
import { useEffect, useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Pageheader from "../../components/Pageheader/Pageheader";
import BlogDetails from "../BlogDetails/BlogDetails";
const Blogs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);
  return (
    <div className="overflow-hidden ">
      <Navbar></Navbar>
      <Pageheader heading={"Blog"}></Pageheader>
      {/* MAIN PART */}
      <div className=" flex flex-wrap md:flex-nowrap space-y-4 md:space-y-0  md:mx-auto px-5 md:px-0 gap-4  w-full my-12 md:w-[90%] lg:w-[75%]">
        <div data-aos="fade-right" className="flex w-full md:w-2/3">
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-3">
            {blogs.map((blog) => (
              <BlogDetails key={blog.id} blog={blog}></BlogDetails>
            ))}
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col gap-2 w-full  md:w-1/3">
          <div>
            <div className="card flex-col space-y-4 p-12 pt-0 rounded-none bg-base-100  shadow-xl">
              <h3>Recent Posts</h3>
              <hr className="h-[2px] w-full bg-red-600" />
              <p>Resume Writing Do and Do not</p>
              <hr />
              <p>Resume Writing Do and Do not</p>
              <hr />
              <p>How to plan your next career move with confidance</p>
              <hr />
              <p>Points To Consider Before Accepting A New Job Offer!</p>
              <hr />
            </div>
          </div>
          <div className="">
            <div className="card flex-col space-y-4 p-12 rounded-none bg-base-100  shadow-xl">
              <h3>Archives</h3>
              <hr className="h-[2px] w-full bg-red-600" />
              <p>August 2018</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
