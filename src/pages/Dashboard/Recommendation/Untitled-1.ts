import { useEffect, useState } from "react";
import useAlljobs from "../../../hooks/useAlljobs";
import useAllUsers from "../../../hooks/useAllUsers";
import useAuth from "../../../hooks/useAuth";
import UserPageHeader from "../../../components/UserPageHeader/UserPageHeader";

const Recommendation = () => {
  const [recommendation, setRecommendation] = useState([]);
  const { user } = useAuth();
  const [userProfileData] = useAllUsers();
  const [alljobs] = useAlljobs();

  useEffect(() => {
    if (user && userProfileData.length > 0) {
      const userSkills = userProfileData[0].skills || [];
      
      const userLocation = userProfileData[0].location;

      const recommendations = alljobs
        .map((job) => {
          // alljobs theke only prottekta job skill ar locatin nilam
          const jobSkills = Array.isArray(job.skills) ? job.skills : [];
          const jobLocation = job.location;

          // Calculate skill match percentage
          const matchedSkills = jobSkills.filter((skill) =>
            userSkills.includes(skill)
          );
          console.log(matchedSkills);
          const skillMatchPercentage =
            (matchedSkills.length / jobSkills.length) * 100;

          // Calculate location match (e.g., full match = 10%)
          const locationMatch = userLocation === jobLocation ? 10 : 0;

          // Total match percentage (example: 90% skills + 10% location)
          const totalMatchPercentage = skillMatchPercentage + locationMatch;

          return { ...job, totalMatchPercentage };
        })
        .filter((job) => job.totalMatchPercentage > 0) // Show only jobs with some match percentage
        .sort((a, b) => b.totalMatchPercentage - a.totalMatchPercentage); // Sort by match percentage

      setRecommendation(recommendations);
    }
  }, [alljobs, user, userProfileData]);

  return (
    <div>
      <UserPageHeader
        userheading={`Recommended Jobs for ${user?.displayName || "user"}: ${
          recommendation.length
        }`}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {recommendation.map((job) => (
          <div key={job._id} className="job-card">
            <h3>{job.title}</h3>
            <p>Match: {job.totalMatchPercentage.toFixed(2)}%</p>
            <p>Location: {job.location}</p>
            <p>Skills Required: {job.skills.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
