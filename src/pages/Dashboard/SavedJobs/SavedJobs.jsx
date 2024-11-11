import { FaBookmark } from "react-icons/fa";

import SavedJobDetail from "../SavedJobDetail/SavedJobDetail";

import useSavedJobs from "../../../hooks/useSavedJobs";

const SavedJobs = () => {
  const [savedJobs] = useSavedJobs();
  //console.log(savedJobs)

  console.log(savedJobs);
  return (
    <div className="mx-auto max-w-5xl">
      <div className="divider text-red-600 text-3xl  my-6 mx-auto w-full md:w-2/3">
        <h3 className="text-black text-4xl font-semibold ">
          Saved job : {savedJobs.length}
        </h3>
        <FaBookmark></FaBookmark>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {savedJobs.map((job) => (
          <SavedJobDetail key={job._id} job={job}></SavedJobDetail>
        ))}
      </div>
    </div>
  );
};

export default SavedJobs;
