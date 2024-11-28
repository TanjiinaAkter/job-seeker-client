

import SavedJobDetail from "../SavedJobDetail/SavedJobDetail";

import useSavedJobs from "../../../hooks/useSavedJobs";
import UserPageHeader from "../../../components/UserPageHeader/UserPageHeader";

const SavedJobs = () => {
  const [savedJobs] = useSavedJobs();
  //console.log(savedJobs)
  const colors = ["#f6ebe7", "#d5edf2", "#ffdfdf", "#e7f6f1", "#e5f7c3"];
  console.log(savedJobs);
  return (
    <div className="mx-auto max-w-5xl ">
      <div>
        <UserPageHeader
          userheading={`Saved Jobs : ${savedJobs.length} `}></UserPageHeader>
      </div>
      {/* <div className="divider text-red-600 text-3xl  my-6 mx-auto w-full md:w-2/3">
        <h3 className="text-black text-4xl font-semibold ">
          Saved job : {savedJobs.length}r
        </h3>
        <FaBookmark></FaBookmark>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {savedJobs.map((job, index) => (
          <SavedJobDetail
            key={job._id}
            job={job}
            style={{ backgroundColor: colors[index % colors.length] }} // Loop through colors
          ></SavedJobDetail>
        ))}
      </div>
    </div>
  );
};

export default SavedJobs;
