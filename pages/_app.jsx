import "../public/css/animate.min.css";
import React, { useEffect, useState } from "react";
import "../public/css/tailwind-built.css";
// import Preloader from '../components/elements/Preloader';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function MyApp({ Component, pageProps }) {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //     setLoading(true);
  //     setTimeout(() => {
  //         setLoading(false);
  //     }, 2000);
  // }, []);
  return (
    <>
      <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=a2a0b67659c4952d1b248157bfc831e3"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
