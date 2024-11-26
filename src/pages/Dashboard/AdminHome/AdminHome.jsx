import { useEffect, useState } from "react";
import useAlljobs from "../../../hooks/useAlljobs";
import useAppliedjob from "../../../hooks/useAppliedjob";
import useAllUsers from "../../../hooks/useAllUsers";

const AdminHome = () => {
  const [alljobs] = useAlljobs();
  const [allUsers] = useAllUsers();
  const [applicationData] = useAppliedjob();
  console.log(applicationData);
  const [jobInfo, setJobInfo] = useState([]);
  const [userInfo, setuserInfo] = useState([]);
  useEffect(() => {
    if (applicationData) {
      const newData = applicationData.reduce((acc, job) => {
        // acc hocche ekhane obj
        acc[job.status] = (acc[job.status] || 0) + 1;
        return acc;
      }, {});
      //console.log(newData);
      setJobInfo(newData);
    }
    if (allUsers) {
      const getInfo = allUsers.reduce((acc, user) => {
        // role e admin k nibe, user k nibe... admin koyta ber kore user koyta ber kore new object return korbe
        acc[user.role] = (acc[user.role] || 0) + 1;

        return acc;
      }, {});

      setuserInfo(getInfo);
    }
  }, [applicationData, allUsers]);
  console.log(userInfo);
  return (
    <div>
      <div className=" w-[85%] mx-auto my-12">
        <h2 className="font-bold my-3"> User Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-[#42A5F5] pl-6 pr-12 py-4 text-white rounded-md">
            <h3 className="text-4xl font-bold">{alljobs.length}</h3>
            <h3 className="text-[25px] font-bold">Total Members</h3>
          </div>
          <div className="bg-[#26A69A] pl-6 pr-12 py-4 text-white  rounded-md">
            <h3 className="text-4xl font-bold">{userInfo.admin}</h3>
            <h3 className="text-[25px] font-bold">Admins</h3>
          </div>
          <div className="bg-[#37474F] pl-6 pr-12 py-4 text-white  rounded-md">
            <h3 className="text-4xl font-bold">{userInfo.user}</h3>
            <h3 className="text-[25px] font-bold">Users</h3>
          </div>
          {/* <div className="bg-[#9575CD] pl-6 pr-12 py-4 text-white  rounded-md">
            <h3 className="text-4xl font-bold">{alljobs.length}</h3>
            <h3 className="text-[25px] font-bold">Declined</h3>
          </div> */}
        </div>
      </div>
      <div className=" w-[85%] mx-auto my-12">
        <h2 className="font-bold my-3"> Job Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="bg-[#6C757D] pl-6 pr-12 py-4 text-white rounded-md">
            <h3 className="text-4xl font-bold">{alljobs.length}</h3>
            <h3 className="text-[25px] font-bold">Total Jobs</h3>
          </div>
          <div className="bg-[#f27122] pl-6 pr-12 py-4 text-white  rounded-md">
            <h3 className="text-4xl font-bold">{jobInfo.pending}</h3>
            <h3 className="text-[25px] font-bold">Pending</h3>
          </div>
          <div className="bg-[#3ace71] pl-6 pr-12 py-4 text-white  rounded-md">
            <h3 className="text-4xl font-bold">{jobInfo.accepted}</h3>
            <h3 className="text-[25px] font-bold">Interview</h3>
          </div>
          <div className="bg-[#e94c4c] pl-6 pr-12 py-4 text-white  rounded-md">
            <h3 className="text-4xl font-bold">{jobInfo.rejected}</h3>
            <h3 className="text-[25px] font-bold">Declined</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
