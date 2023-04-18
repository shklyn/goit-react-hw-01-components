import PropTypes from 'prop-types';
import { FriendListWrap } from './FriendList.styled';
import { FriendsItem } from 'components/FriendsItem/FriendsItem';

export const FriendList = ({ friends }) => {

    return (
        <FriendListWrap>
            {friends.map(friend => {
        return (
          <FriendsItem
            key={friend.id}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
            name={friend.name}
          />
        );
      })}
      </FriendListWrap>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};

