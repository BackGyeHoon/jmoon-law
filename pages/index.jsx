import React from "react";
import Layout from "../components/layout/Layout";
import Slider1 from "../components/slider/Slider1";
import MainKeyVisual from "../components/main/MainKeyVisual";
import MainProfile from "../components/main/MainProfile";
import MainNews from "../components/main/MainNews";
import MainOur from "../components/main/MainOur";
import MainMap from "../components/main/MainMap";
import MainDealsAndCases from "../components/main/MainDealsAndCases";
import MainLocation from "../components/main/MainLocation";

function Home() {
  return (
    <>
      <Layout children={undefined}>
        <MainKeyVisual />
        <MainProfile />
        <MainOur />
        <MainNews />
        <MainDealsAndCases />
        <MainLocation />
      </Layout>
    </>
  );
}
export default Home;
