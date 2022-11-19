import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <section className="py-20">
        <div
          className="container px-4 mx-auto wow animate__animated animate__fadeIn"
          data-wow-delay=".3s"
        >
          <div className="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left footer-top-content">
            <div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
              <Link href="/">
                <a className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none">
                  <Image
                    src={"/imgs/logos/logo-jungmoon.png"}
                    width={190}
                    height={40}
                  />
                </a>
              </Link>
            </div>
            <div className="footer-top-right">
              <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0 footer-office-text">
                <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
                  Office
                </p>
                <p className="lg:text-lg text-blueGray-400">
                  경기도 시흥시 서울대학로264번길 35 배곧아브뉴프랑 그린동
                  419호(버거킹 건물)
                </p>
              </div>
              <div className="w-full lg:w-1/5 px-3">
                <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
                  Contacts
                </p>
                <p className="lg:text-lg text-blueGray-400">031-434-4001</p>
                <p className="lg:text-lg text-blueGray-400">
                  jmoonlaw@naver.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:justify-between">
            <p className="text-sm text-blueGray-400">
              &copy; 2022. All rights reserved. by{" "}
              <a
                className="text-mainColor-600"
                href="https://blog.naver.com/jmoonlaw"
                target="_blank"
              >
                LAW FIRM JEONGMOON
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
