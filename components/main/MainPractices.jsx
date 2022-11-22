import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function MainPractices() {
  const datas = [
    {
      title: "민사",
      description:
        "대여금, 미수금, 보증금, 매매대금, 공사대금, 투자금, 부당이득금 등 민사 문제에 대하여 최적의 솔루션을 제공합니다.",
      image: "practices_01.jpg",
    },
    {
      title: "형사",
      description:
        "사기, 횡령, 배임, 공갈, 협박, 명예훼손, 모욕, 문서위조, 손괴, 뇌물 등 형사 문제에 대하여 최적의 솔루션을 제공합니다.",
      image: "practices_02.jpg",
    },
    {
      title: "행정",
      description:
        "국가유공자, 요양불승인, 부당해고, 운전면허, 영업정지 등 행정 문제에 대하여 최적의 솔루션을 제공합니다.",
      image: "practices_03.jpg",
    },
    {
      title: "손해배상",
      description:
        "교통사고, 산재사고, 의료사고, 보이스피싱, 일조권침해, 인접공사 등 손해배상 문제에 대하여 최적의 솔루션을 제공합니다.",
      image: "practices_04.jpg",
    },
    {
      title: "성범죄 피해",
      description:
        "강간, 준강간, 강제추행, 미성년자의제, 아청법, 성폭법 등 성범죄 피해 문제에 대하여 최적의 솔루션을 제공합니다.",
      image: "practices_05.jpg",
    },
    {
      title: "조세•관세",
      description:
        "법인세, 부가가치세, 양도소득세, 상속세, 증여세, 종합부동산세, 관세 등 세금 문제에 대하여 최적의 솔루션을 제공합니다.",
      image: "practices_06.jpg",
    },
    {
      title: "건설•부동산",
      description:
        "토지경계, 수용보상, 재개발, 재건축, 조합, 분양,  인테리어 등 건설 및 부동산 문제에 대하여 최적의 솔루션을 제공합니다.",
      image: "practices_07.jpg",
    },
    {
      title: "학교폭력",
      description:
        "학교폭력대책심의위원회 진술조력, 불복(행정심판 및 행정소송) 등 학교폭력 문제에 대하여 최적의 솔루션을 제공합니다.",
      image: "practices_08.jpg",
    },
    {
      title: "노동•소청",
      description:
        "부당해고, 임금·퇴직금·각종 수당 미지급, 단체협약,  공무원 징계 등 노동 및 소청 문제에 대하여 최적의 솔루션을 제공합니다.",
      image: "practices_09.jpg",
    },
    {
      title: "가사",
      description:
        "이혼, 혼인무효, 상간녀소송, 성년후견, 친생자관계, 친생부인, 가족관계등록부정정 등 가사 문제에 대하여 최적의 솔루션을 제공합니다.",
      image: "practices_10.jpg",
    },
    {
      title: "산업재해",
      description:
        "요양, 휴업, 장해, 유족 등 산업재해 문제에 대하여 최적의 솔루션을 제공합니다.",
      image: "practices_11.jpg",
    },
    {
      title: "환경소송",
      description:
        "대기, 수질, 소음, 진동, 일조 등 환경 문제에 대하여 최적의 솔루션을 제공합니다.",
      image: "practices_12.jpg",
    },
    {
      title: "출입국(foreigner)",
      description:
        "국적취득(일반/특별), 추방명령, 임시보호조치, 난민신청 등 출입국 문제에 대하여 최적의 솔루션을 제공합니다.",
      image: "practices_13.jpg",
    },
    {
      title: "지식재산권",
      description:
        "특허권, 실용신안권, 디자인권, 상표권, 저작권 등 지식재산권 문제에 대하여 최적의 솔루션을 제공합니다.",
      image: "practices_14.jpg",
    },
    {
      title: "기업법무",
      description:
        "스타트업, 동업계약, 주주총회, 이사회, 계약서 검토, 각종 인허가 관련 법령 검토 등 기업문제에 대하여 최적의 솔루션을 제공합니다.",
      image: "practices_15.jpg",
    },
  ];
  return (
    <section
      className="py-20 bg-blueGray-50 practices-conatiner"
      id="how-we-work"
    >
      <div className="container">
        <div className="flex flex-wrap items-center justify-between lg:max-w-full mb-12 practices-container">
          <div className="w-full lg:w-1/ lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeInDown">
              <span>PRACTICES</span>
              {/*<span>We are </span>*/}
              {/*<span className="text-mainColor-600">awesome team </span>*/}
              {/*<br />*/}
              {/*<span>for your business dream</span>*/}
            </h2>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-blueGray-400 leading-loose wow animate__animatedanimated animate__fadeIn practices-title">
              전문성을 바탕으로 최적의 솔루션을 제공합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 -mb-6 text-center our-slide-container">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            className="mySwiper"
            loop={false}
            pagination={{
              clickable: true,
            }}
            navigation={{
              clickable: true,
              prevEl: ".our_prev",
              nextEl: ".our_next",
            }}
            modules={[Pagination, Navigation]}
            breakpoints={{
              450: {
                // width: 576,
                slidesPerView: 3,
              },
            }}
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
                      <p className="text-sm text-blueGray-400 leading-relaxed custom-pb-20 prcatices-description">
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
