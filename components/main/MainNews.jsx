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
            <Link href="/blog-single">
              <a>
                <img
                  className="h-80 w-full object-cover rounded"
                  src="/assets/imgs/placeholders/img-6.png"
                  alt="Monst"
                />
              </a>
            </Link>
            <p className="mt-6 text-sm text-blue-400">
              <Link href="/blog-2">
                <a>
                  <span className="inline-block py-1 px-3 text-xs font-semibold rounded-mainColor rounded-xl mr-3">
                    Bussiness
                  </span>
                </a>
              </Link>
              <span className="text-blueGray-400 text-xs">24 Jan, 2021</span>
            </p>
            <h3 className="my-2 text-2xl font-bold font-heading">
              <Link href="/blog-single">
                <a className="hover:text-blue-500">Plan Your Project in 2022</a>
              </Link>
            </h3>
            <p className="text-blueGray-400 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis.
            </p>
          </div>
          <div
            className="w-full lg:w-2/3 px-3 mb-12 wow animate__animated animate__fadeIn animated hover-up-5"
            data-wow-delay=".3s"
          >
            <Link href="/blog-single">
              <a>
                <img
                  className="h-80 w-full object-cover rounded"
                  src="/assets/imgs/placeholders/img-7.png"
                  alt="Monst"
                />
              </a>
            </Link>
            <p className="mt-6 text-sm text-blue-400">
              <p className="mt-6 text-sm text-blue-400">
                <Link href="/blog-2">
                  <a>
                    <span className="inline-block py-1 px-3 text-xs font-semibold rounded-mainColor rounded-xl mr-3">
                      Analytics
                    </span>
                  </a>
                </Link>
                <span className="text-blueGray-400 text-xs">24 Jan, 2021</span>
              </p>
            </p>
            <h3 className="my-2 text-2xl font-bold font-heading">
              <Link href="/blog-single">
                <a className="hover:text-blue-500">
                  The Next Big Challenge for Content Marketer
                </a>
              </Link>
            </h3>
            <p className="text-blueGray-400 leading-loose">
              Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit, leo
              a semper venenatis, felis urna pulvinar nibh, vitae porta erat
              risus sed mauris. Vestibulum vehicula leo eget libero eleifend.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
