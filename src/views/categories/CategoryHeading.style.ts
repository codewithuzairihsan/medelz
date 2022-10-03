import styled from "styled-components";

// This is main Container of Category
const CategoryContainer = styled.div`
  background: black;
`;
// This is CategoryHeading In the Background
const CategoryHeadingStyle = styled.p`
  margin-top: 40px;
  font-size: 79px;
  font-weight: bold;
  text-align: center;
  background: black;
  text-shadow: 0px 0px 0px rgb(255 229 166 / 16%),
    0px 0px 3px rgb(255 229 166 / 40%);
`;

//This is Category Title on top of Category Heading
const CatergoryTitle = styled.div`
  color: white;
  position: absolute;
  left: 44%;
  z-index: 2;
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  margin-top: 64px;
`;
export {
  CatergoryTitle,
  CategoryContainer,
  CategoryHeadingStyle,
 
};
