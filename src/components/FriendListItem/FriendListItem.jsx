import PropTypes from 'prop-types';
import {
    FriendsItem,
    FriendsStatus,
    FriendsName,
} from './FriendListItem.style'

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendsItem>
      <FriendsStatus isOnline={isOnline} />
      <img className='avatar' src={avatar} alt={name} width="100" />
      <FriendsName>{name}</FriendsName>
    </FriendsItem>
  );
}

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export { FriendListItem };