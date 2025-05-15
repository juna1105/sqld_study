import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import styled from "styled-components";
import Layout from "./components/layout/Layout";
import ContentArea from "./components/layout/ContentArea";
import StudyContent from "./components/study/StudyContent";
import studyContent from "./data/studyContent";

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #081017;
`;

function App() {
  const [activeItem, setActiveItem] = useState("엔티티");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <Router>
      <AppContainer>
        <Layout activeItem={activeItem} onItemClick={handleItemClick}>
          <Routes>
            <Route path="/" element={<Navigate to="/study" replace />} />
            <Route
              path="/study"
              element={
                <ContentArea>
                  <StudyContent item={activeItem} contentData={studyContent} />
                </ContentArea>
              }
            />
            <Route path="/quiz" element={<ContentArea />} />
            <Route path="/mock-exam" element={<ContentArea />} />
          </Routes>
        </Layout>
      </AppContainer>
    </Router>
  );
}

export default App;
