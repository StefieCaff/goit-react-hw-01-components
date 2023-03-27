
import { StyledContainer } from './Container/Container';
import { StyledSection } from './Section/Section';

import { StyledWrapper } from './Wrapper/Wrapper';

import user from 'data/user.json';
import { Profile } from './User/Profile';

import data from 'data/statistics.json';
import { Statistics } from './Statistics/Statistics';

import friends from 'data/friends.json';
import { FriendList } from './Friends/FriendList';

import transactions from 'data/transactions.json';
import { TransactionHistory } from './Transactions/TransactionHistory';


export const App = () => {

  return (
    
    <>
      <StyledSection>
        <StyledContainer>
          <StyledWrapper>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
            />
          </StyledWrapper>
        </StyledContainer>
      </StyledSection>
      
      <StyledSection>
        <StyledContainer>
          <Statistics stats={data} />
          <Statistics title='Upload Stats' stats={data} />
        </StyledContainer>
      </StyledSection>
      
      <StyledSection>
        <StyledContainer> 
          <FriendList friends={friends} />
        </StyledContainer>
      </StyledSection>
      
      <StyledSection>
        <StyledContainer>
          <TransactionHistory items={transactions} />
        </StyledContainer>
      </StyledSection>
    </>
  );
};