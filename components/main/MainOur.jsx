import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function MainOur() {
  const datas = [
    {
      title: "민사소송",
      description: "구체적인 사실관계 파악과 깊이 있는 법리연구를 토대로 제반 법률문제에 대하여 의뢰인의 재산을 지켜낼 수 있도록 종합적인 법률 솔루션을 제공합니다.",
      image: "practices_01.jpg",
    },
    {
      title: "형사소송",
      description: "끈질긴 법리제시와 전략적인 양형자료 구성을 토대로 어떠한 경우에도 의뢰인의 권리가 최대한 보호될 수 있도록 종합적인 법률 솔루션을 제공합니다.",
      image: "practices_02.jpg",
    },
    {
      title: "행정소송",
      description: "행정소송 수행·지휘 경험과 감사원 변호사 경력을 토대로 각종 행정처분에 대하여 권리구제가 이루어질 수 있도록 종합적인 법률 솔루션을 제공합니다.",
      image: "practices_03.jpg",
    },
    {
      title: "손해배상",
      description: "교통사고, 의료사고, 공작물 사고, 제조물 책임, 인접공사, 일조권침해, 주식 일임매매, 보이스피싱으로 인한 손해배상 사건을 특화하여 전문적인 법률 솔루션을 제공합니다.",
      image: "practices_04.jpg",
    },
    {
      title: "성범죄",
      description: "압도적인 데이터를 토대로 의뢰인의 인격이나 명예가 손상되지 않도록 절차적 권리보호에 힘쓰고 동시에 실질적인 피해회복이 되도록 전문적인 법률 솔루션을 제공합니다.",
      image: "practices_05.jpg",
    },
    {
      title: "조세•관세",
      description: "조세소송 수행·지휘 경험과 국세청 변호사 경력을 토대로 각종 세금에 대하여 불이익한 부과·징수가 이루어지지 않도록 종합적인 법률 솔루션을 제공합니다.",
      image: "practices_06.jpg",
    },
    {
      title: "건설•부동산",
      description: "인테리어, 토지경계, 수용보상, 건설 등 건설·부동산과 관련한 제반 법률문제에 대하여 민사, 조세, 형사, 행정 등 종합적인 법률 솔루션을 제공합니다.",
      image: "practices_07.jpg",
    },
    {
      title: "학교폭력",
      description: "압도적인 학교폭력 사건 수행경험과 학교폭력소위원회 위원장 경력을 토대로 민사, 형사, 행정 등 종합적인 법률 솔루션을 제공합니다.",
      image: "practices_08.jpg",
    },
    {
      title: "노동•소청",
      description: "임금, 퇴직금, 각종 수당 미지급 문제는 물론 각종 징계처분에 대한 전문성을 토대로 민사, 형사, 행정 등 종합적인 법률 솔루션을 제공합니다.",
      image: "practices_09.jpg",
    },
    {
      title: "가사소송",
      description: "이혼, 혼인무효, 친생자관계, 상속, 후견, 양육비 등과 관련한 다양한 사건 수행 경험을 토대로 조정, 합의 등 초기 단계에서부터 종합적인 법률 솔루션을 제공합니다.",
      image: "practices_10.jpg",
    },
    {
      title: "산업재해",
      description: "요양, 휴업, 장해, 유족 등 다양한 유형의 산업재해 사건에서의 소송대리 및 국가 측 소송지휘 경험을 토대로 사고와 질병에 대한 종합적인 법률 솔루션을 제공합니다.",
      image: "practices_11.jpg",
    },
    {
      title: "환경소송",
      description: "압도적인 환경소송 수행·지휘 경험과 감사원 변호사 경력을 토대로 대기, 수질, 소음, 진동, 일조 등 다양한 유형의 환경사건에 대한 종합적인 법률 솔루션을 제공합니다.",
      image: "practices_12.jpg",
    },
    {
      title: "출입국•외국인",
      description: "출입국외국인청에 대한 지휘 경험을 토대로 추방명령, 보호조치 등 외국인의 인권과 직결된 중요한 사안에 대하여 종합적인 법률 솔루션을 제공합니다. ",
      image: "practices_13.jpg",
    },
    {
      title: "지식재산권",
      description: "전문 지식과 노하우를 토대로 지식재산권 제반 법률문제에 대하여 가능한 모든 수단을 통해 의뢰인의 이익을 지켜내도록 종합적인 법률서비스를 제공합니다.",
      image: "practices_14.jpg",
    },
    {
      title: "기업법무",
      description: "스타트업 초기 단계에서 발생하는 이슈는 물론 기업 운영 과정에서 직면할 수 있는 리스크를 관리할 수 있도록 각종 자문 및 소송대리 등 종합적인 법률서비스를 제공합니다.",
      image: "practices_15.jpg",
    },
  ];
  return (
    <section className="py-20 bg-blueGray-50" id="how-we-work">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeInDown">
              <span>PRACTICES</span>
              {/*<span>We are </span>*/}
              {/*<span className="text-mainColor-600">awesome team </span>*/}
              {/*<br />*/}
              {/*<span>for your business dream</span>*/}
            </h2>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-blueGray-400 leading-loose wow animate__animatedanimated animate__fadeIn">
              다양한 분야에서의 전문성을 바탕으로
              클라이언트에게 최적의 법률 솔루션을 제공합니다.
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
