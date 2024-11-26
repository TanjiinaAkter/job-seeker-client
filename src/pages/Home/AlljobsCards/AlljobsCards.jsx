import { useState } from "react";
import Jobcard from "../Jobcard/Jobcard";

const AlljobsCards = ({ alljobs }) => {
  const [showLess, setShowLess] = useState(6);
  return (
    <div className="grid grid-cols-1 gap-4">
      {alljobs.slice(0, showLess).map((job) => (
        <Jobcard key={job._id} job={job}></Jobcard>
      ))}
      {showLess < alljobs.length ? (
        <div
          onClick={() => setShowLess(alljobs.length)}
          className="flex justify-center items-center">
          <button className="btn bg-black rounded-sm text-white text-lg">
            See more
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AlljobsCards;
