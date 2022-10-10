import { Col, Image, Row } from "antd";
import styled from "styled-components";
// this is main div of Images
const CategoryImageDiv = styled.div`
  /* min-width: 100px; */
  /* margin: auto; */
  text-align: center;
`;

// This is Row inside the Div of pictures
const CategoryImageRow = styled(Row)`
  display: flex;
  justify-content: space-between;
`;

// This is Cols inside div of pictures
const CategoryImageCol = styled(Col)`
  flex-basis: 33.3333%;
  /* border-radius: 10px; */
  margin-bottom: -8px;
  position: relative;
  overflow: hidden;
`;

// This is the images inside div
const CategoryImage = styled(Image)`
  width: 510px;
  /* display: inline-block; */
`;

// This is hover effect on images in which the title appear from the bottom
const CategoryImageTitle = styled.div`
  background: linear-gradient(rgba(15,9,30,0.4),rgba(4,9,30,0.3));
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background: transparent;
  }
  h3 {
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
  }
  &:hover h3 {
    bottom: 49%;
    opacity: 1;
  }
`;

export { CategoryImageDiv,
    CategoryImageRow,
    CategoryImageCol,
    CategoryImage,
    CategoryImageTitle};