import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  background-color: #e3dfed;
  padding: 20px;
  margin-top: 20px;
  border: 4px solid #2ac3f4;
  border-radius: 10px;
  width: 350px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const TransactionTableHead = styled.thead`
  background-color: #6cd3ef;
  color: #333;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  tr:first-of-type {
    &:hover {
      background-color: inherit;
      transform: none;
    }
  }
`;

export const TransactionTableHeadItem = styled.th`
  padding: 10px;
  border-right: 1px solid #ccc;
`;

export const TransactionTableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f5f5f5;
  }
  border-bottom: 1px solid #ccc;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
  &:hover{
    background-color: #7e67c8;
    transform: scale(1.05);
  }
`;

export const TransactionTableBody = styled.tbody``;

export const TransactionTableBodyItem = styled.td`
  padding: 10px;
  border-right: 1px solid #ccc;
  &:last-of-type {
    border-right: none;
  }
`;
