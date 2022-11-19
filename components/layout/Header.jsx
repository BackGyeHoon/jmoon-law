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
            {/* <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
              <li className="group relative pt-4 pb-4 has-child">
                <Link href="/">
                  <a
                    className={
                      scroll
                        ? "text-sm font-semibold hover:text-blueGray-500 text-mainColor-600"
                        : "text-sm font-semibold text-whiteColor-600 hover:text-blueGray-500"
                    }
                  >
                    Home
                  </a>
                </Link>
                <ul className="drop-down-menu min-w-200">
                  <li>
                    <Link href="/">
                      <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                        Landing page 1
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-2">
                      <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                        Landing page 2
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-3">
                      <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                        Landing page 3
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-4">
                      <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                        Landing page 4
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-5">
                      <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                        Landing page 5
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="pt-4 pb-4">
                <Link href="/about">
                  <a
                    className={
                      scroll
                        ? "text-sm font-semibold hover:text-blueGray-500 text-mainColor-600"
                        : "text-sm font-semibold text-whiteColor-600 hover:text-blueGray-500"
                    }
                  >
                    About Us
                  </a>
                </Link>
              </li>
              <li className="pt-4 pb-4">
                <Link href="/services">
                  <a
                    className={
                      scroll
                        ? "text-sm font-semibold hover:text-blueGray-500 text-mainColor-600"
                        : "text-sm font-semibold text-whiteColor-600 hover:text-blueGray-500"
                    }
                  >
                    Services
                  </a>
                </Link>
              </li>
              <li className="group relative pt-4 pb-4 has-child">
                <Link href="#">
                  <a
                    className={
                      scroll
                        ? "text-sm font-semibold hover:text-blueGray-500 text-mainColor-600"
                        : "text-sm font-semibold text-whiteColor-600 hover:text-blueGray-500"
                    }
                  >
                    Company
                  </a>
                </Link>
                <ul className="drop-down-menu min-w-200">
                  <li>
                    <Link href="/portfolio">
                      <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                        Portfolio
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/team">
                      <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                        Team
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/testimonials">
                      <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                        Testimonials
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing">
                      <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                        Pricing
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faqs">
                      <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                        Faqs
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/404">
                      <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                        404
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="group relative pt-4 pb-4 has-child">
                <Link href="#">
                  <a
                    className={
                      scroll
                        ? "text-sm font-semibold hover:text-blueGray-500 text-mainColor-600"
                        : "text-sm font-semibold text-whiteColor-600 hover:text-blueGray-500"
                    }
                  >
                    Blog
                  </a>
                </Link>
                <ul className="drop-down-menu min-w-200">
                  <li>
                    <Link href="/blog">
                      <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                        Category 1
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-2">
                      <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                        Category 2
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-single">
                      <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                        Single 1
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-single-2">
                      <a className="menu-sub-item text-sm text-mainColor-600 hover:text-blueGray-500">
                        Single 2
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="pt-4 pb-4">
                <Link href="/contact">
                  <a
                    className={
                      scroll
                        ? "text-sm font-semibold hover:text-blueGray-500 text-mainColor-600"
                        : "text-sm font-semibold text-whiteColor-600 hover:text-blueGray-500"
                    }
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul> */}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
