import styled from '@emotion/styled';

export const FriendsItemWrap = styled.li`
background-color: #d6cfee73;
  width: 200px;
  border: 5px solid #2ac3f4;
  border-radius: 30px;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  transition: scale 0.3s ease;
  &:hover {
    scale: 1.15;
  }
`;
export const FriendStatus = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;
export const FriendAvatar = styled.img`
  width: 60px;
`;
export const FriendName = styled.p`
margin: 0;
  font-weight: 700;
`;