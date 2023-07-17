// @ts-nocheck
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

const Header = ({ handleHidden }) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={
          scroll
            ? "bg-transparent sticky-bar mt-4 stick default-header"
            : "bg-transparent sticky-bar mt-4 default-header"
        }
      >
        <div className="container bg-transparent">
          <nav className="bg-transparent flex justify-between items-center py-3">
            <Link href="/">
              <a className="text-3xl font-semibold leading-none">
                {scroll ? (
                  <Image
                    src={"/imgs/logos/logo-jungmoon.png"}
                    width={200}
                    height={40}
                  />
                ) : (
                  <Image
                    src={"/imgs/logos/logo-jungmoon-white.png"}
                    width={200}
                    height={40}
                  />
                )}
              </a>
            </Link>
            <div>
              <a
                href="https://booking.naver.com/booking/13/bizes/762538/items/4610027?area=bmp"
                target="_blank"
                className={
                  scroll
                    ? "w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none default-btn rounded contact-bold-text"
                    : "w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none default-btn rounded contact-bold-text contact-button"
                }
              >
                상담하기
              </a>
              <a
                href="https://blog.naver.com/jmoonlaw"
                target="_blank"
                className={
                  scroll
                    ? "w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none default-btn rounded contact-bold-text top-button-interval mobile-contact"
                    : "w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none default-btn rounded contact-bold-text contact-button top-button-interval mobile-contact"
                }
              >
                업무사례 확인
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
