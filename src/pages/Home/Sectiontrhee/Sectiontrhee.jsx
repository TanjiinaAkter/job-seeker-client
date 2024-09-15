import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../../assets/luca-bravo-9l_326FISzk-unsplash.jpg";
import img2 from "../../../assets/slider11.png";
import img3 from "../../../assets/hero_1.jpg";
import "./Sectiontrhee.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Sectiontrhee = () => {
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
        <SwiperSlide>
          <div className=" border-r-2  h-auto">
            <div className="card rounded-none">
              <div className="card-body p-[1rem]">
                <p>
                  Thanks to all, I found my dream job! The platform made it easy
                  to apply for positions, and the detailed job descriptions
                  helped me understand exactly what employers were looking for.
                  The whole process was smooth, and I landed a job faster than I
                  expected.
                </p>
                <div className="card-actions justify-start items-center mt-8">
                  <div className="">
                    <img
                      src={img}
                      className="w-12 h-12 rounded-full object-cover"
                      alt=""
                    />
                  </div>
                  <h2>ishehrin islam</h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" border-r-2  h-auto">
            <div className="card rounded-none ">
              <div className="card-body p-[1rem]">
                <p>
                  Thanks to all, I found my dream job! The platform made it easy
                  to apply for positions, and the detailed job descriptions
                  helped me understand exactly what employers were looking for.
                  The whole process was smooth, and I landed a job faster than I
                  expected.
                </p>
                <div className="card-actions justify-start items-center mt-8">
                  <div className="">
                    <img
                      src={img3}
                      className="w-12 h-12 rounded-full object-cover "
                      alt=""
                    />
                  </div>
                  <h2>ishehrin islam</h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" border-r-2  h-auto">
            <div className="card rounded-none ">
              <div className="card-body p-[1rem]">
                <p>
                  Thanks to all, I found my dream job! The platform made it easy
                  to apply for positions, and the detailed job descriptions
                  helped me understand exactly what employers were looking for.
                  The whole process was smooth, and I landed a job faster than I
                  expected.
                </p>
                <div className="card-actions justify-start items-center mt-8">
                  <div className="">
                    <img
                      src={img2}
                      className="w-12 h-12 rounded-full object-cover"
                      alt=""
                    />
                  </div>
                  <h2>ishehrin islam</h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" border-r-2  h-auto">
            <div className="card rounded-none">
              <div className="card-body p-[1rem]">
                <p>
                  Thanks to all, I found my dream job! The platform made it easy
                  to apply for positions, and the detailed job descriptions
                  helped me understand exactly what employers were looking for.
                  The whole process was smooth, and I landed a job faster than I
                  expected.
                </p>
                <div className="card-actions justify-start items-center mt-8">
                  <div className="">
                    <img
                      src={img}
                      className="w-12 h-12 rounded-full object-cover"
                      alt=""
                    />
                  </div>
                  <h2>ishehrin islam</h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" border-r-2  h-auto">
            <div className="card rounded-none ">
              <div className="card-body p-[1rem]">
                <p>
                  Thanks to all, I found my dream job! The platform made it easy
                  to apply for positions, and the detailed job descriptions
                  helped me understand exactly what employers were looking for.
                  The whole process was smooth, and I landed a job faster than I
                  expected.
                </p>
                <div className="card-actions justify-start items-center mt-8">
                  <div className="">
                    <img
                      src={img3}
                      className="w-12 h-12 rounded-full object-cover"
                      alt=""
                    />
                  </div>
                  <h2>ishehrin islam</h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" border-r-2  h-auto">
            <div className="card rounded-none ">
              <div className="card-body p-[1rem]">
                <p>
                  Thanks to all, I found my dream job! The platform made it easy
                  to apply for positions, and the detailed job descriptions
                  helped me understand exactly what employers were looking for.
                  The whole process was smooth, and I landed a job faster than I
                  expected.
                </p>
                <div className="card-actions justify-start items-center mt-8">
                  <div className="">
                    <img
                      src={img2}
                      className="w-12 h-12 rounded-full object-cover"
                      alt=""
                    />
                  </div>
                  <h2>ishehrin islam</h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" border-r-2  h-auto">
            <div className="card rounded-none ">
              <div className="card-body p-[1rem]">
                <p>
                  Thanks to all, I found my dream job! The platform made it easy
                  to apply for positions, and the detailed job descriptions
                  helped me understand exactly what employers were looking for.
                  The whole process was smooth, and I landed a job faster than I
                  expected.
                </p>
                <div className="card-actions justify-start items-center mt-8">
                  <div className="">
                    <img
                      src={img3}
                      className="w-12 h-12 rounded-full object-cover"
                      alt=""
                    />
                  </div>
                  <h2>ishehrin islam</h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" border-r-2  h-auto">
            <div className="card rounded-none ">
              <div className="card-body p-[1rem]">
                <p>
                  Thanks to all, I found my dream job! The platform made it easy
                  to apply for positions, and the detailed job descriptions
                  helped me understand exactly what employers were looking for.
                  The whole process was smooth, and I landed a job faster than I
                  expected.
                </p>
                <div className="card-actions justify-start items-center mt-8">
                  <div className="">
                    <img
                      src={img2}
                      className="w-12 h-12 rounded-full object-cover"
                      alt=""
                    />
                  </div>
                  <h2>ishehrin islam</h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sectiontrhee;
