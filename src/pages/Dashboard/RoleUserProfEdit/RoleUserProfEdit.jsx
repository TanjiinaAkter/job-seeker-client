import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAllUsers from "../../../hooks/useAllUsers";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const RoleUserProfEdit = () => {
  const { user, updateUserProfile } = useAuth();
  const [, refetch] = useAllUsers();
  const axiosSecure = useAxiosSecure();

  // single user data pete amra first e all users get kore nibo then amra jekhane single lagbe oikhane single get korbo new route diye
  const { data: singleUser = [] } = useQuery({
    queryKey: ["singleUser", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/single?email=${user?.email}`);
      console.log("in user profile page", res.data);
      return res.data;
    },
    enabled: !!user?.email, // Fetch only when email is available
  });
  console.log("create for user role ", singleUser);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (user) {
      // firebase theke new user er data directly ekhane set kortesi tai displayName disi name na likhe,same for photo
      setValue("name", user?.displayName);
      setValue("email", user?.email);
      setValue("photo", singleUser?.photo || user?.photoURL);
    }
    // dependency diyechi karon user change hole jeno abar chole
  }, [user, setValue, singleUser]);

  const onSubmit = async (data) => {
    // user er data ar form er data deyar karon user first time thakle to kono edit data thakbe na tokhn jeno user er name photo show hoy
    const editProfile = {
      email: data.email,
      name: data.name,
      photo: data.photo,
      role: data.role,
      phone: data.phone,
      location: data.location,
      gender: data.gender,
      skills: data.skills,
    };
    console.log(data.name);
    try {
      await updateUserProfile(data.name, data.photo);
      refetch();
      //console.log(updateUserProfile);
      //console.log(user.name);
      const updateres = await axiosSecure.patch(
        `/users/userprof/${user?.email}`,
        editProfile
      );
      console.log("data pacchi", updateres.data);
      if (updateres.data.modifiedCount > 0) {
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
      <h2 className="text-[rgb(255,0,0)]  text-center mt-4 mb-8 font-semibold text-lg md:text-5xl">
        Update profile
      </h2>
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
                // disabled
                readOnly
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
                defaultValue={singleUser?.role}
                // disabled
                readOnly
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
          <div className="flex gap-3 flex-wrap md:flex-nowrap">
            <div className="form-control w-full md:w-1/2 mb-5">
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
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text font-medium">User skills</span>
              </label>
              <input
                placeholder="skills"
                {...register("skills", { required: true })}
                type="text"
                className="input input-bordered focus:outline-none rounded-sm"
              />
              {errors.skills && (
                <span className="text-red-600">Name field is required</span>
              )}
            </div>
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

export default RoleUserProfEdit;
