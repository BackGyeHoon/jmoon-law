import React from "react";
import Layout from "../components/layout/Layout";
import Slider1 from "../components/slider/Slider1";
import MainKeyVisual from "../components/main/MainKeyVisual";
import MainProfile from "../components/main/MainProfile";
import MainNews from "../components/main/MainNews";
import MainOur from "../components/main/MainOur";
import MainMap from "../components/main/MainMap";
import MainDealsAndCases from "../components/main/MainDealsAndCases";

function Home() {
  return (
    <>
      <Layout children={undefined}>
        <MainKeyVisual />

        <MainProfile />

        <MainOur />

        <MainNews />

        <MainDealsAndCases />

        <section
          className="py-20 bg-top bg-no-repeat"
          style={{ backgroundImage: "url('assets/imgs/elements/blob.svg')" }}
        >
          <div className="container px-4 mx-auto">
            <div className="relative py-20 px-4 lg:p-20">
              <div className="max-w-lg mx-auto text-center">
                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animated animate__fadeIn">
                  <span>Subscribe now to</span>
                  <span className="text-mainColor-600"> Our Newsletter </span>
                  <span>and get the Coupon code.</span>
                </h2>
                <p
                  className="mb-8 text-blueGray-400 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  All your information is completely confidential
                </p>
                <div
                  className="p-4 bg-white rounded-lg flex flex-wrap max-w-md mx-auto wow animate__animated animate__fadeIn"
                  data-wow-delay=".5s"
                >
                  {/* <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-blueGray-100 rounded">
                                        <svg className="h-6 w-6 my-auto text-blueGray-500" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                        </svg>
                                        <input className="w-full pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none" type="text" placeholder="Type your e-mail" />
                                    </div> */}
                  <a
                    href="https://booking.naver.com/booking/13/bizes/762538/items/4610027?area=bmp&service-target=map-pc"
                    target="_blank"
                    className="w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none default-btn rounded content-center"
                  >
                    상담하기
                  </a>
                </div>
              </div>
            </div>
          </div>
          <MainMap />
        </section>
      </Layout>
    </>
  );
}
export default Home;
