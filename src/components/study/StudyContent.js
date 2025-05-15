import React from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 28px;
  font-weight: 500;
  color: #d7dfe4;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 17px;
  line-height: 1.65;
  color: #d7dfe4;
  margin-bottom: 16px;
`;

const Examples = styled.p`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #a7b7c2;
  font-style: italic;
  margin-bottom: 20px;
  padding-left: 16px;
  border-left: 3px solid #2395e9;
`;

const Subtitle = styled.h2`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 22px;
  font-weight: 500;
  color: #d7dfe4;
  margin: 24px 0 12px 0;
`;

const List = styled.ul`
  margin-bottom: 20px;
  padding-left: 20px;
`;

const ListItem = styled.li`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #d7dfe4;
  margin-bottom: 8px;
`;

const CodeBlock = styled.pre`
  background-color: #0f1923;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  font-family: "Source Code Pro", monospace;
  font-size: 14px;
  line-height: 1.5;
  color: #e9f1f8;
  margin-bottom: 20px;
  border-left: 3px solid #2395e9;
`;

const TableContainer = styled.div`
  margin: 20px 0;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 14px;
  color: #d7dfe4;
  margin-bottom: 20px;
`;

const Th = styled.th`
  background-color: #0f1923;
  padding: 12px 16px;
  text-align: left;
  border: 1px solid #2b3844;
  font-weight: 600;
`;

const Td = styled.td`
  padding: 10px 16px;
  border: 1px solid #2b3844;
  background-color: rgba(15, 25, 35, 0.5);
`;

const Caption = styled.p`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 14px;
  color: #a7b7c2;
  text-align: center;
  margin-top: 8px;
  font-style: italic;
`;

const StudyContent = ({ item, contentData }) => {
  if (!contentData || !contentData[item]) {
    return (
      <ContentContainer>
        <Title>준비 중입니다</Title>
        <Paragraph>
          선택하신 "{item}" 주제의 학습 내용을 준비 중입니다. 다른 주제를 선택해
          주세요.
        </Paragraph>
      </ContentContainer>
    );
  }

  const data = contentData[item];

  return (
    <ContentContainer>
      <Title>{data.title}</Title>
      {data.content.map((section, index) => {
        switch (section.type) {
          case "paragraph":
            return <Paragraph key={index}>{section.text}</Paragraph>;
          case "examples":
            return <Examples key={index}>{section.text}</Examples>;
          case "subtitle":
            return <Subtitle key={index}>{section.text}</Subtitle>;
          case "list":
            return (
              <List key={index}>
                {section.items.map((item, itemIndex) => (
                  <ListItem key={itemIndex}>{item}</ListItem>
                ))}
              </List>
            );
          case "code":
            return <CodeBlock key={index}>{section.text}</CodeBlock>;
          case "table":
            return (
              <TableContainer key={index}>
                <Table>
                  <thead>
                    <tr>
                      {section.headers.map((header, headerIndex) => (
                        <Th key={headerIndex}>{header}</Th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <Td key={cellIndex}>{cell}</Td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
                {section.caption && <Caption>{section.caption}</Caption>}
              </TableContainer>
            );
          default:
            return null;
        }
      })}
    </ContentContainer>
  );
};

export default StudyContent;
