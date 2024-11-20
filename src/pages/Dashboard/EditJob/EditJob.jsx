import { useForm } from "react-hook-form";
import UserPageHeader from "../../../components/UserPageHeader/UserPageHeader";
import useAuth from "../../../hooks/useAuth";
import { useLocation } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const EditJob = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [newSkills, setNewSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  console.log("dekhi newSkills value ki ki ache", newSkills);
  //initially current date thakbe
  const [newDeadLine, setNewDeadline] = useState(new Date());
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth()).padStart(2, "0");
    const year = String(date.getYear());
    return `${day}/${month}/${year}`;
  };
  console.log(formatDate(newDeadLine));
  const addSkill = () => {
    if (skillInput?.trim()) {
      setNewSkills([...newSkills, skillInput]);
      setSkillInput("");
    }
  };
  const removeSkill = (index) => {
    const getWithOutRemove = newSkills.filter((_, i) => i !== index);
    setNewSkills(getWithOutRemove);
  };

  const location = useLocation();
  const jobdetail = location?.state?.job;
  //   const { id } = job;
  console.log("state e kore job details peyechi", jobdetail,'job owner email',jobdetail.email);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("all data", data);
    
    axiosSecure.patch(`/alljobs/${jobdetail._id}`, data).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Job details edit saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  useEffect(() => {
    setValue("deadline", formatDate(newDeadLine));
  }, [newDeadLine, setValue]);
  // initially skills er man na thakle default ta dicchi, jehetu direct nite pare na value react hook form
  useEffect(() => {
    if (jobdetail?.skills) {
      setNewSkills(jobdetail.skills);
    }
  }, [jobdetail]);
  useEffect(() => {
    setValue("skills", newSkills);
  }, [setValue, newSkills, jobdetail]);

  return (
    <div>
      <div className="mb-12 mt-4">
        <UserPageHeader
          userheading={`Edit Job : ${jobdetail.jobtitle}`}></UserPageHeader>
      </div>
      <div className="overflow-hidden">
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
                  placeholder={user?.email}
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
                  defaultValue={jobdetail.jobtitle}
                  placeholder={jobdetail.jobtitle}
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
                  defaultValue={jobdetail.company}
                  placeholder={jobdetail.company}
                  {...register("company", { required: true })}
                  type="text"
                  className="input input-bordered focus:outline-none rounded-sm"
                />
                {errors.company && (
                  <span className="text-red-600">
                    Company name field is required
                  </span>
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
                  defaultValue={jobdetail.location}
                  className="input input-bordered  focus:outline-none rounded-sm"
                />
                {errors.location && (
                  <span className="text-red-600">
                    job location field is required
                  </span>
                )}
              </div>
              <div className="form-control  w-full flex-1">
                <label className="label">
                  <span className="label-text font-medium">Job Category</span>
                </label>
                <select
                  defaultValue={jobdetail.category}
                  className="select select-bordered rounded-sm focus:outline-none w-full max-w-full"
                  {...register("category", { required: true })}>
                  <option value="fulltime">Full time</option>
                  <option value="parttime">Part time</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="parttime">Remote</option>
                </select>
                {errors.category && (
                  <span className="text-red-600">
                    job category field is required
                  </span>
                )}
              </div>
            </div>
            {/* ROW-3*/}
            <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
              <div className="form-control  w-full flex-1">
                <label className="label">
                  <span className="label-text font-medium">Salary Range</span>
                </label>

                <select
                  defaultValue={jobdetail.salary}
                  className="select select-bordered rounded-sm focus:outline-none w-full max-w-full"
                  {...register("salary", { required: true })}>
                  <option value="$300">$300</option>
                  <option value="$350">$350</option>
                  <option value="$550">$550</option>
                  <option value="$1000">$1000</option>
                </select>
                {errors.salary && (
                  <span className="text-red-600">
                    job salary field is required
                  </span>
                )}
              </div>
              <div className="form-control w-full flex-1">
                {/* Job Applicants Number */}
                <label className="label">
                  <span className="label-text font-medium">
                    Job Applicants Number
                  </span>
                </label>
                <input
                  readOnly
                  className="input input-bordered focus:outline-none rounded-sm"
                  {...register("hiddenapplicationnumber", { required: true })}
                  type="number"
                  name="applicantsNumber"
                  defaultValue={jobdetail.hiddenapplicationnumber}
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
                  defaultValue={jobdetail.vacancy}
                  placeholder={jobdetail.vacancy}
                  id=""
                  {...register("vacancy", { required: true })}
                  className="input input-bordered focus:outline-none rounded-sm"
                />
                {errors.vacancy && (
                  <span className="text-red-600">
                    job vacancy field is required
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
                <input
                  {...register("date")}
                  defaultValue={jobdetail.date}
                  type="text"
                  className="input input-bordered focus:outline-none rounded-sm"
                  readOnly
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
                  selected={newDeadLine}
                  onChange={(date) => setNewDeadline(date)}
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
                  defaultValue={jobdetail.facilities}
                  placeholder={jobdetail.facilities}
                  className="input input-bordered focus:outline-none rounded-sm"
                />
                {errors.facilities && (
                  <span className="text-red-600">
                    job facilities field is required
                  </span>
                )}
              </div>
              {/* REQUIRED SKILLS*/}
              <div className="form-control w-full flex-1 ">
                <label className="label">
                  <span className="label-text font-medium">
                    Required Skills
                  </span>
                </label>
                <ul className="flex">
                  {newSkills.map((skill, index) => (
                    <li key={index}>
                      {skill}
                      <button onClick={() => removeSkill(index)}>
                        <ImCross className="text-[10px] mx-2 text-red-600" />
                      </button>
                    </li>
                  ))}
                </ul>
                <input
                  type="text"
                  defaultValue={jobdetail.skills}
                  className="input input-bordered focus:outline-none text-gray-400 rounded-sm"
                  // placeholder={jobdetail.skills}
                  onChange={(e) => setSkillInput(e.target.value)}
                />
                <button
                  onClick={addSkill}
                  className="btn flex justify-center items-center my-3">
                  Add Skill
                </button>
                {/* <ul className="flex">
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
                  placeholder={jobdetail.skills}
                  className="input input-bordered focus:outline-none rounded-sm"
                />
                <button type="button" onClick={addSkill}>
                  add skill
                </button> */}
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
                defaultValue={jobdetail.photo}
                placeholder={jobdetail.photo}
                className="input input-bordered focus:outline-none rounded-sm"
                required
              />
              {errors.photo && (
                <span className="text-red-600">
                  job photo field is required
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
                placeholder={jobdetail.description}
                defaultValue={jobdetail.description}
                className="input placeholder:text-[#374151] input-bordered focus:outline-none rounded-sm"
              />
              {errors.description && (
                <span className="text-red-600">
                  description field is required
                </span>
              )}
            </div>
            <input
              type="submit"
              value="Edit Job"
              className="btn bg-[#ff4848] text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditJob;
