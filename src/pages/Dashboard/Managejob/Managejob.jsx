import { FaEye, FaRegEdit } from "react-icons/fa";
import UserPageHeader from "../../../components/UserPageHeader/UserPageHeader";
import { MdDelete } from "react-icons/md";
import useAlljobs from "../../../hooks/useAlljobs";
import useAuth from "../../../hooks/useAuth";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const Managejob = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
     
    });
  }, []);
  const [alljobs, refetch] = useAlljobs();
  console.log(alljobs);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

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

                      {/* <MdDelete
                        onClick={() => handleDelete(job)}
                        className="text-4xl hover:scale-110 hover:bg-gray-300 p-2 rounded-md transition-all duration-500 text-red-600"></MdDelete> */}
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
