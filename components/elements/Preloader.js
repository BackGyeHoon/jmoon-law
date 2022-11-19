import React from "react";

const Preloader = () => {
  return (
    <>
      <div id="preloader-active">
        <div className="preloader flex-1 content-center">
          <div className="logo absolute inset-y-2/4 jump">
            <img src="/imgs/logos/logo-jungmoon.png" alt="jungmoon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
