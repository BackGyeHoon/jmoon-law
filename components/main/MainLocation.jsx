import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function MainLocation() {
  return (
    <section
      className="bg-top bg-no-repeat location-container"
      style={{ backgroundImage: "url('assets/imgs/elements/blob.svg')" }}
    >
      <div className="container px-4 mx-auto">
        <div className="relative location-address-content">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animated animate__fadeIn">
              <span className="text-mainColor-600">LOCATION</span>
            </h2>
          </div>
        </div>
      </div>
      <Map
        center={{ lat: 37.36747934301813, lng: 126.72868508702689 }}
        style={{ width: "100%", height: "360px" }}
      >
        <MapMarker
          position={{ lat: 37.36747934301813, lng: 126.72868508702689 }}
        >
          <div style={{ color: "#000", width: "150px", textAlign: "center" }}>
            법률사무소 정문
          </div>
        </MapMarker>
      </Map>
    </section>
  );
}
