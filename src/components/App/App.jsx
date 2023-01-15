 import { user, data, friends, transactions } from 'data/index';
 import { Profile } from 'components/Profile/Profile';
 import { Statistics } from 'components/Statistics/Statistics';
 import { FriendList } from 'components/FriendList/FriendList';
 import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory'
 
 export const App = () => {
  return (
    <>
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics title="UPLOAD STATS" stats={data} />
<FriendList friends={friends} />
<TransactionHistory items={transactions} />
    </>
  );
};
