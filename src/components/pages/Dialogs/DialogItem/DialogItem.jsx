import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>

            <NavLink to={path}><img className={s.dialogImg} src={props.dialogImage}/>{props.name}</NavLink>
        </div>
    );
};


export default DialogItem;