import React from 'react';
import s from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={s.message}>
            <div className={s.oneMessage}>{props.dialogMessage}</div>
        </div>
    );
};

export default Message;