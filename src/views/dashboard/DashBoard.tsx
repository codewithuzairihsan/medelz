import React from "react";
import { Layout } from "antd";
import HeroTitle from "../../components/heroTitle/HeroTitle";
import Navbar from "../navbar/Navbar";
import "antd/dist/antd.min.css";
import { Main } from "./DashBoard.style";
import { Competition } from "../competition/Competition";
import Categories from "../categories/Categories";

const Dashboard = () => {
  const subtitle = "Share your Talent with the world & earn Medelz";
  return (
    <>
      <Layout>
        <Main>
          <Navbar />
          <HeroTitle
            title={
              <h1>
                Be the Star <br /> You were born to be
              </h1>
            }
            subtitle={subtitle}
          />
        </Main>
      </Layout>
      <Layout>
        <Competition />
      </Layout>
      <Layout>
        <Categories />
      </Layout>
    </>
  );
};

export default Dashboard;
