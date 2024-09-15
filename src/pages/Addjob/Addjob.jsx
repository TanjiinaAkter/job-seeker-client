import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import "./Addjob.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "../Shared/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
const Addjob = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className=" ">
      <Navbar></Navbar>
      <div className="addjob-img  bg-scroll space-y-28 relative">
        <div className="flex justify-center items-center py-24">
          <hr className="h-[2px] mb-12 bg-[#ff4848] w-[6%] border-none" />
          <p data-aos="fade-left" className="text-white font-semibold text-3xl md:text-5xl text-center">
            Add A Job
          </p>
          <hr className="h-[2px] mt-14 bg-[#ff4848] w-[6%] border-none" />
        </div>
      </div>
      <div data-aos="fade-left">
        <div className="card w-full mx-auto my-12 md:w-[76%] bg-base-100 rounded-sm border border-gray-200">
          <form className="card-body">
            <h3 className="text-lg md:text-2xl text-[#ff4848] font-semibold">
              Job Details
            </h3>
            <hr className="bg-[#e73131] h-[1px] w-full" />
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">User Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered focus:outline-none rounded-sm"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered focus:outline-none rounded-sm"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Job Title</span>
              </label>
              <input
                type="text"
                placeholder="title"
                className="input input-bordered focus:outline-none rounded-sm"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Job Category</span>
              </label>
              <select className="select select-bordered rounded-sm focus:outline-none w-full max-w-full">
                <option disabled selected>
                  select job type
                </option>
                <option>Full time</option>
                <option>Part time</option>
                <option>Hybrid</option>
                <option>Remote</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Salary Range</span>
              </label>
              <select className="select select-bordered focus:outline-none rounded-sm w-full max-w-full">
                <option disabled selected>
                  select range
                </option>
                <option>$300</option>
                <option>$350</option>
                <option>$550</option>
                <option>$1000</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Picture URL</span>
              </label>
              <input
                type="text"
                placeholder="picture URL"
                className="input input-bordered focus:outline-none rounded-sm"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Job Posting Date</span>
              </label>
              <input
                type="date"
                placeholder="date"
                className="input input-bordered focus:outline-none rounded-sm"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">
                  Application Deadline
                </span>
              </label>
              <DatePicker
                selected={startDate}
                className="focus:outline-none rounded-sm input w-full input-bordered"
                onChange={(date) => setStartDate(date)}
                dateFormat="MM/dd/yyyy"
                placeholderText="Select a date"
                id="date"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">
                  Job Applicants Number
                </span>
              </label>
              <input
                type="number"
                defaultValue={0}
                className="focus:outline-none rounded-sm input w-full input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                value="Add A Job"
                className="btn bg-[#ff4848] text-white"
              />
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Addjob;
