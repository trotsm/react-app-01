import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";

const MyPosts = (props) => {

    let postItems = props.postsData
        .map(p => <Post message={p.postMessage} likesCount={p.likesCount}/>);

    return (
        <div className={s.postsSectoin}>
            <h2>My posts</h2>
            <AddPost/>
            {postItems}
        </div>
    );
};

export default MyPosts;