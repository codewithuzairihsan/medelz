import { Button, Carousel, Col, Row } from "antd";
import styled from "styled-components";
const MainContainer = styled.div`
  background: black;
`;
const Container = styled.div`
  width: 90%;
  margin: auto;
  padding: 5%;
`;
const CarouselWrapper = styled(Carousel)`
  > .slick-dots li button {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background: transparent;
    border: 2px solid white;
    bottom: -15px;
  }
  > .slick-dots li.slick-active button {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background: wheat;
    border: 2px solid white;
  }
  > .slick-dots-bottom {
    bottom: -15px;
  }
`;

const StyledCarouselRow = styled(Row)`
  display: flex !important;
  justify-content: space-around;
`;
const StyledCarouselTitle = styled.h1`
  font-size: 57px;
  font-weight: bold;
  color: #fff;
  text-shadow: 0px 3px 6px #000000;
  line-height: 1.3em;
`;

const StyledCarouselDetails = styled(StyledCarouselTitle)`
  color: #fff;
  font-size: 23px;
  font-weight: 200;
`;

const StyledCarouselCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledCarouselImageCol = styled(StyledCarouselCol)``;

const StyledCarouselButton = styled(Button)`
  margin-top: 20px;
  /* padding: 15px 25px; */
  /* background: transparent; */
  border: 2px solid white;
  /* color: white; */
  font-size: 23px;
  font-weight: 200;
  height: 60px;
  > span {
    padding: 3.5px 15px;
    /* text-align: center; */
  }
`;

export {
  Container,
  MainContainer,
  StyledCarouselTitle,
  StyledCarouselDetails,
  StyledCarouselRow,
  StyledCarouselCol,
  StyledCarouselImageCol,
  CarouselWrapper,
  StyledCarouselButton,
};
