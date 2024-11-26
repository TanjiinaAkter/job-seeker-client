import { Link, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import Footer from "../Shared/Footer/Footer";
import NavTop from "../Home/NavTop/NavTop";
const SingleBlog = () => {
  const [content, setContent] = useState(null);
  const { id } = useParams();
  const intId = parseInt(id); //\blogs.json\3
  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const getBlog = data.find((blog) => blog.id === intId);
        if (getBlog) {
          setContent(getBlog);
        }
      })
      .catch((error) => console.error("Error fetching data:", error)); // Handle errors
  }, [intId]);

  console.log(content);

  return (
    <div>
      {/*       
      <Navbar></Navbar> */}
      {content ? (
        <div className="mx-auto   w-full max-w-7xl p-4 md:p-0 ">
          <div>
            <Link to='/blogs'>
              <button className="text-white bg-black px-5 py-2 mt-5 font-semibold hover:bg-red-600 ">
                Go back
              </button>
            </Link>
          </div>
          <h1 className="text-center text-black my-3 md:my-12 text-3xl md:text-6xl font-semibold">
            Blog Details
          </h1>
          <p className="md:text-center text-gray-500 text-lg text-justify w-full md:w-[50%]  mx-auto my-4 font-semibold">
            {content.title}
          </p>
          <img
            className="mx-auto md:w-full object-cover md:h-[28rem] mt-12"
            src={content.thumbnail_url}
            alt=""
          />
          <div className="flex justify-between  items-center gap-3 my-6">
            <div className=" flex  items-center ">
              <img
                className="w-[3rem] h-[3rem] rounded-full object-cover "
                src={content.author_img}
                alt=""
              />
              <h2 className="pl-2">by {content.author}</h2>
            </div>
            <div className=" flex  items-center justify-end ">
              <SlCalender />
              <h2>{content.date}</h2>
            </div>
          </div>
          <p className="text-lg font-semibold text-gray-500 mb-4">
            {content.content_snippet}
          </p>
          <p className="font-semibold mb-4">{content.full_content}</p>
        </div>
      ) : (
        <p className="text-center my-4 font-semibold">Loading...</p>
      )}
      <Footer></Footer>
    </div>
  );
};

export default SingleBlog;
