 import { user, data, friends, transactions } from 'data/index';
 import { Profile } from 'components/Profile/Profile';
 import { Statistics } from 'components/Statistics/Statistics';
 import { FriendList } from 'components/FriendList/FriendList';
 import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory'
 
 export const App = () => {
  return (
    <>
<Profile user={user} />
<Statistics title="UPLOAD STATS" stats={data} />
<FriendList friends={friends} />
<TransactionHistory items={transactions} />
    </>
  );
};
