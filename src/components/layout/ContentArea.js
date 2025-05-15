import React from "react";
import styled from "styled-components";

const ContentContainer = styled.main`
  flex: 1;
  padding: 24px;
  background-color: #081017;
  color: #d7dfe4;
`;

const Title = styled.h1`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.14;
  letter-spacing: -0.01em;
  margin-bottom: 12px;
`;

const NextButton = styled.button`
  background-color: #2395e9;
  color: #000000;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 500;
  font-size: 15px;
  padding: 8px 16px;
  border: none;
  border-radius: 22px;
  cursor: pointer;
  margin-top: 24px;

  &:hover {
    background-color: #1b7ac2;
  }
`;

const ContentArea = ({ children, onNext }) => {
  return (
    <ContentContainer>
      {children == null && onNext == null && <Title>{"준비 중 입니다."}</Title>}
      {children}
      {onNext && <NextButton onClick={onNext}>다음 →</NextButton>}
    </ContentContainer>
  );
};

export default ContentArea;
