import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let messageItems = props.state.messagesData
        .map(m => <Message dialogMessage={m.dialogMessage}/>);

    let diaalogItems = props.state.dialogsData
        .map(d => <DialogItem name={d.name} id={d.id} dialogImage={d.dialogImage}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let updateMessageText = () => {
        let texMessage = newMessageElement.current.value;
        let action = updateMessageTextActionCreator(texMessage);
        props.dispatch(action);
    };

    return (
        <div className={s.dialogsPage}>
            <div className={s.dialogItems}>
                {diaalogItems}
            </div>
            <div className={s.verticalLine}></div>
            <div className={s.messages}>
                {messageItems}
                <div className={s.addMessage}>
                    <textarea onChange={updateMessageText}
                              ref={newMessageElement}
                              value={ props.state.newMessage}/>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;