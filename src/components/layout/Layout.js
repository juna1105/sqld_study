import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

const LayoutContainer = styled.div`
  min-height: 100vh;
  background-color: #081017;
`;

const MainContent = styled.div`
  display: flex;
  min-height: calc(100vh - 70px); // Header 높이를 뺀 값
`;

const Layout = ({ children, activeItem, onItemClick }) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        <Sidebar activeItem={activeItem} onItemClick={onItemClick} />
        {children}
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout;
