import { useEffect, useState } from "react";
import useAlljobs from "../../../hooks/useAlljobs";
import useAllUsers from "../../../hooks/useAllUsers";
import useAuth from "../../../hooks/useAuth";

import SingleRecommandation from "../SingleRecommandation/SingleRecommandation";

const Recommendation = () => {
  const [recommendation, setRecommendation] = useState([]);
  const { user } = useAuth();
  const [userProfileData] = useAllUsers();
  const [alljobs] = useAlljobs();
  console.log(userProfileData.length);
  useEffect(() => {
    if (user && userProfileData ) {
      const userSkills = userProfileData.skills || [];
      const userSkillsArray =
        typeof userSkills === "string"
          ? userSkills.split(",").map((skill) => skill.trim())
          : userSkills;
      const userLocation = userProfileData.location;

      const recommendation = alljobs
        .map((job) => {
          const jobSkills = Array.isArray(job.skills) ? job.skills : [];
          //job skill er console output hocche
          //['java', 'python']
          //['JavaScript', 'React', 'CSS']
          //['Node.js', 'Python', 'MongoDB', 'javascript', 'react']
          //['css', 'react', 'mongodb']

          const jobLocation = job.location;
          //jobskill e thaka skill gulo amr userskill er moddhe ache kina, jegula match korbe na oigulte [] emn pabo , so length diye amra hishab korbo percentage, ekhane ki korsi>>>>> user er skills er sathe matched skillgulo ber korsi... like 1 ta job e 2 ta match hoise ekhn length holo 2 specific ekta job er match skill..............then eitake oi job er sob skill er length diye /100 korbo taholei percentage pabo
          // filter jobSkills & userskill ,,, jeta jeta milbe oita matchedskill e pabo 1 ta 1 ta jober jonno ,,,ar ajonnoi map er vitore kortesi
          const matchedSkills = jobSkills.filter((skill) =>
            userSkillsArray.some((userSkill) =>
              userSkill.toLowerCase().includes(skill.toLowerCase())
            )
          );

          const skillMatchPercentage =
            (matchedSkills.length / jobSkills.length) * 100;
          console.log(skillMatchPercentage);
          const locationMatch = userLocation === jobLocation ? 10 : 0;

          const totalMatchPercentage = (
            skillMatchPercentage + locationMatch
          ).toFixed(1);
          return { ...job, totalMatchPercentage, matchedSkills, locationMatch };
        })

        .filter((job) => job.totalMatchPercentage > 0)
        .sort((a, b) => b.totalMatchPercentage - a.totalMatchPercentage);
      setRecommendation(recommendation);
      console.log(recommendation);
    }
  }, [user, userProfileData, alljobs]);
  console.log(recommendation);
  return (
    <div className="md:max-w-[80%] w-[90%] mx-auto">
      <div className="grid  grid-cols-1 mx-auto w-full md:grid-cols-2 gap-8">
        {/* Render the recommended jobs here */}
        {recommendation.map((job) => (
          <SingleRecommandation key={job._id} job={job}></SingleRecommandation>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
