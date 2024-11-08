import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { useEffect } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { updateUserProfile } from "firebase/auth";
import Swal from "sweetalert2";
import useAllUsers from "../../../hooks/useAllUsers";

const UserProfileEdit = () => {
  const axiosSecure = useAxiosSecure();
  const { user, updateUserProfile } = useAuth();
  const [, refetch] = useAllUsers();
  //console.log(user.displayName);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (user) {
      setValue("name", user.name);
      setValue("email", user.email);
      setValue("photo", user.photo);
    }
  }, [user, setValue]);

  const onSubmit = async (data) => {
    const editProfile = {
      email: data.email || user.email,
      name: data.name || user.name,
      photo: data.photo || user.photo,
      role: data.role || user.role,
      phone: data.phone || user.phone,
      location: data.location || user.location,
      gender: data.gender || user.gender,
    };
    console.log(editProfile);
    try {
      await updateUserProfile({
        email: data.email,
        name: data.name,
        photo: data.photo,
      });

      console.log(updateUserProfile);
      console.log(user.name);
      const res = await axiosSecure.patch(
        `/users?email=${data?.email}`,
        editProfile
      );
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Profile updated successfully",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Something went wrong",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  return (
    <div>
      <h2>Update profile</h2>
      <div className="card bg-base-100 w-[80%] mx-auto rounded-none  shadow-2xl my-6">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body  p-6">
          <div className="flex gap-3 flex-wrap md:flex-nowrap ">
            <div className="form-control w-full md:w-1/2">
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
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                disabled
                placeholder="email"
                className="input input-bordered focus:outline-none rounded-sm "
              />
              {errors.email && (
                <span className="text-red-600">email field is required</span>
              )}
            </div>
          </div>
          <div className="flex gap-3 flex-wrap md:flex-nowrap">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text font-medium">
                  User Contact Number
                </span>
              </label>
              <input
                placeholder="phone"
                {...register("phone", { required: true })}
                type="text"
                className="input input-bordered focus:outline-none rounded-sm"
              />
              {errors.phone && (
                <span className="text-red-600">contact field is required</span>
              )}
            </div>
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text font-medium">Role</span>
              </label>
              <input
                {...register("role", { required: true })}
                type="text"
                placeholder="role"
                className="input input-bordered focus:outline-none rounded-sm"
              />
              {errors.role && (
                <span className="text-red-600">
                  job title field is required
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-3 flex-wrap md:flex-nowrap">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text font-medium">Location</span>
              </label>
              <input
                placeholder="location name"
                {...register("location", { required: true })}
                type="text"
                className="input input-bordered focus:outline-none rounded-sm"
              />
              {errors.location && (
                <span className="text-red-600">Name field is required</span>
              )}
            </div>

            <div className="form-control w-full md:w-1/2">
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
          </div>
          <div className="form-control w-full mb-5">
            <label className="label">
              <span className="label-text font-medium">Gender</span>
            </label>
            <input
              {...register("gender", { required: true })}
              type="text"
              placeholder="gender"
              className="input input-bordered focus:outline-none rounded-sm"
            />
            {errors.gender && (
              <span className="text-red-600">gender field is required</span>
            )}
          </div>

          <input
            type="submit"
            value="Edit profile"
            className="btn bg-[#ff4848] text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default UserProfileEdit;
