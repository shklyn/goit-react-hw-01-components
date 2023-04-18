import styled from '@emotion/styled';

export const StatsBox = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border: 5px solid #2ac3f4;
  padding: 20px 20px 10px 20px;
  width: 350px;
  border-radius: 30px;
  background-color: #d6cfee73;
  margin-top: 30px;
  gap: 5px;
`;
export const StatsTitle = styled.h2`
  font-size: 25px;
  font-weight: 700;
  margin: 0;
`;
export const StatsList = styled.ul`
  display: flex;
  list-style: none;
  gap: 12px;
  align-items: center;
  justify-content: center;
  margin: 0;
  margin-top: 10px;
  padding: 0;
`;
export const StatsItem = styled.li`
  background-color: #abb9f7;
  width: 50px;
  border: 3px solid #9a9af4;
  border-radius: 20px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 50px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 8px;
  transition: scale 0.3s ease;
  &:hover {
    scale: 1.15;
  }
`;
export const StatsLabel = styled.span`
  margin: 0;
`;
export const StatsPercentage = styled.span`
  margin: 0;
  font-weight: 700;
`;
