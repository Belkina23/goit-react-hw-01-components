import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendListUl } from './FriendList.style';

function FriendList({ friends }) {
  return <FriendListUl>{friends.map(FriendListItem)}</FriendListUl>;
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export { FriendList };
