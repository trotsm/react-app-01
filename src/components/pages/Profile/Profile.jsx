import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className='profile'>
            <ProfileInfo/>
            <hr/>
            <MyPosts postsData={props.state.postsData}/>
        </div>
    );
};

export default Profile;