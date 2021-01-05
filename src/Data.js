import React from 'react';
import Post from "./components/pages/Profile/MyPosts/Post/Post";
import Message from "./components/pages/Dialogs/Message/Message";
import DialogItem from "./components/pages/Dialogs/DialogItem/DialogItem";

const Data = () => {

    let postsData = [
        {message: 'This is first post', likesCount: 1},
        {message: 'This is 2 post', likesCount: 12},
        {message: 'This is 3 post', likesCount: 43},
        {message: 'This is 4 post', likesCount: 11}
    ];


    let dialogsData = [
        {name: 'Oleh', id: '' + 1},
        {name: 'Ivan', id: '' + 2},
        {name: 'Stepan', id: '' + 3},
        {name: 'Olha', id: '' + 4},
        {name: 'Kateryna', id: '' + 5}
    ];

    let messagesData = [
        {message: 'Hello, how are you?'},
        {message: 'Call me back, please!'},
        {message: 'Where are you from?'},
        {message: 'Hello world'},
        {message: 'I am waiting for you'}
    ];





};

export default Data;