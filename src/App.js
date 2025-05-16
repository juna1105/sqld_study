import React, { useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import styled from "styled-components";
import Layout from "./components/layout/Layout";
import ContentArea from "./components/layout/ContentArea";
import StudyContent from "./components/study/StudyContent";
import QuizPage from "./components/quiz/QuizPage";
import MockTestPage from "./components/mock_test/MockTestPage";
import studyContent from "./data/studyContent";
import SEO from "./components/SEO";

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #081017;
`;

function App() {
  const [activeItem, setActiveItem] = useState("데이터 모델의 이해");

  const handleItemClick = (item) => {
    setActiveItem(item);
    window.scrollTo(0, 0);
  };

  return (
    <Router>
      <AppContainer>
        <SEO />
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/study" replace />} />
            <Route
              path="/study"
              element={
                <ContentArea>
                  <SEO 
                    title="SQLD 학습 자료" 
                    description="SQLD 자격증 취득을 위한 핵심 이론 정리와 학습 자료. 데이터 모델링, SQL 기본, SQL 활용 등 SQLD 시험에 필요한 모든 내용을 정리했습니다."
                    keywords="SQLD이론, SQLD공부방법, SQLD핵심내용, SQL학습, 데이터모델링, SQLD합격"
                    path="study"
                  />
                  <StudyContent
                    item={activeItem}
                    contentData={studyContent}
                    onItemClick={handleItemClick}
                  />
                </ContentArea>
              }
            />
            <Route
              path="/quiz"
              element={
                <ContentArea>
                  <SEO 
                    title="SQLD 문제 풀이" 
                    description="SQLD 자격증 시험 대비 기출문제 및 예상문제 풀이. 실전과 동일한 형태의 문제로 SQLD 시험 합격을 준비하세요."
                    keywords="SQLD기출, SQLD문제, SQLD예상문제, SQLD시험대비, SQLD퀴즈, SQL문제풀이"
                    path="quiz"
                  />
                  <QuizPage />
                </ContentArea>
              }
            />
            <Route
              path="/mock-exam"
              element={
                <ContentArea>
                  <SEO 
                    title="SQLD 모의고사" 
                    description="SQLD 자격증 시험 합격을 위한 실전 모의고사. 시험과 동일한 환경에서 문제 풀이를 연습하고 실력을 점검하세요."
                    keywords="SQLD모의고사, SQLD실전연습, SQLD기출모음, SQLD시험준비, SQL모의시험"
                    path="mock-exam"
                  />
                  <MockTestPage />
                </ContentArea>
              }
            />
          </Routes>
        </Layout>
      </AppContainer>
    </Router>
  );
}

export default App;
