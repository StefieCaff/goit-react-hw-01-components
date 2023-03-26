import PropTypes from 'prop-types';
import { Span } from "./styled-friend-list.";


export const FriendList = ({ friends }) => {

    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <FriendListItem  {...friend } />
        ))}
        </ul>
    );

};

const FriendListItem = ({
    avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    name,
    isOnline,
    id
}) => {
    console.log(id);
    console.log(isOnline);
    return (
        <li key={id} className="item">
            <Span className="status">{isOnline}</Span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </li >
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
};