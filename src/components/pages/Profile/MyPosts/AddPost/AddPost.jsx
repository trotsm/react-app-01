import React from 'react';
import s from './AddPost.module.css';
import {addPostActionCreator, updateTextActionCreator} from "../../../../../redux/profile-reducer";


const AddPost = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let updateText = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateTextActionCreator(text));
    };

    return (
        <div className={s.addPost}>
            <textarea onChange={updateText} ref={newPostElement} value={props.newPostText}/>
            <button onClick={addPost}>Send</button>
        </div>
    );
};

export default AddPost;