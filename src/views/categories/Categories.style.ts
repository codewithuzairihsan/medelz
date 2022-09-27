import { Col, Image, Row } from "antd";
import styled from "styled-components";
const CategoryContainer = styled.div`
  background: black;
`;

const CatergoryTitle = styled.div`
  color: white;
  position: absolute;
  left: 44%;
  /* transform: translate(662px, 1%); */
  z-index: 2;
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  margin-top: 64px;
`;
const CategoryHeading = styled.p`
  margin-top: 40px;
  font-size: 79px;
  font-weight: bold;
  text-align: center;
  background: black;
  text-shadow: 0px 0px 0px rgb(255 229 166 / 16%),
    0px 0px 3px rgb(255 229 166 / 40%);
`;
const MainDiv = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
`;

const CategoryRow = styled(Row)`
  display: flex;
  justify-content: space-between;
`;
const CategoryCol = styled(Col)`
  flex-basis: 33%;
  /* border-radius: 10px; */
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
`;

const CategoryImage = styled(Image)`
  width: 100%;
  display: block;
`;

const CategoryColor = styled.div`
  background: transparent;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s;
  &:hover {
    background: rgba(120, 190, 33, 0.3);
  }
`;

const CategoryName = styled.h3`
  width: 100%;
  font-weight: bold;
  color: #fff;
  font-size: 26px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  opacity: 0;
  transition: 0.5s;
  & :hover {
    bottom: 49%;
    opacity: 1;
  }
`;

export {
  CatergoryTitle,
  CategoryContainer,
  CategoryHeading,
  MainDiv,
  CategoryRow,
  CategoryCol,
  CategoryImage,
  CategoryName,
  CategoryColor,
};
