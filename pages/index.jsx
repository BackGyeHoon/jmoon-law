import React from "react";
import Layout from "../components/layout/Layout";
import MainKeyVisual from "../components/main/MainKeyVisual";
import MainProfile from "../components/main/MainProfile";
import MainNews from "../components/main/MainNews";
import MainPractices from "../components/main/MainPractices";
import MainDealsAndCases from "../components/main/MainDealsAndCases";
import MainLocation from "../components/main/MainLocation";

function Home() {
  return (
    <>
      <Layout
        // @ts-ignore
        children={undefined}
      >
        <MainKeyVisual />
        <MainProfile />
        <MainPractices />
        <MainNews />
        <MainDealsAndCases />
        <MainLocation />
      </Layout>
    </>
  );
}
export default Home;
