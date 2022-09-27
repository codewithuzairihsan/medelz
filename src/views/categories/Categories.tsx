import React from "react";
import {
  CatergoryTitle,
  CategoryContainer,
  CategoryHeading,
  MainDiv,
  CategoryRow,
  CategoryCol,
  CategoryImage,
  CategoryName,
  CategoryColor,
} from "./Categories.style";
import music from "./music.png";

function Categories() {
  return (
    <>
      <CategoryContainer>
        <CatergoryTitle>Categories</CatergoryTitle>
        <CategoryHeading>CATEGORIES</CategoryHeading>
        <MainDiv>
          <CategoryRow>
            <CategoryCol>
              <CategoryImage src={music} alt="music" preview={false} />
              <CategoryColor>
                <CategoryName>Music</CategoryName>
              </CategoryColor>
            </CategoryCol>
            <CategoryCol>
              <CategoryImage src={music} alt="Music" preview={false} />

              <CategoryColor>
                <CategoryName>Music App</CategoryName>
              </CategoryColor>
            </CategoryCol>
          </CategoryRow>
        </MainDiv>
      </CategoryContainer>
    </>
  );
}

export default Categories;
