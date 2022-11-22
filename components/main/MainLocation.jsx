import React from "react";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";

export default function MainLocation() {
  return (
    <section
      className="bg-top bg-no-repeat location-container"
      style={{ backgroundImage: "url('assets/imgs/elements/blob.svg')" }}
    >
      <div className="container px-4 mx-auto">
        <div className="relative location-address-content">
          <div className="mx-auto text-center">
            <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animated animate__fadeIn">
              <span className="text-mainColor-600">LOCATION</span>
            </h2>
            <div className="location-information">
              <p className="text-blueGray-400 location-information-text">
                주소 : 경기도 시흥시 서울대학로264번길 35 배곧아브뉴프랑 그린동
                419호(버거킹 건물)
              </p>
              <p className="text-blueGray-400 location-information-text">{`대중교통 : 오이도역 2번출구 -> 70번버스 -> 배곧파출소 하차`}</p>
            </div>
          </div>
        </div>
      </div>
      <Map
        center={{ lat: 37.36747934301813, lng: 126.72868508702689 }}
        style={{ width: "100%", height: "360px" }}
      >
        <CustomOverlayMap // 커스텀 오버레이를 표시할 Container
          // 커스텀 오버레이가 표시될 위치입니다
          position={{
            lat: 37.36747934301813,
            lng: 126.72868508702689,
          }}
        >
          {/* 커스텀 오버레이에 표시할 내용입니다 */}
          <div className="location-label" style={{ color: "#000" }}>
            <img
              src="/icons/icon-logo.png"
              alt="법률사무소정문"
              title="법률사무소정문"
              className="locatio-logo"
            />
          </div>
        </CustomOverlayMap>
      </Map>
    </section>
  );
}
