import React from "react";
import { Col, Image } from "antd";
import "antd/dist/antd.min.css";
import {
  Container,
  MainContainer,
  StyledCarouselTitle,
  StyledCarouselRow,
  StyledCarouselDetails,
  StyledCarouselCol,
  StyledCarouselImageCol,
  CarouselWrapper,
  StyledCarouselButton,
} from "./Competition.style";

import { Data } from "./Data";

export const Competition = () => {
  return (
    <>
      <MainContainer>
        <Container>
          <CarouselWrapper>
            {Data.map((item) => {
              return (
                <StyledCarouselRow>
                  <StyledCarouselCol span={11}>
                    <StyledCarouselTitle>{item.title}</StyledCarouselTitle>
                    <StyledCarouselDetails>
                      {item.details}
                    </StyledCarouselDetails>
                    <Col span={8}>
                      <StyledCarouselButton size="large" ghost>
                        Click here for details
                      </StyledCarouselButton>
                    </Col>
                  </StyledCarouselCol>
                  <StyledCarouselImageCol span={11}>
                    <Image src={item.imgurl} preview={false} />
                  </StyledCarouselImageCol>
                </StyledCarouselRow>
              );
            })}
          </CarouselWrapper>
        </Container>
      </MainContainer>
    </>
  );
};
