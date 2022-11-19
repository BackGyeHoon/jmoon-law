import Link from "next/link";
import React from "react";

export default function MainInsight() {
  return (
    <section className="py-20">
      <div className="container">
        <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
          NEWS
        </h1>
        <div className="flex flex-wrap -mx-3">
          <div
            className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated hover-up-5"
            data-wow-delay=".1s"
          >
            <a>
              <img
                className="h-80 w-full object-cover rounded"
                src="/images/news_02.jpeg"
                alt="Monst"
              />
            </a>
            <p className="mt-6 text-sm text-blue-400">
              <a>
                <span className="inline-block py-1 px-3 text-xs font-semibold rounded-mainColor rounded-xl mr-3">
                  News
                </span>
              </a>
              <span className="text-blueGray-400 text-xs">29 Oct, 2022</span>
            </p>
            <h3 className="my-2 text-2xl font-bold font-heading">
              <a>변호사 대리 실무 교육</a>
            </h3>
            <p className="text-blueGray-400 leading-loose">
              세무조사/불복 등 조세전문
              <br />
              (관련경력)
              <br />
              인천지방국세청 징세송무국 체납추적과
              <br />
              인천지방국세청 징세송무국 송무과
              <br />
              인천지방국세청 과세판단자문위원회 위원
              <br />
              인천지방검찰청 조세소송 전담
              <br />
            </p>
          </div>
          <div
            className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated hover-up-5"
            data-wow-delay=".3s"
          >
            <a>
              <img
                className="h-80 w-full object-cover rounded"
                src="/images/news_01.jpg"
                alt="Monst"
              />
            </a>
            <p className="mt-6 text-sm text-blue-400">
              <a>
                <span className="inline-block py-1 px-3 text-xs font-semibold rounded-mainColor rounded-xl mr-3">
                  News
                </span>
              </a>
              <span className="text-blueGray-400 text-xs">29 Oct, 2022</span>
            </p>
            <h3 className="my-2 text-2xl font-bold font-heading">
              <a>학교폭력소위원회 위원장 위촉</a>
            </h3>
            <p className="text-blueGray-400 leading-loose">
              학생의 인권을 보호하고 학생을 건전한 사회구성원으로 육성하도록
              최선을 다하겠습니다. <br />
              (관련경력)
              <br /> 연세대학교 교육학 전공
            </p>
          </div>
          <div
            className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated hover-up-5"
            data-wow-delay=".1s"
          >
            <a>
              <img
                className="h-80 w-full object-cover rounded"
                src="/images/news_03.png"
                alt="Monst"
              />
            </a>
            <p className="mt-6 text-sm text-blue-400">
              <a>
                <span className="inline-block py-1 px-3 text-xs font-semibold rounded-mainColor rounded-xl mr-3">
                  News
                </span>
              </a>
              <span className="text-blueGray-400 text-xs">01 Oct, 2022</span>
            </p>
            <h3 className="my-2 text-2xl font-bold font-heading">
              <a>군사법원 국선변호인 위촉</a>
            </h3>
            <p className="text-blueGray-400 leading-loose">
              제2지역 군사법원 국선변호인 위촉
              <br />
              위촉지간 : 2022년 10월 ~ 2023년 12월
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
