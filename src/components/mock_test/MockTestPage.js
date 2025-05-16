import styled from "styled-components";
import { exam1, exam2 } from "../../data/mock_exam";
import { useState } from "react";

const MockTestPageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TestRouteBtn = styled.button`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #d7dfe5;
  padding: 8px 16px;
  background-color: transparent;
  border: 1.5px solid rgba(214, 224, 230, 0.2);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 10px;

  &:hover {
    background-color: rgba(35, 149, 233, 0.4);
  }
`;

const MockTestPage = () => {
  const testList = [exam1, exam2];
  const [test, selectTest] = useState(null);

  return (
    <MockTestPageContainer>
      {test === null ? (
        testList.map((exam, idx) => (
          <TestRouteBtn key={idx} onClick={() => selectTest(exam)}>
            {`${idx + 1}회 실전 모의고사`}
          </TestRouteBtn>
        ))
      ) : (
        <h1>선택된 시험: {test.title || `${test.length}문제 있음`}</h1>
      )}
    </MockTestPageContainer>
  );
};

export default MockTestPage;
