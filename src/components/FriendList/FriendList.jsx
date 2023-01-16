import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendListUl } from './FriendList.style';

function FriendList({ friends }) {
  return <FriendListUl>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
    ))}
    </FriendListUl>;
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export { FriendList };
