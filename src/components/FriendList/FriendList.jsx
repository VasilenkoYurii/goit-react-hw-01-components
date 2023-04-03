import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
// import css from 'components/FriendList/FriendList.module.css';
import { FriendsList } from './FriendList.stuled';

const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};

export default FriendList;
