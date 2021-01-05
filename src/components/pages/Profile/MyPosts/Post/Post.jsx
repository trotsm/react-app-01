import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (

        <div className={s.post}>
            <img className={s.postAvatar}
                 src='https://media.istockphoto.com/vectors/funny-cartoon-monster-face-vector-monster-square-avatar-vector-id1212979290?k=6&m=1212979290&s=170667a&w=0&h=oFqY9UwKZaP4rD1dZwph8W0avXq4qF3NYLO8uq7d1yY='/>
            <p className={s.postText}>{props.message}<br/> {props.likesCount}</p>
        </div>
    );
};

export default Post;