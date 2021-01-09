import React from 'react';
import s from './OneTopFriend.module.css';

const OneTopFriend = (props) => {
    return (
        <div className={s.friend}>
            <div className={s.friendIcon}>
                <img className={s.friendImg} src={props.image}/>
            </div>
            <div>
                <h6 className={s.navbarFriendName}>{props.name}</h6>
            </div>
        </div>
    );
};

export default OneTopFriend;