import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className='profile'>
            <ProfileInfo/>
            <hr/>
            <MyPosts postsData={props.state.postsData}
                     dispatch={props.dispatch}
                     newPostText={props.state.newPostText}/>
        </div>
    );
};

export default Profile;