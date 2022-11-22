import React from "react";

export default function MainProfile() {
  return (
    <section className="overflow-x-hidden profile-container" id="key-features">
      <div className="container px-4 mx-auto profile-contianer">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full">
            <div
              className="lg:py-6.layout-flex wow animate__animated animate__fadeIn"
              data-wow-delay=".3s"
            >
              <div className="mb-4">
                <span
                  className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInDown rounded-mainColor"
                  data-wow-delay=".9s"
                >
                  lawyer profile
                </span>
                <h2
                  className="text-4xl text-black-400 font-heading wow animate__animated animate__fadeIn profile-title"
                  data-wow-delay=".3s"
                >
                  대표변호사{" "}
                  <span className="text-700" data-wow-delay=".9s">
                    문 일 식
                  </span>
                </h2>
                {/* <p className="text-bold" data-wow-delay=".9s">
                  변호사 변리사 세무사
                </p> */}
              </div>
              <div className="layout-flex">
                <div className="profile-left">
                  <div
                    className="flex items-start wow animate__animated animate__fadeIn"
                    data-wow-delay=".7s"
                  >
                    <div className="mobile-profile">
                      <h3 className="mb-2 text-xl font-semibold font-heading">
                        학력
                      </h3>
                      <p className="text-blueGray-400 leading-loose profile-text">
                        전남대학교 법학전문대학원 졸업 (J.D)
                      </p>
                      <p className="text-blueGray-400 leading-loose profile-text">
                        연세대학교 졸업(교육학·법학) (B.A)
                      </p>
                      <p className="text-blueGray-400 leading-loose profile-text">
                        상산고등학교 졸업
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex items-start wow animate__animated animate__fadeIn profile-qualification-content"
                    data-wow-delay=".7s"
                  >
                    <div className="mobile-profile">
                      <h3 className="mb-2 text-xl font-semibold font-heading">
                        자격
                      </h3>
                      <p className="text-blueGray-400 leading-loose profile-text">
                        변호사(2016)
                      </p>
                      <p className="text-blueGray-400 leading-loose profile-text">
                        세무사(2018)
                      </p>
                      <p className="text-blueGray-400 leading-loose profile-text">
                        변리사(2021)
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex items-start wow animate__animated animate__fadeIn profile-left-bottom"
                    data-wow-delay=".9s"
                  >
                    <div className="mobile-profile2">
                      <h3 className="mb-2 text-xl font-semibold font-heading">
                        수상
                      </h3>
                      <p className="text-blueGray-400 leading-loose">
                        대한변호사협회장상
                      </p>
                      <p className="text-blueGray-400 leading-loose">
                        법무부장관 국가송무유공 표창
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="items-start wow animate__animated animate__fadeIn layout-portfolio profile-right"
                  data-wow-delay=".9s"
                >
                  <div className="mobile-profile3">
                    <h3 className="mb-2 text-xl font-semibold font-heading">
                      경력사항
                    </h3>
                    <p className="text-blueGray-400 leading-loose">
                      現) 법률사무소 정문 대표변호사
                    </p>
                    <p className="text-blueGray-400 leading-loose">
                      現) 경기 시흥교육지원청 학교폭력소위원회 위원장
                    </p>
                    <p className="text-blueGray-400 leading-loose">
                      現) 보통군사법원 국선변호인
                    </p>
                    <p className="text-blueGray-400 leading-loose">
                      前) 인천지방국세청 징세송무국(추적과/송무과)
                    </p>
                    <p className="text-blueGray-400 leading-loose">
                      前) 인천지방국세청 과세사실판단위원회 위원
                    </p>
                    <p className="text-blueGray-400 leading-loose">
                      前) 인천지방국세청 산하 세무서 법률자문단
                    </p>
                    <p className="text-blueGray-400 leading-loose">
                      前) 감사원 변호사
                    </p>
                    <p className="text-blueGray-400 leading-loose">
                      前) 인천지검찰청 행정소송 전담 공익법무관
                    </p>
                    <p className="text-blueGray-400 leading-loose">
                      前) 대한법률구조공단 인천·광주 공익법무관
                    </p>
                    <p className="text-blueGray-400 leading-loose">
                      출입국민원대행기관 교육수료
                    </p>
                    <p className="text-blueGray-400 leading-loose">
                      미국 로펌 NELSON&MULLINS 수습
                    </p>
                    <p className="text-blueGray-400 leading-loose">
                      법원, 경찰, 국세청, 국가인권위, 국내 로펌 수습
                    </p>
                  </div>
                </div>
                <div className="profile-image">
                  <img src="/images/image-profile.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
