import { useQuery } from "@tanstack/react-query";
import UserPageHeader from "../../../components/UserPageHeader/UserPageHeader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos";
import { MdDelete } from "react-icons/md";
import {  FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
const Manageusers = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      console.log(res.data);
      return res.data;
    },
  });

  const handleDelete = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
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

  const handleMakeAdmin = (user) => {
    ///users/admin/:id
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is admin now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div>
      <div>
        <UserPageHeader userheading={"Manage Users"}></UserPageHeader>
      </div>
      <div
        data-aos="fade-left"
        className="card shadow-lg overflow-x-auto my-12 md:w-[86%] mx-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>1</th>
              <th>photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id} className="group">
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask  h-12 w-12">
                        <img
                          src={user.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin "
                  ) : (
                    <FaUsers
                      onClick={() => handleMakeAdmin(user)}
                      className="text-3xl text-orange-600 hover:bg-gray-200 hover:p-1 hover:rounded-md transition-all hover:duration- hover:scale-105 "></FaUsers>
                  )}
                </td>
                <th>
                  <MdDelete
                    onClick={() => handleDelete(user)}
                    className="text-3xl text-red-600 hover:bg-gray-200 hover:p-1 hover:rounded-md transition-all hover:duration- hover:scale-105"
                  />
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
      <h2>{users.length}</h2>
    </div>
  );
};

export default Manageusers;
