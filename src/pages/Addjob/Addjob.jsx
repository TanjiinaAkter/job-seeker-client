import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "../Shared/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Pageheader from "../../components/Pageheader/Pageheader";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const Addjob = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  // use state e new date ditesi mane ajke jei tarikh  eitai amra date parameter hishbe pacchi
  const [startDate, setStartDate] = useState(new Date());
  const [deadLine, setDeadline] = useState(new Date());
  const axiosPublic = useAxiosPublic();
  //REACT HOOK FORM
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  // amra date er data k nijeer moto kore pacchi sob na niye
  const formatDate = (date) => {
    // day te 2 number er hoy tai..ar day jodi 5 hoy age 05 dibe
    const day = String(date.getDate()).padStart(2, "0");
    // month e 0-11 index e 12 mash hishab kora hoy, so +1 kore 1,2 eivabe dibe
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());
    return `${day}/${month}/${year}`;
  };
  const onSubmit = (data) => {
    // console.log({
    //   ...data,
    //   date: formatDate(startDate),
    //   deadline: formatDate(deadLine),
    // });
    // console.log("this is data", data);
    const forminfo = {
      name: data.name,
      email: data.email,
      jobtitle: data.jobtitle,
      category: data.category,
      salary: data.salary,
      photo: data.photo,
      date: formatDate(startDate),
      deadline: formatDate(deadLine),
      hiddenapplicationnumber: parseInt(data.hiddenapplicationnumber),
    };
    console.log("form final info", forminfo);
    axiosPublic.post("/alljobs", forminfo).then((res) => {
      console.log(res.data);
    });
  };

  useEffect(() => {
    // setvalue ditesi jeno amader date 2 ta registered hoye jay
    setValue("date", startDate);
  }, [startDate, setValue]);

  useEffect(() => {
    setValue("deadline", deadLine);
  }, [deadLine, setValue]);

  //console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className=" ">
      <Navbar></Navbar>

      <Pageheader heading={"Add A Job"}></Pageheader>
      <div data-aos="fade-left">
        <div className="card w-full mx-auto my-12 md:w-[76%] bg-base-100 rounded-sm border border-gray-200">
          <h3 className="text-lg md:text-2xl text-[#ff4848] font-semibold">
            Job Details
          </h3>
          <hr className="bg-[#e73131] h-[1px] w-full" />
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">User Name</span>
              </label>
              <input
                placeholder="name"
                {...register("name", { required: true })}
                type="text"
                className="input input-bordered focus:outline-none rounded-sm"
              />
              {errors.name && (
                <span className="text-red-600">Name field is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                className="input input-bordered focus:outline-none rounded-sm"
              />
              {errors.email && (
                <span className="text-red-600">email field is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Job Title</span>
              </label>
              <input
                {...register("jobtitle", { required: true })}
                type="text"
                placeholder="title"
                className="input input-bordered focus:outline-none rounded-sm"
              />
              {errors.jobtitle && (
                <span className="text-red-600">
                  job title field is required
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Job Category</span>
              </label>
              <select
                className="select select-bordered rounded-sm focus:outline-none w-full max-w-full"
                {...register("category", { required: true })}>
                <option value="fulltime">Full time</option>
                <option value="parttime">Part time</option>
                <option value="hybrid">Hybrid</option>
                <option value="parttime">Remote</option>
              </select>
              {errors.jobtitle && (
                <span className="text-red-600">
                  job title field is required
                </span>
              )}
              {/* <select className="select select-bordered rounded-sm focus:outline-none w-full max-w-full">
                <option disabled selected>
                  select job type
                </option>
                <option>Full time</option>
                <option>Part time</option>
                <option>Hybrid</option>
                <option>Remote</option>
              </select> */}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Salary Range</span>
              </label>

              <select
                className="select select-bordered rounded-sm focus:outline-none w-full max-w-full"
                {...register("salary", { required: true })}>
                <option value="$300">$300</option>
                <option value="$350">$350</option>
                <option value="$550">$550</option>
                <option value="$1000">$1000</option>
              </select>
              {errors.salary && (
                <span className="text-red-600">
                  job title field is required
                </span>
              )}

              {/* <select className="select select-bordered focus:outline-none rounded-sm w-full max-w-full">
                <option disabled selected>
                  select range
                </option>
                <option>$300</option>
                <option>$350</option>
                <option>$550</option>
                <option>$1000</option>
              </select> */}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Picture URL</span>
              </label>
              <input
                {...register("photo", { required: true })}
                type="text"
                placeholder="picture URL"
                className="input input-bordered focus:outline-none rounded-sm"
                required
              />
              {errors.photo && (
                <span className="text-red-600">
                  job title field is required
                </span>
              )}
            </div>
            {/* DatePicker-1 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Job Posting Date</span>
              </label>
              <DatePicker
                className="input-bordered border  rounded-sm focus:outline-none w-full max-w-full"
                showIcon
                //that means if startdate is 12/12/21 then it will be shown in input box
                selected={startDate}
                //when a user clicks on a date in the date picker, that date is passed to the onChange function, which then updates the deadLine state with the selected date. This keeps your component state in sync with the user's selection.
                onChange={(date) => setStartDate(date)}
              />
            </div>
            {/* DatePicker-2 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">
                  Application Deadline
                </span>
              </label>
              <DatePicker
                className="input-bordered border  rounded-sm focus:outline-none w-full max-w-full"
                showIcon
                selected={deadLine}
                onChange={(date) => setDeadline(date)}
              />
            </div>

            <div className="form-control">
              {/* Job Applicants Number */}
              <input
                {...register("hiddenapplicationnumber", { required: true })}
                type="hidden"
                name="applicantsNumber"
                value="0"
              />
            </div>

            <input
              type="submit"
              value="Add A Job"
              className="btn bg-[#ff4848] text-white"
            />
            {/* <input
                type="submit"
                value="Add A Job"
                className="btn bg-[#ff4848] text-white"
              /> */}
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Addjob;
