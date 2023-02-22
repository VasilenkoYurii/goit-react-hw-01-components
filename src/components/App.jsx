import Profile from 'components/Profile/Profile';
import users from 'data/user';
import Statistics from 'components/Statistics/Statistics';
import data from 'data/data';
import FriendList from 'components/FriendList/FriendList';
import friends from 'data/friends';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from 'data/transactions';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={users.username}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
        stats={users.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
