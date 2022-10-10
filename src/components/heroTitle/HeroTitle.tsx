import React from "react";
import { TitleDiv, SubTitleDiv } from "./HeroTitle.style";

function HeroTitle(props) {
  return (
    <>
      <TitleDiv>
        <h1>{props.title}</h1>
      </TitleDiv>
      <SubTitleDiv>
        <p>{props.subtitle}</p>
      </SubTitleDiv>
    </>
  );
}

export default HeroTitle;
