import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SearchCart = ({ jobs }) => {
  return (
    <div className="mx-auto max-w-6xl">
      <h3 className="text-2xl my-12">Search result from input search </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {jobs?.length > 0 ? (
          jobs.map((job) => (
            <div
              key={job._id}
              className="px-2 py-8 flex justify-between items-center bg-base-100 rounded-none shadow-xl">
              <div className="flex text-start">
                <img
                  className="w-14 h-14 rounded-full object-cover"
                  src={job.photo}
                  alt="Shoes"
                />
              </div>
              <div className="flex flex-col justify-start text-justify items-start">
                <h2 className="text-gray-600 text-lg font-bold">
                  {job.jobtitle}
                </h2>
                <p className="text-gray-500 text-[15px] font-medium">
                  {job.company}
                </p>
                <p className="text-gray-500 text-[15px] font-medium">
                  <span className="font-bold">{job?.vacancy}</span> Open
                  Positions
                </p>
              </div>
              <div className="justify-end flex flex-col items-end">
                <Link to={`/jobdetail/${job._id}`}>
                <button  className="text-black text-3xl">
                  <FaArrowCircleRight></FaArrowCircleRight>
                </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="grid col-span-full p-8 max-w-full text-center  shadow-lg w-full ">
            <h2 className="text-black font-semibold text-2xl">
              No search Job Found !!
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchCart;
