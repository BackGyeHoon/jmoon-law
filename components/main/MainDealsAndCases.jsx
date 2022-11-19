import React from "react";

export default function MainDealsAndCases() {
  return (
    <section className="py-20 bg-blueGray-50">
      <div className="container">
        <div className="max-w-lg mx-auto mb-12 text-center">
          <h2
            className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated deals-title"
            data-wow-delay=".1s"
          >
            법률사무소 정문의{" "}
            <span className="text-mainColor-600">업무사례</span>를<br />
            확인해보세요.
          </h2>
          <a
            href="https://blog.naver.com/jmoonlaw"
            target="_blank"
            className="w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none default-btn rounded deals-bold-text top-button-interval"
          >
            확인하러가기
          </a>
        </div>
        {/* <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 py-5 md:px-5">
            <div
              className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
              data-wow-delay=".1s"
            >
              <div className="flex items-center mb-4">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src="/assets/imgs/placeholders/avatar-1.png"
                  alt="Monst"
                />
                <div className="pl-4">
                  <strong className="mt-6 mb-2 text-md">Geraldine Tusoy</strong>
                  <p className="text-gray-500 text-xs mt-3">CEO, Co Founders</p>
                </div>
              </div>
              <p className="leading-loose text-blueGray-400 mb-5">
                Donec consequat tortor risus, at auctor felis consequat a. Donec
                quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar.
                Vestibulum non quam velit.
              </p>
              <div className="flex space-x-2">
                <a href="#">
                  <img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" />
                </a>
                <a href="#">
                  <img
                    src="/assets/imgs/icons/instagram-blue.svg"
                    alt="Monst"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 py-5 md:px-5">
            <div
              className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
              data-wow-delay=".3s"
            >
              <div className="flex items-center mb-4">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src="/assets/imgs/placeholders/avatar-2.png"
                  alt="Monst"
                />
                <div className="pl-4">
                  <strong className="mt-6 mb-2 text-md">Clara Kolawole</strong>
                  <p className="text-gray-500 text-xs mt-3">CEO-Founder</p>
                </div>
              </div>
              <p className="leading-loose text-blueGray-400 mb-5">
                Donec consequat tortor risus, at auctor felis consequat a. Donec
                quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar.
                Vestibulum non quam velit.
              </p>
              <div className="flex space-x-2">
                <a href="#">
                  <img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" />
                </a>
                <a href="#">
                  <img
                    src="/assets/imgs/icons/instagram-blue.svg"
                    alt="Monst"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 py-5 md:px-5">
            <div
              className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
              data-wow-delay=".5s"
            >
              <div className="flex items-center mb-4">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src="/assets/imgs/placeholders/avatar-3.png"
                  alt="Monst"
                />
                <div className="pl-4">
                  <strong className="mt-6 mb-2 text-md">Chris Fulton</strong>
                  <p className="text-gray-500 text-xs mt-3">Project-Manager</p>
                </div>
              </div>
              <p className="leading-loose text-blueGray-400 mb-5">
                Donec consequat tortor risus, at auctor felis consequat a. Donec
                quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar.
                Vestibulum non quam velit.
              </p>
              <div className="flex space-x-2">
                <a href="#">
                  <img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" />
                </a>
                <a href="#">
                  <img src="/assets/imgs/icons/twitter-blue.svg" alt="Monst" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 py-5 md:px-5">
            <div
              className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
              data-wow-delay=".7s"
            >
              <div className="flex items-center mb-4">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src="/assets/imgs/placeholders/avatar-4.png"
                  alt="Monst"
                />
                <div className="pl-4">
                  <strong className="mt-6 mb-2 text-md">Dany Connolly</strong>
                  <p className="text-gray-500 text-xs mt-3">Direct-Founder</p>
                </div>
              </div>
              <p className="leading-loose text-blueGray-400 mb-5">
                Donec consequat tortor risus, at auctor felis consequat a. Donec
                quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar.
                Vestibulum non quam velit.
              </p>
              <div className="flex space-x-2">
                <a href="#">
                  <img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" />
                </a>
                <a href="#">
                  <img
                    src="/assets/imgs/icons/instagram-blue.svg"
                    alt="Monst"
                  />
                </a>
                <a href="#">
                  <img src="/assets/imgs/icons/twitter-blue.svg" alt="Monst" />
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
