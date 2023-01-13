 import { user, data } from 'data/index';
 import { Profile } from 'components/Profile/Profile';
 import { Statistics } from 'components/Statistics/Statistics';
 
 export const App = () => {
  return (
    <>
<Profile user={user} />
<Statistics title="Upload stats" stats={data} />
    </>
  );
};
