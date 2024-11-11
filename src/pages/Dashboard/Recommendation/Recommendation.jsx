import { useEffect, useState } from "react";
import useAlljobs from "../../../hooks/useAlljobs";
import useAllUsers from "../../../hooks/useAllUsers";
import useAuth from "../../../hooks/useAuth";

const Recommendation = () => {
  const [recommendation, setRecommendation] = useState([]);
  const { user } = useAuth();
  const [userProfileData] = useAllUsers();
  const [alljobs] = useAlljobs();
  console.log(userProfileData.location);
  //  console.log(alljobs);
  useEffect(() => {
    if (user && userProfileData.length > 0) {
      const userSkills = userProfileData[0].skills || [];
      const recommendation = alljobs.filter((job) => {
        const jo = Object.entries(job);
        console.log(jo);
        // amra obj er moddhe some() method use korte parbo na tai amra obj er key gulo niye  array baniye use kortesi
        const hasMatchingSkills = Object.entries(job).some((jobSkill) =>
          userSkills.includes(jobSkill)
        );
        console.log(hasMatchingSkills);
        const locationMatch = job.location === userProfileData[0].location;
        return hasMatchingSkills || locationMatch;
      });
      setRecommendation(recommendation);
    }
  }, [alljobs, user, userProfileData]);
  console.log(recommendation);
  return (
    <div>
      <h1>recommendation</h1>
    </div>
  );
};

export default Recommendation;
