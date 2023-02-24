import styled from '@emotion/styled';

export const SectionStatistics = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;

  background-color: #fff;
`;

export const StatisticsTitle = styled.h2`
  color: #646161;
  font-weight: 400;
  font-size: 45px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 110px;
  align-items: center;

  color: #fff;

  &:nth-of-type(1) {
    background-color: #00d6f7;
  }
  &:nth-of-type(2) {
    background-color: #9d4dff;
  }
  &:nth-of-type(3) {
    background-color: #ff4343;
  }
  &:nth-of-type(4) {
    background-color: #00d5a4;
  }
  &:nth-of-type(5) {
    background-color: #0358d8;
  }
`;

export const ListItemLabel = styled.span`
  font-size: 25px;
  padding-bottom: 10px;
`;

export const ListItemPercentage = styled.span`
  font-size: 50px;
`;
