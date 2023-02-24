import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  border-spacing: 1px;
`;

export const Th = styled.th`
  background-color: #6cdcff;

  width: 500px;
  padding: 20px 0 20px 0;
`;

export const Tr = styled.tr`
  &:nth-of-type(1n) {
    background-color: #fff;
  }

  &:nth-of-type(2n) {
    background-color: #bababa;
  }
`;

export const Td = styled.td`
  padding-top: 10px;
  padding-bottom: 10px;

  &:nth-of-type(1) {
    padding-left: 150px;
  }

  &:nth-of-type(2) {
    border: 1px;
    text-align: center;
  }

  &:nth-of-type(3) {
    border: 1px;
    text-align: center;
  }
`;
