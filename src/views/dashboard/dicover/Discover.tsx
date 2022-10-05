import React from "react";
import discover from "./dicover.png";
import { DiscoverDiv, DiscoverImageDiv } from "./Discover.style";

const Discover = () => {
  return (
    <>
      <DiscoverDiv>
        <DiscoverImageDiv
          // src={discover}
          // alt="Dicover"
          preview={false}
        ></DiscoverImageDiv>
      </DiscoverDiv>
    </>
  );
};

export default Discover;
