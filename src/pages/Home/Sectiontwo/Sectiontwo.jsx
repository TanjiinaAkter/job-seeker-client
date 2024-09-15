import job from "../../../assets/4171344-removebg-preview.png";
const Sectiontwo = () => {
    
  return (
    <div className="mx-auto w-full md:w-[90%] lg:w-[80%] mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col space-y-4 p-4">
          <h2 className="text-3xl font-semibold my-8 text-center md:text-left">
            Looking for to Resources?
          </h2>
          <p className="text-[1.1rem] text-gray-500 text-justify md:text-left">
            Searching for a new job can be challenging, but having the right
            resources at your fingertips can make all the difference. Whether
            you are polishing your resume, preparing for interviews,
          </p>
          <p className="text-[1.1rem] text-gray-500 pb-10  md:text-left text-justify">
            Our curated list resources is designed to support job seekers at
            every stage of the process, from writing effective cover letters to
            enhancing your online presence. With access to tools, tips, and
            expert advice
          </p>
          <div className="flex justify-start items-center">
            <button className="btn bg-red-600 rounded-sm text-white">
              Apply Now
            </button>
          </div>
        </div>
        <div className="w-full  flex justify-center items-center">
          <img src={job} className="lg:w-[80%] md:w-full object-cover hover:transform hover:scale-105 transition-all duration-300" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sectiontwo;
