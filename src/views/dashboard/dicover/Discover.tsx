import React from "react";
import { DiscoverButton, DiscoverDiv, TitleDiv } from "./Discover.style";
const Discover = () => {
  return (
    <>
      <DiscoverDiv>
        <TitleDiv>
          <h1>Discover Musician & Artist</h1>
          <p>Learn how you can earn Medelz Pursuing your Passion</p>
        </TitleDiv>
        <DiscoverButton size="large" ghost>
          Explore
        </DiscoverButton>
      </DiscoverDiv>
    </>
  );
};

export default Discover;
