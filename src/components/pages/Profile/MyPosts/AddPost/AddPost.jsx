import React from 'react';
import s from './AddPost.module.css';

const AddPost = () => {
    return (
        <div className={s.addPost}>
            <textarea></textarea>
            <button>Send</button>
        </div>
    );
};

export default AddPost;