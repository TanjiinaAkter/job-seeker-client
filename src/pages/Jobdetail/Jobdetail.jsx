import Navbar from "../Shared/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoMdTime } from "react-icons/io";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import loti from "../../assets/Animation - 1726164735519.gif";
import tickimg from "../../assets/Animation - 1726209450587.gif";
import Footer from "../Shared/Footer/Footer";
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Jobdetail = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const detalsofid = useLoaderData();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  //console.log(resume)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    //name er value,email er value,ar resume er value append kore dicchi formData te
    formData.append("name", name);
    formData.append("email", email);
    formData.append("resume", resume);
    // nicher 4 lines used to see console name email and resume
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);

    // POST DATA FROM FORM
    const res = await axiosSecure.post("/formapply", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // PATCH DATA FROM id

    await axiosSecure.patch("/alljobs", {
      jobId: detalsofid._id,
    });
    // Redirect to the applied jobs page with application data , { state: res.data.data }
    navigate("/appliedjobs");
    console.log(res.data);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="addjob-img sm:h-auto bg-scroll space-y-28 relative">
        <div className="flex justify-center items-center py-24">
          <hr className="h-[2px] mb-12 bg-[#ff4848] w-[6%] border-none" />
          <p className="text-white font-semibold text-3xl md:text-5xl text-center">
            Job Details : {detalsofid.jobtitle}
          </p>
          <hr className="h-[2px] mt-14 bg-[#ff4848] w-[6%] border-none" />
        </div>
      </div>
      <div className="flex flex-col space-x-3 mx-auto w-full md:max-w-[75%] space-y-4 mb-12">
        {/* row-1 */}
        <div className="rowOne flex  mt-14 p-2 space-x-3">
          <div className="lg:pr-4">
            <img
              src={loti}
              style={{ height: "70px", width: "70px", color: "red" }}
              alt=""
            />
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="text-3xl font-semibold">{detalsofid.jobtitle}</h3>
            <div className="flex items-center justify-start space-x-5 ">
              <div className="flex items-center justify-center gap-2 text-gray-500">
                <IoMdTime className="text-lg" />
                <p>{detalsofid.category}</p>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <FaMoneyCheckDollar className="text-lg" />
                <p>{detalsofid.salary}</p>
              </div>
            </div>
          </div>
        </div>
        {/* row-2 */}
        <div className=" overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 space-y-3">
            <div
              className="col-span-full lg:col-span-2 w-full mx-auto lg:p-2"
              data-aos="fade-right">
              <img
                className="w-full lg:w-[80%] rounded-sm"
                src={detalsofid.photo}
                alt=""
              />
              <div></div>
            </div>
            <div className="col-span-full lg:col-span-1 border border-gray-200 space-y-3 p-4 bg-[#f8f9fa]">
              <h3 className="text-[#ff4848] my-5 text-2xl pl-2">
                Job Information
              </h3>
              <div className=" flex justify-start  items-center gap-2 ">
                <img
                  data-aos="fade-left"
                  src={tickimg}
                  style={{
                    width: "40px",
                    height: "40px",
                    fontWeight: "bold",
                  }}
                  alt=""
                />

                <h4
                  className="font-semibold text-gray-500 text-lg "
                  data-aos="fade-left">
                  Title :
                  <span className="text-gray-500 font-normal pl-1">
                    {detalsofid.jobtitle}
                  </span>
                </h4>
              </div>
              <div className=" flex justify-start  items-center gap-2">
                <img
                  data-aos="fade-left"
                  src={tickimg}
                  style={{
                    width: "40px",
                    height: "40px",
                    fontWeight: "bold",
                  }}
                  alt=""
                />
                <h4
                  className="font-semibold text-gray-500 text-lg "
                  data-aos="fade-left">
                  Salary:
                  <span className="text-gray-500 font-normal pl-1">
                    {detalsofid.salary}
                  </span>
                </h4>
              </div>
              <div className=" flex justify-start  items-center gap-2">
                <img
                  data-aos="fade-left"
                  src={tickimg}
                  style={{
                    width: "40px",
                    height: "40px",
                    fontWeight: "bold",
                  }}
                  alt=""
                />
                <h4
                  className="font-semibold text-gray-500 text-lg "
                  data-aos="fade-left">
                  No. of Applicants :
                  <span className="text-gray-500 font-normal pl-1">
                    {detalsofid.hiddenapplicationnumber}
                  </span>
                </h4>
              </div>
              {/* <div className="flex justify-start" data-aos="fade-left">
                <button className="btn-sm bg-[#ff4848] text-white font-bold rounded-sm  my-5 ml-3 md:text-base md:btn-md">
                  Apply Now
                </button>
              </div> */}
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn-sm bg-[#ff4848] text-white font-bold rounded-sm  my-5 ml-3 md:text-base md:btn-md"
                onClick={() => {
                  document.getElementById("my_modal_1").showModal();
                }}>
                Apply Now
              </button>

              {/* //MODAL */}
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box max-h-fit">
                  <form onSubmit={handleSubmit} className="card-body p-0">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="name"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={(e) => {
                          setResume(e.target.files[0]);

                          console.log(e.target.files[0]);
                        }}
                        name="file"
                        id=""
                      />
                    </div>

                    <div className="form-control mt-6">
                      <button type="submit" className="btn btn-primary">
                        Submit apply
                      </button>
                    </div>
                  </form>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn-sm bg-[#ff4848] text-white font-bold rounded-sm  my-5 ml-3 md:text-base md:btn-md">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-auto m-4 w-full md:max-w-[75%]  border border-gray-200  bg-[#f8f9fa] ">
        <div className="flex items-center  font-medium text-gray-500 text-lg">
          <img
            src={tickimg}
            style={{
              width: "40px",
              height: "40px",
              fontWeight: "bold",
            }}
            alt=""
          />
          <p>Job Description : </p>
        </div>
        <p className="p-4 text-gray-500">
          Job Description : {detalsofid.description}
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Jobdetail;
