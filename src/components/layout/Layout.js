import React from "react";
import styled from "styled-components";
import Header from "./Header";

const LayoutContainer = styled.div`
  min-height: 100vh;
  background-color: #081017;
`;

const MainContent = styled.div`
  display: flex;
  min-height: calc(100vh - 70px); // Header 높이를 뺀 값
  padding-top: 70px; // 헤더 높이만큼 상단 패딩 추가
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>{children}</MainContent>
    </LayoutContainer>
  );
};

export default Layout;
