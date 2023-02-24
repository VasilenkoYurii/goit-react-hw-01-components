import PropTypes from 'prop-types';
// import css from 'components/FriendListItem/FriendListItem.module.css';
import {
  Item,
  ItemStatus,
  ItemAvatsr,
  ItemName,
} from './FriendsListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <ItemStatus online={isOnline}>{isOnline}</ItemStatus>
      <ItemAvatsr src={avatar} alt="User avatar" width="48" />
      <ItemName>{name}</ItemName>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
