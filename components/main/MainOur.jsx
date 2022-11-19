import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function MainOur() {
  const datas = [
    {
      title: "테스트이름1",
      description: "내용내용",
      image: "image-test.jpeg",
    },
    {
      title: "테스트이름2",
      description: "내용내용",
      image: "/",
    },
    {
      title: "테스트이름3",
      description: "내용내용",
      image: "/",
    },
    {
      title: "테스트이름4",
      description: "내용내용",
      image: "/",
    },
    {
      title: "테스트이름5",
      description: "내용내용",
      image: "/",
    },
    {
      title: "테스트이름6",
      description: "내용내용",
      image: "/",
    },
    {
      title: "테스트이름7",
      description: "내용내용",
      image: "/",
    },
    {
      title: "테스트이름8",
      description: "내용내용",
      image: "/",
    },
    {
      title: "테스트이름9",
      description: "내용내용",
      image: "/",
    },
    {
      title: "테스트이름10",
      description: "내용내용",
      image: "/",
    },
    {
      title: "테스트이름11",
      description: "내용내용",
      image: "/",
    },
    {
      title: "테스트이름12",
      description: "내용내용",
      image: "/",
    },
    {
      title: "테스트이름13",
      description: "내용내용",
      image: "/",
    },
    {
      title: "테스트이름14",
      description: "내용내용",
      image: "/",
    },
    {
      title: "테스트이름15",
      description: "내용내용",
      image: "/",
    },
  ];
  return (
    <section className="py-20 bg-blueGray-50" id="how-we-work">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeInDown">
              <span>We are </span>
              <span className="text-mainColor-600">awesome team </span>
              <br />
              <span>for your business dream</span>
            </h2>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-blueGray-400 leading-loose wow animate__animatedanimated animate__fadeIn">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis. Quisque vitae nulla malesuada,
              auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id
              imperdiet.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 -mb-6 text-center our-slide-container">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            className="mySwiper"
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              clickable: true,
              prevEl: ".our_prev",
              nextEl: ".our_next",
            }}
            modules={[Pagination, Navigation]}
          >
            {datas.map((item, index) => {
              return (
                <SwiperSlide>
                  <div
                    className="hover-up-5 w-full px-3 mb-6 wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                    key={index}
                  >
                    <div className="bg-white shadow rounded">
                      <img
                        className=""
                        src={`/images/${item.image}`}
                        alt="Monst"
                      />
                      <h3 className="mb-2 font-bold font-heading text-xl custom-pt-20">
                        {item.title}
                      </h3>
                      <p className="text-sm text-blueGray-400 leading-relaxed custom-pb-20">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div
            id="carausel-2-columns-1-arrows"
            className="flex our-arrow-conatiner"
          >
            <span className="mr-4 text-blue-500 flex slick-arrow our_prev">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="#20676a"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                ></path>
              </svg>
            </span>
            <span className="text-blue-500 flex slick-arrow our_next">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="#20676a"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
