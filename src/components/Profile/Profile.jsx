import {
  ProfileContainer,
  Description,
  UserName,
  InfoUser,
  StatsList,
  ItemStatsList,
  LabelStats,
  QuantityStats,
} from './Profile.style.jsx';
import PropTypes from 'prop-types';

function Profile({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <ProfileContainer>
      <Description>
        <img src={avatar} alt={username} className="avatar" />

        <UserName>{username}</UserName>
        <InfoUser>@{tag}</InfoUser>
        <InfoUser>{location}</InfoUser>
      </Description>

      <StatsList>
        <ItemStatsList>
          <LabelStats>Followers</LabelStats>
          <QuantityStats>{followers}</QuantityStats>
        </ItemStatsList>
        <ItemStatsList>
          <LabelStats>Views</LabelStats>
          <QuantityStats>{views}</QuantityStats>
        </ItemStatsList>
        <ItemStatsList>
          <LabelStats>Likes</LabelStats>
          <QuantityStats>{likes}</QuantityStats>
        </ItemStatsList>
      </StatsList>
    </ProfileContainer>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};

export { Profile };
