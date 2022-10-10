import React from "react";
import HeroTitle from "../../components/heroTitle/HeroTitle";
import Navbar from "./navbar/Navbar";
import "antd/dist/antd.min.css";
import {
  DiscoverLayout,
  Main,
  MainLayout,
  MainNavbarLayout,
  CompetitionLayout,
  CategoryLayout,
  FooterLayout,
} from "./DashBoard.style";
import { Competition } from "./competition/Competition";
import Categories from "./categories/CategoryHeading";
import Discover from "./dicover/Discover";
import Footer from "./footer/Footer";

const Dashboard = () => {
  const subtitle = "Share your Talent with the world & earn Medelz";
  return (
    <>
      <MainLayout>
        <MainNavbarLayout>
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
        </MainNavbarLayout>
        <CompetitionLayout>
          <Competition />
        </CompetitionLayout>
        <CategoryLayout>
          <Categories />
        </CategoryLayout>
        <DiscoverLayout>
          <Discover />
        </DiscoverLayout>
      </MainLayout>
      <FooterLayout>
        <Footer />
      </FooterLayout>
    </>
  );
};

export default Dashboard;
