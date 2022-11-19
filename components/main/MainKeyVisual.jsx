import React from "react";
import CounterUp from "../elements/Counterup";
import TextEffect from "../elements/TextEffect";

export default function MainKeyVisual() {
  return (
    <section
      className="bg-auto bg-top bg-no-repeat -mt-24 pt-24 main-iamge"
      style={{
        backgroundImage: "url('/imgs/backgrounds/main-background-image.png')",
      }}
    >
      <div className="container px-4 mx-auto">
        <div className="pt-12 text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h2
              className="text-3xl lg:text-5xl lg:leading-normal mb-4 font-bold font-heading wow animate__animated animate__fadeIn"
              style={{ color: "#fff" }}
            >
              LAW FIRM <br />
              <span>JEONGMOON</span>
            </h2>
            <p className="text-whiteColor-600 leading-relaxed wow animate__animated animate__fadeIn">
              바르고 강하게 의뢰인을 지켜드리겠습니다
              {/*We are <strong className="text-600">Jeongmoon</strong>, a Creative*/}
              {/*Design{" "}*/}
              {/*<span className="typewrite d-inline text-brand">*/}
              {/*  <TextEffect text1="abc" text2="dsfsdf" />*/}
              {/*</span>*/}
            </p>
          </div>
        </div>
      </div>
      {/* <div className="relative max-w-6xl mt-16 md:mt-8 mb-8 mx-auto">
                        <img src="/assets/imgs/elements/pattern.png" alt="Monst" />
                        <div className="absolute" style={{ top: "9%", left: "14%", width: "72%", height: "66%" }}>
                            <img className="jump rounded wow animate__animated animate__fadeIn" src="/assets/imgs/placeholders/dashboard.png" alt="Monst" />
                        </div>
                    </div> */}
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-between pt-8 pb-16">
          <div
            className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
            data-wow-delay=".2s"
          >
            <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="#20676a"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <div className="sm:py-2 ml-2 sm:ml-6">
              <span className="sm:text-2xl font-bold font-heading text-whiteColor-600">
                +{" "}
              </span>
              <span className="sm:text-2xl font-bold font-heading count text-whiteColor-600">
                <CounterUp count={900} time={3} />
              </span>
              <p className="text-xs sm:text-base text-whiteColor-400">
                민사
              </p>
            </div>
          </div>
          <div
            className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
            data-wow-delay=".4s"
          >
            <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="#20676a"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                ></path>
              </svg>
            </div>
            <div className="sm:py-2 ml-2 sm:ml-6">
              <span className="sm:text-2xl font-bold font-heading text-whiteColor-600">
                +{" "}
              </span>
              <span className="sm:text-2xl font-bold font-heading count text-whiteColor-600">
                <CounterUp count={350} time={3} />
              </span>
              <span className="sm:text-2xl font-bold font-heading text-whiteColor-600">
                {" "}
                {" "}
              </span>
              <p className="text-xs sm:text-base text-whiteColor-400">
                형사
              </p>
            </div>
          </div>
          <div
            className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
            data-wow-delay=".6s"
          >
            <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="#20676a"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
            </div>
            <div className="sm:py-2 ml-2 sm:ml-6">
              <span className="sm:text-2xl font-bold font-heading text-whiteColor-600">
                +{" "}
              </span>
              <span className="sm:text-2xl font-bold font-heading count text-whiteColor-600">
                <CounterUp count={350} time={3} />
              </span>
              <p className="text-xs sm:text-base text-whiteColor-400">
                가사
              </p>
            </div>
          </div>
          <div
            className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
            data-wow-delay=".8s"
          >
            <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="#20676a"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>
            <div className="sm:py-2 ml-2 sm:ml-6">
              <span className="sm:text-2xl font-bold font-heading text-whiteColor-600">
                +{" "}
              </span>
              <span className="sm:text-2xl font-bold font-heading count text-whiteColor-600">
                <CounterUp count={550} time={3} />
              </span>
              <p className="text-xs sm:text-base text-whiteColor-400">
                행정
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
