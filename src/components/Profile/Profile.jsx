import {
  ProfileBox,
  ProfileImage,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStatsBox,
  ProfileStatsItem,
  ProfileStatsLabel,
  ProfileStatsValue,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ avatar, username, location, tag, stats }) => {
  return (
    <ProfileBox>
      <ProfileImage src={avatar} alt={username} />
      <ProfileName>{username}</ProfileName>
      <ProfileTag>@{tag}</ProfileTag>
      <ProfileLocation>{location}</ProfileLocation>
      <ProfileStatsBox>
        <ProfileStatsItem>
          <ProfileStatsLabel>Followers</ProfileStatsLabel>
          <ProfileStatsValue>{stats.followers}</ProfileStatsValue>
        </ProfileStatsItem>
        <ProfileStatsItem>
                  <ProfileStatsLabel>Views</ProfileStatsLabel>
          <ProfileStatsValue>{stats.views}</ProfileStatsValue>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileStatsLabel>Likes</ProfileStatsLabel>
          <ProfileStatsValue>{stats.likes}</ProfileStatsValue>
        </ProfileStatsItem>
      </ProfileStatsBox>
    </ProfileBox>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
