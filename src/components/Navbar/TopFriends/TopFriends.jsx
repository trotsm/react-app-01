import React from 'react';
import s from './TopFriends.module.css';
import OneTopFriend from "./OneTopFriend/OneTopFriend";

const TopFriends = (props) => {
    let friendItem = props.state
        .map(p => <OneTopFriend name={p.friendName} friendImage={p.friendImage}/>);

    return (
            <div className={s.friends}>
                <h3 className={s.titleTopFriends}>Top-Friends</h3>
                <div className={s.topFriendContainer}>
                    { friendItem }
                </div>
            </div>
    );
};

export default TopFriends;