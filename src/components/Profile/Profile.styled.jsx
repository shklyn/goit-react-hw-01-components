import styled from '@emotion/styled';

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 5px solid #2ac3f4;
  padding: 20px;
  width: 350px;
  border-radius: 30px;
  background-color: #d6cfee73;
`;
export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 200px;
  border: 5px solid #2ac3f4;
  transition: scale 0.3s ease;
  &:hover {
    scale: 1.15;
  }
`;
export const ProfileName = styled.p`
      margin-bottom: 0;
    font-size: 25px;
    font-weight: 700;
`;
export const ProfileTag = styled.p`
  margin-bottom: 0;
  color: #9a8989;
  font-size: 20px;
  transition: scale 0.3s ease;
  &:hover {
    scale: 1.15;
  }
`;
export const ProfileLocation = styled.p`
  color: #9a8989;
  font-size: 20px;
  transition: scale 0.3s ease;
  &:hover {
    scale: 1.15;
  }
`;
export const ProfileStatsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const ProfileStatsItem = styled.div`
  background-color: #abb9f7;
  width: 80px;
  border: 3px solid #9a9af4;
  border-radius: 30px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 50px;
  align-items: center;
  justify-content: center;
  padding: 3px;
  transition: scale 0.3s ease;
  &:hover {
    scale: 1.15;
  }
`;
export const ProfileStatsLabel = styled.p`
  margin: 0;
`;
export const ProfileStatsValue = styled.p`
  margin: 0;
  font-weight: 700;
`;
