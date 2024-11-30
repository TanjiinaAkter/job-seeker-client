import { useForm } from "react-hook-form";
import useAlljobs from "../../../hooks/useAlljobs";

// import { useState } from "react";

const SearchResult = ({ setFilteredJobs, setInsidePutSearched }) => {
  // only form er kaj korechi ekhane
  const [alljobs] = useAlljobs();

  console.log(alljobs);
  // console.log(insidePutSearched);
  // console.log(filteredJobs);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { jobTitle, jobCategory, jobLocation } = data;
    console.log("here is", data);
    const matchingJobs = alljobs.filter((job) => {
      return (
        job.jobtitle.toLowerCase().includes(jobTitle.toLowerCase()) &&
        job.category.toLowerCase().includes(jobCategory.toLowerCase()) &&
        job?.location?.toLowerCase().includes(jobLocation?.toLowerCase())
      );
    });
    setFilteredJobs(matchingJobs);
    // serach e click korle true kortesi jate no seach text ta initially na thake, true kora mane search e click hoise
    setInsidePutSearched(true);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex relative w-full flex-col gap-3 p-4 md:p-10 my-12 lg:flex-row  bg-[#ffffff24] text-white">
        <div className="form-control">
          <input
            {...register("jobTitle", { required: true })}
            type="text"
            placeholder="keyword(Job title)"
            className="input input-bordered  text-gray-700 rounded-sm border-none "
          />
          {errors.jobTitle && <span>This field is required</span>}
        </div>

        <div className="form-control">
          <input
            {...register("jobLocation", { required: true })}
            type="text"
            placeholder="Job Location"
            className="input input-bordered  text-gray-700 rounded-sm border-none "
          />
          {errors.jobLocation && <span>This field is required</span>}
        </div>
        <div className="relative form-control w-full">
          <select
            {...register("jobCategory", { required: true })}
            className="select  text-gray-700 rounded-sm border-none w-full ">
            <option disabled selected>
              select Category
            </option>
            <option value={"fulltime"}>Full Time</option>
            <option value={"parttime"}>Part Time</option>
            <option value={"hybrid"}>Hybrid</option>
            <option value={"remote"}>Remote</option>
          </select>
          {errors.jobCategory && <span>This field is required</span>}
        </div>

        <div className="form-control">
          <input
            className="btn border-none rounded-sm pl-4 btn-sm md:btn-md  bg-red-600 text-white hover:bg-black"
            type="submit"
            value="Search"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchResult;
