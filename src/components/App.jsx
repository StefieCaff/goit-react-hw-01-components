
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
          <StyledWrapper>
            <Statistics title='Upload Stats' stats={data} />
          </StyledWrapper>
        </StyledContainer>
      </StyledSection>
      
      <StyledSection>
        <StyledContainer>
          <StyledWrapper>
            <FriendList friends={friends} />
          </StyledWrapper>
        </StyledContainer>
      </StyledSection>
      
      <StyledSection>
        <StyledContainer>
          <StyledWrapper>
            <TransactionHistory items={transactions} />
          </StyledWrapper>
        </StyledContainer>
      </StyledSection>
    </>
  );
};