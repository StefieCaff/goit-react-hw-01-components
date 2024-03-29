import PropTypes from 'prop-types';
import { StyledList, StyledSpan, StyledListItem } from './styled-friend-list';


export const FriendList = ({ friends }) =>
{
    return (
        <StyledList className="friend-list">
            {friends.map(friend => (
                <FriendListItem  {...friend} />
        ))}
        </StyledList>
    );

};

const FriendListItem = props => {
    const {
        avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
        name,
        isOnline,
        id
    } = props; 

    return (
        <StyledListItem key={id} className="item">
            <StyledSpan isOnline={isOnline}/>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </StyledListItem>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
};