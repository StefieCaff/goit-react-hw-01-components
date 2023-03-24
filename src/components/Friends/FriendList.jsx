import PropTypes from 'prop-types';


export const FriendsList = ({ friends }) => {

    return (
        <ul class="friend-list">
            {friends.map(friend => (
            <FriendsListItem/>
        ))}
        </ul>
    );

};

const FriendsListItem = ({
    avatar: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    name,
    isOnline,
    id
}) => {
    return (
        <li key={ friend.id } className="item">
            <span className="status">{ friend.isOnline }</span>
            <img className="avatar" src={ avatar } alt={ friend.name } width="48" />
            <p className="name">{ friend.name }</p>
        </li>
    );
};

FriendsListItem.PropTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
};