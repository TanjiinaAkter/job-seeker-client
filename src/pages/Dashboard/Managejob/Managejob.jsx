import { FaEye, FaRegEdit } from "react-icons/fa";
import UserPageHeader from "../../../components/UserPageHeader/UserPageHeader";
import { MdDelete } from "react-icons/md";
import useAlljobs from "../../../hooks/useAlljobs";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { MdScheduleSend } from "react-icons/md";
import { useForm } from "react-hook-form";
import { AiOutlineCalendar } from "react-icons/ai";

const Managejob = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  const [alljobs, refetch] = useAlljobs();
  const [jobLocation, setJobLocation] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const { user } = useAuth();
  const [selectedJob, setSelectedJob] = useState(null);
  console.log(selectedJob);
  const axiosSecure = useAxiosSecure();
  // job er details ta niye nicchi modal open er sathe sathe
  const openModal = (job) => {
    setSelectedJob(job);
    document.getElementById("my_modal_1").showModal();
    if (job) {
      setValue("email", job.email || "");
      setValue("jobid", job._id || "");
      setValue("name", job.name || "");
      setValue("jobtitle", job.jobtitle || "");
      setValue("jobLocation", job.jobLocation || "");
    }
  };
  // close korle details abar null kore dicchi
  const closeModal = () => {
    reset();
    setSelectedJob(null);

    document.getElementById("my_modal_1").close();
  };
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("form data is here", data);
    axiosSecure
      .post("/interviewschedule", {
        email: data.email,
        jobid: data.jobid,
        jobtitle: data.jobtitle,
        jobLocation: data.jobLocation,
        date: data.date,
        time: data.time,
        name: data.name,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `schedule for ${data.jobtitle} has been saved`,
            showConfirmButton: false,
            timer: 1500,
          });
        }

        // reset();
      });
  };
  useEffect(() => {
    if (selectedJob) {
      setValue("email", selectedJob.email);
      setValue("jobid", selectedJob._id);
      setValue("jobtitle", selectedJob.jobtitle);
      setValue("name", selectedJob.name);
    }
  }, [selectedJob, setValue]);
  useEffect(() => {
    setValue("jobLocation", jobLocation);
  }, [setValue, jobLocation]);
  useEffect(() => {
    setValue("date", date);
  }, [setValue, date]);
  useEffect(() => {
    setValue("time", time);
  }, [setValue, time]);
  //console.log(alljobs);

  const handleDelete = (job) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/alljobs/${job._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount === 1) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const permissionDenied = () => {
    return Swal.fire("Sorry, you can only edit jobs that you have posted!");
  };
  const permissionDeniedtoDelete = () => {
    return Swal.fire("Sorry, you can only delete jobs that you have posted!");
  };
  const permissionDeniedtoInterview = () => {
    return Swal.fire(
      "Sorry, you can only Scheduled an interview that you have posted!"
    );
  };

  return (
    <div>
      <div className="mb-12 mt-4">
        <UserPageHeader
          userheading={`Manage Job : ${alljobs.length}`}></UserPageHeader>
      </div>
      <div
        data-aos="fade-left"
        className="w-[90%] md:max-w-5xl mx-auto card shadow-xl">
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead className="text-[1rem] ">
              <tr>
                <th>#</th>
                <th>Job Title</th>
                <th>Company</th>
                <th>Created By </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {alljobs.map((job, index) => (
                <tr key={job._id}>
                  <th>{index + 1}</th>
                  <td>{job.jobtitle}</td>
                  <td>{job.company}</td>

                  <td>{job.email}</td>
                  <td>
                    <div className="flex justify-items-center gap-3  items-center">
                      <Link to={`/jobdetail/${job._id}`}>
                        <FaEye className="text-4xl text-green-500 hover:scale-110 hover:bg-gray-300 p-2 rounded-md transition-all duration-500"></FaEye>
                      </Link>

                      {job.email === user?.email ? (
                        <Link to="/dashboard/editjob" state={{ job: job }}>
                          <FaRegEdit className="text-4xl hover:scale-110 hover:bg-gray-300 p-2 rounded-md transition-all duration-500 text-orange-400"></FaRegEdit>
                        </Link>
                      ) : (
                        <button onClick={() => permissionDenied(job)}>
                          <FaRegEdit className="text-4xl hover:scale-110 hover:bg-gray-300 p-2 rounded-md transition-all duration-500 text-orange-400"></FaRegEdit>
                        </button>
                      )}

                      {/* <Link to="/dashboard/editjob" state={{ job: job }}>
                        <FaRegEdit className="text-4xl hover:scale-110 hover:bg-gray-300 p-2 rounded-md transition-all duration-500 text-orange-400"></FaRegEdit>
                      </Link> */}

                      {job.email === user?.email ? (
                        <MdDelete
                          onClick={() => handleDelete(job)}
                          className="text-4xl hover:scale-110 hover:bg-gray-300 p-2 rounded-md transition-all duration-500 text-red-600"></MdDelete>
                      ) : (
                        <MdDelete
                          onClick={() => permissionDeniedtoDelete(job)}
                          className="text-4xl hover:scale-110 hover:bg-gray-300 p-2 rounded-md transition-all duration-500 text-red-600"></MdDelete>
                      )}
                      {job.email === user?.email ? (
                        <>
                          {/* Open the modal using document.getElementById('ID').showModal() method */}
                          <button
                            className="btn tooltip-right"
                            data-tip="hello"
                            onClick={() => openModal(job)}>
                            <AiOutlineCalendar
                              data-tip="schedule interview"
                              className="text-4xl  hover:scale-110 hover:bg-gray-300 p-2 rounded-md transition-all duration-500 text-blue-500"></AiOutlineCalendar>
                          </button>
                          <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                              <h3 className="text-2xl text-center font-semibold text-red-500 ">
                                Schedule interview
                              </h3>
                              {/* ======================================================== */}
                              {/* ==================== FORM DESIGN PART ================== */}
                              {/* ===========job.email   ============================================= */}

                              <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="card-body">
                                <div className="form-control">
                                  <label className="label">
                                    <span className="label-text">Email</span>
                                  </label>
                                  <input
                                    {...register("email", {
                                      required: true,
                                    })}
                                    type="email"
                                    value={selectedJob?.email || ""}
                                    readOnly
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                  />
                                  {errors.email && (
                                    <span>This field is required</span>
                                  )}
                                </div>
                                <div className="form-control">
                                  <label className="label">
                                    <span className="label-text"> Name</span>
                                  </label>
                                  <input
                                    {...register("name", {
                                      required: true,
                                    })}
                                    type="text"
                                    value={selectedJob?.name || ""}
                                    readOnly
                                    placeholder="name"
                                    className="input input-bordered"
                                    required
                                  />
                                  {errors.email && (
                                    <span>This field is required</span>
                                  )}
                                </div>
                                <div className="form-control">
                                  <label className="label">
                                    <span className="label-text">Job Id</span>
                                  </label>
                                  <input
                                    {...register("jobid", {
                                      required: true,
                                    })}
                                    type="text"
                                    defaultValue={selectedJob?._id || ""}
                                    readOnly
                                    placeholder="job id"
                                    className="input input-bordered"
                                    required
                                  />
                                  {errors.jobid && (
                                    <span>This field is required</span>
                                  )}
                                </div>
                                <div className="form-control">
                                  <label className="label">
                                    <span className="label-text">
                                      Job Title
                                    </span>
                                  </label>
                                  <input
                                    {...register("jobtitle", {
                                      required: true,
                                    })}
                                    type="text"
                                    defaultValue={selectedJob?.jobtitle || ""}
                                    readOnly
                                    placeholder="job Title"
                                    className="input input-bordered"
                                    required
                                  />
                                  {errors.jobtitle && (
                                    <span>This field is required</span>
                                  )}
                                </div>
                                <div className="form-control">
                                  <label className="label">
                                    <span className="label-text">
                                      Job Location
                                    </span>
                                  </label>
                                  <input
                                    {...register("jobLocation", {
                                      required: true,
                                    })}
                                    value={jobLocation}
                                    onChange={(e) =>
                                      setJobLocation(e.target.value)
                                    }
                                    placeholder={
                                      jobLocation || "enter a location"
                                    }
                                    className="input input-bordered"
                                  />
                                  {errors.jobLocation && (
                                    <span>This field is required</span>
                                  )}
                                </div>
                                <div className="form-control">
                                  <label className="label">
                                    <span className="label-text">
                                      Interview Date**
                                    </span>
                                  </label>
                                  <input
                                    {...register("date", {
                                      required: true,
                                    })}
                                    value={date}
                                    type="date"
                                    onChange={(e) => setDate(e.target.value)}
                                    placeholder="job Title"
                                    className="input input-bordered"
                                    required
                                  />
                                  {errors.date && (
                                    <span>This field is required</span>
                                  )}
                                </div>
                                <div className="form-control">
                                  <label className="label">
                                    <span className="label-text">
                                      Interview time
                                    </span>
                                  </label>
                                  <input
                                    {...register("time", {
                                      required: true,
                                    })}
                                    type="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    placeholder="time"
                                    className="input input-bordered"
                                    required
                                  />
                                  {errors.time && (
                                    <span>This field is required</span>
                                  )}
                                </div>
                                <div className="form-control mt-6">
                                  <input
                                    className="bg-red-600 py-3 font-semibold text-white rounded-none"
                                    type="submit"
                                    value="Schedule interview"
                                  />
                                </div>
                              </form>
                              <div className="modal-action">
                                <form method="dialog">
                                  {/* if there is a button in form, it will close the modal */}
                                  <button onClick={closeModal} className="btn">
                                    Close
                                  </button>
                                </form>
                              </div>
                            </div>
                          </dialog>
                        </>
                      ) : (
                        <MdScheduleSend
                          onClick={() => permissionDeniedtoInterview(job)}
                          className="text-4xl hover:scale-110 hover:bg-gray-300 p-2 rounded-md transition-all duration-500 text-blue-500"></MdScheduleSend>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Managejob;
