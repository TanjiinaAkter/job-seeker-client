import { Swiper, SwiperSlide } from "swiper/react";

import "./Sectiontrhee.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const Sectiontrhee = () => {
  const axiosPublic = useAxiosPublic();
  const { data: testimonial = [] } = useQuery({
    queryKey: ["testimonial"],
    queryFn: async () => {
      const res = await axiosPublic.get("/testimonial");

      return res.data;
    },
  });
  console.log(testimonial);
  return (
    <div className="mx-auto w-full md:w-[90%] lg:w-[80%] mb-12">
      <h2 className="text-gray-500 text-xl px-2">Testimonials</h2>
      <h3 className="text-[#ff4848] font-semibold px-2 text-3xl my-6">
        They said what we did
      </h3>
      <Swiper
        slidesPerView={2}
        speed={3000}
        loop={true}
        autoplay={{
          delay: 0,
          waitForTransition: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 2,
          },
        }}
        className="mySwiper mb-12 mySwipergo ">
        <div className="">
          {testimonial.map((test) => (
            <SwiperSlide key={test._id}>
              <div className=" border-r-2  h-auto">
                <div className="card rounded-none">
                  <div className="card-body p-[1rem]">
                    <p>{test.review}</p>
                    <div className="card-actions justify-start items-center mt-8">
                      <div className="">
                        <img
                          src={test.image}
                          className="w-12 h-12 rounded-full object-cover"
                          alt=""
                        />
                      </div>
                      <h2>{test.name}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Sectiontrhee;
