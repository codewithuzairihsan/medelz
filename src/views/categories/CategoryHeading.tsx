import React from "react";
import {
  CategoryContainer,
  CatergoryTitle,
  CategoryHeadingStyle,
} from "./CategoryHeading.style";
import CategoryImages from "./CategoryImages";

function CategoryHeading() {
  return (
    <>
      <CategoryContainer>
        <CatergoryTitle>Categories</CatergoryTitle>
        <CategoryHeadingStyle>CATEGORIES</CategoryHeadingStyle>
        <CategoryImages />
      </CategoryContainer>
    </>
  );
}

export default CategoryHeading;
