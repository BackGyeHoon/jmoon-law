import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function MainMap() {
  return (
    <Map
      center={{ lat: 37.36747934301813, lng: 126.72868508702689 }}
      style={{ width: "100%", height: "360px" }}
    >
      <MapMarker position={{ lat: 37.36747934301813, lng: 126.72868508702689 }}>
        <div style={{ color: "#000" }}>법률사무소 정문</div>
      </MapMarker>
    </Map>
  );
}
