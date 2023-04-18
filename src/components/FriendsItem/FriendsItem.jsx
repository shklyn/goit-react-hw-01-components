import {
  FriendName,
  FriendStatus,
  FriendAvatar,
  FriendsItemWrap,
} from './FriendsItem.styled';
import PropTypes from 'prop-types';

export const FriendsItem = ({ avatar, isOnline, name }) => {
  const backgroundColor = isOnline ? 'green' : 'red';
  return (
    <FriendsItemWrap>
      <FriendStatus style={{ backgroundColor: backgroundColor }}></FriendStatus>
      <FriendAvatar src={avatar} alt={name}></FriendAvatar>
      <FriendName>{name}</FriendName>
    </FriendsItemWrap>
  );
};

FriendsItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
