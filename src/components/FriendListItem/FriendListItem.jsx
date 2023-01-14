import PropTypes from 'prop-types';
import {
    FriendsItem,
    FriendsStatus,
    FriendsName,
} from './FriendListItem.style'

function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <FriendsItem key={id}>
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