import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import { ImCross } from "react-icons/im";
import UserPageHeader from "../../../components/UserPageHeader/UserPageHeader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const Addjob = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  // use state e new date ditesi mane ajke jei tarikh  eitai amra date parameter hishbe pacchi
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [deadLine, setDeadline] = useState(new Date());
  const axiosSecure = useAxiosSecure();
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
  const { user } = useAuth();
  //console.log(user);

  const addSkill = () => {
    if (skillInput?.trim()) {
      setSkills([...skills, skillInput]);
      setSkillInput("");
    }
  };
  const removeSkill = (index) => {
    //mane jei index select kortesi oita bade notun array banai dibe
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };
  const onSubmit = (data) => {
    const forminfo = {
      name: data.name,
      email: data.email,
      jobtitle: data.jobtitle,
      company: data.company,
      category: data.category,
      salary: data.salary,
      photo: data.photo,
      date: formatDate(startDate),
      deadline: formatDate(deadLine),
      hiddenapplicationnumber: parseInt(data.hiddenapplicationnumber),
      description: data.description,
      location: data.location,
      vacancy: data.vacancy,
      skills,
      facilities: data.facilities,
    };
    console.log("form final info", forminfo);
   
      axiosSecure.post("/alljobs", forminfo).then((res) => {
        console.log("get information new", res.data);
      });
    
  };
  useEffect(() => {
    setValue("skills", skills);
  }, [skills, setValue]);
  useEffect(() => {
    // setvalue ditesi jeno amader date 2 ta registered hoye jay..icchemoto nam eikhane diyechi input e lagbe na date er khetre
    setValue("date", startDate);
  }, [startDate, setValue]);

  useEffect(() => {
    setValue("deadline", deadLine);
  }, [deadLine, setValue]);

  //console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className=" overflow-hidden">
      <div>
        <UserPageHeader userheading={"Add job"}></UserPageHeader>
      </div>
      <div data-aos="fade-left">
        <div className="card w-full mx-auto my-12 md:w-[76%] bg-base-100 rounded-sm border border-gray-200">
          <h3 className="text-2xl my-6 mx-8 md:text-2xl text-[#ff4848] font-semibold">
            Job Details__
          </h3>
          <hr className="bg-[#e73131] h-[1px] w-full" />
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* ROW-1 */}
            <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
              <div className="form-control w-full flex-1">
                <label className="label">
                  <span className="label-text font-medium">User Name</span>
                </label>
                <input
                  placeholder="name"
                  readOnly
                  defaultValue={user?.displayName}
                  {...register("name", { required: true })}
                  type="text"
                  className="input input-bordered focus:outline-none rounded-sm"
                />
                {errors.name && (
                  <span className="text-red-600">Name field is required</span>
                )}
              </div>

              <div className="form-control w-full flex-1">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  readOnly
                  defaultValue={user?.email}
                  placeholder="email"
                  className="input input-bordered focus:outline-none rounded-sm"
                />
                {errors.email && (
                  <span className="text-red-600">email field is required</span>
                )}
              </div>

              <div className="form-control w-full flex-1">
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
            </div>
            {/* ROW-2 */}
            <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
              <div className="form-control  w-full flex-1">
                <label className="label">
                  <span className="label-text font-medium">Company name</span>
                </label>
                <input
                  placeholder="company name"
                  {...register("company", { required: true })}
                  type="text"
                  className="input input-bordered focus:outline-none rounded-sm"
                />
                {errors.company && (
                  <span className="text-red-600">Name field is required</span>
                )}
              </div>
              <div className="form-control  w-full flex-1">
                <label className="label">
                  <span className="label-text font-medium">Job Location</span>
                </label>
                <input
                  {...register("location", { required: true })}
                  type="text"
                  placeholder="location"
                  className="input input-bordered focus:outline-none rounded-sm"
                />
                {errors.location && (
                  <span className="text-red-600">
                    job title field is required
                  </span>
                )}
              </div>
              <div className="form-control  w-full flex-1">
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
            </div>
            {/* ROW-3*/}
            <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
              <div className="form-control  w-full flex-1">
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
              <div className="form-control w-full flex-1">
                {/* Job Applicants Number */}
                <input
                  className="input input-bordered focus:outline-none rounded-sm"
                  {...register("hiddenapplicationnumber", { required: true })}
                  type="number"
                  name="applicantsNumber"
                  value="0"
                />
              </div>

              <div className="form-control  w-full flex-1">
                <label className="label">
                  <span className="label-text font-medium">Vacancy</span>
                </label>

                <input
                  type="number"
                  name="vacancy"
                  min={0}
                  placeholder="vacancy"
                  id=""
                  {...register("vacancy", { required: true })}
                  className="input input-bordered focus:outline-none rounded-sm"
                />
                {errors.vacancy && (
                  <span className="text-red-600">
                    job title field is required
                  </span>
                )}
              </div>
            </div>
            {/* ROW-4 (DatePicker)*/}
            <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
              {/* DatePicker-1 */}
              <div className="form-control w-full flex-1">
                <label className="label">
                  <span className="label-text font-medium">
                    Job Posting Date
                  </span>
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
              <div className="form-control w-full flex-1 ">
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
            </div>
            {/* ROW-5*/}
            <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
              <div className="form-control w-full flex-1">
                <label className="label">
                  <span className="label-text font-medium">Facilities</span>
                </label>
                <input
                  {...register("facilities", { required: true })}
                  type="text"
                  placeholder="facilities"
                  className="input input-bordered focus:outline-none rounded-sm"
                />
                {errors.facilities && (
                  <span className="text-red-600">
                    job facilities field is required
                  </span>
                )}
              </div>
              {/* SKILLS*/}
              <div className="form-control w-full flex-1 ">
                <label className="label">
                  <span className="label-text font-medium">
                    Required Skills
                  </span>
                </label>
                <ul className="flex">
                  {skills.map((skill, index) => (
                    <li key={index}>
                      {skill}

                      <button
                        className="px-2 text-rose-700 font-semibold"
                        type="button"
                        onClick={() => removeSkill(index)}>
                        <ImCross className="text-[10px]" />
                      </button>
                    </li>
                  ))}
                </ul>
                <input
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  placeholder=" add a skill"
                  className="input input-bordered focus:outline-none rounded-sm"
                />
                <button type="button" onClick={addSkill}>
                  add skill
                </button>
                {errors.skills && (
                  <span className="text-red-600">skills field is required</span>
                )}
              </div>
            </div>
            <div className="form-control  w-full flex-1">
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
            <div className="form-control w-full flex-1">
              <label className="label">
                <span className="label-text font-medium">Description</span>
              </label>
              <input
                {...register("description", { required: true })}
                type="text"
                placeholder="description"
                className="input input-bordered focus:outline-none rounded-sm"
              />
              {errors.description && (
                <span className="text-red-600">
                  description field is required
                </span>
              )}
            </div>
            <input
              type="submit"
              value="Add A Job"
              className="btn bg-[#ff4848] text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addjob;
