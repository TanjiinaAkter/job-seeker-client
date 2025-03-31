import "./Pageheader.css";
const Pageheader = ({heading}) => {
  return (
    <div className="addjob-img  bg-scroll space-y-28 pt-12 relative">
      <div className="flex justify-center items-center py-[9rem] md:py-24">
        <hr className="h-[2px] mb-12 bg-[#ff4848] w-[6%] border-none" />
        <p
          data-aos="fade-left"
          className="text-white font-semibold text-3xl md:text-5xl text-center">
         {heading}
        </p>
        <hr className="h-[2px] mt-14 bg-[#ff4848] w-[6%] border-none" />
      </div>
    </div>
  );
};

export default Pageheader;
