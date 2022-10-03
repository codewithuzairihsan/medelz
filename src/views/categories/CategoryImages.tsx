import React from "react";
import {
  CategoryImageDiv,
  CategoryImageRow,
  CategoryImageCol,
  CategoryImage,
  // CategoryName,
  CategoryImageTitle,
} from "./CategoryImages.style";
import { Images } from "../competition/Data";
const CategoryImages = () => {
  return (
    <>
      <CategoryImageDiv>
        <CategoryImageRow>
          {Images.map((item) => {
            return (
              <CategoryImageCol>
                <CategoryImage
                  src={item.CategoryImage}
                  alt="music"
                  preview={false}
                />
                <CategoryImageTitle>
                  <h3>{item.title}</h3>
                </CategoryImageTitle>
              </CategoryImageCol>
            );
          })}
        </CategoryImageRow>
      </CategoryImageDiv>
    </>
  );
};

export default CategoryImages;
