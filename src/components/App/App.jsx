// import css from 'components/App/App.module.css';
import { Container } from 'components/App/App.styled';
import Profile from 'components/Profile/Profile';
import users from 'data/user';
import Statistics from 'components/Statistics/Statistics';
import data from 'data/data';
import FriendList from 'components/FriendList/FriendList';
import friends from 'data/friends';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from 'data/transactions';

export const App = () => {
  return (
    <Container>
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
    </Container>
  );
};
