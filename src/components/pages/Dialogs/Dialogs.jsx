import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let messageItems = props.state.messagesData
        .map(m => <Message message={m.message}/>);

    let diaalogItems = props.state.dialogsData
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {diaalogItems}
            </div>
            <div className={s.messages}>
                {messageItems}
            </div>
        </div>
    );
};

export default Dialogs;