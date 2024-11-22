import { useEffect, useState } from "react";
import UserPageHeader from "../../../components/UserPageHeader/UserPageHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import useSingleApplicantsData from "../../../hooks/useSingleApplicantsData";
const Intereview = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  const [singleApplicantsData] = useSingleApplicantsData();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    if (singleApplicantsData) {
      const acceptedData = singleApplicantsData.filter(
        (accept) => accept.status === "accepted"
      );
      setDetails(acceptedData);
    }
  }, [singleApplicantsData]);
  console.log(details);
  return (
    <div>
      <UserPageHeader userheading={"Interview Schedule"}></UserPageHeader>
      <div data-aos="fade-left" className="max-w-6xl mx-auto">
        <div className="overflow-hidden card shadow-xl rounded-md">
          <table className="table w-full p-8">
            {/* head */}
            <thead className="bg-[#b0c5ca]">
              <tr className="text-lg font-base text-black ">
                <th>Schedule Date</th>
                <th>Schedule Time</th>
                <th>Applicant Name </th>
                <th>Applied Position </th>
                <th>Interviwer Name </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="bg-base-200">
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>Quality Control Specialist</td>
             
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Intereview;
