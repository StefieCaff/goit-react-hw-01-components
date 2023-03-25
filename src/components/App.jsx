import user from 'data/user.json'
import { Profile } from './User/Profile';

import data from 'data/statistics.json';
import { Statistics } from './Statistics/Statistics';


// import friends from 'data/friends.json';
// import { FriendList } from './Friends/FriendList';

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
     
      <Statistics stats={data} />
      <Statistics title= 'Upload Stats' stats={data} /> 
      
      {/* <FriendList friends={friends} /> */}

    </>
  );
};