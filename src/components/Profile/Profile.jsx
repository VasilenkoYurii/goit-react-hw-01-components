import PropTypes from 'prop-types';
// import css from 'components/Profile/Profile.module.css';
import {
  ProfileCard,
  ProfileDescription,
  AvatarImg,
  AvatarName,
  AvatarTag,
  AvatarLocation,
  ProfileStats,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <ProfileDescription>
        <AvatarImg src={avatar} alt="User avatar" />
        <AvatarName>{username}</AvatarName>
        <AvatarTag>@{tag}</AvatarTag>
        <AvatarLocation>{location}</AvatarLocation>
      </ProfileDescription>

      <ProfileStats>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItem>
      </ProfileStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
