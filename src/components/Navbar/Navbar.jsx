import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import TopFriends from "./TopFriends/TopFriends";

const Navbar = (props) => {
    return (
        <div className={s.leftMenu}>
            <ul>
                <li><NavLink to="/profile" activeClassName={s.active}>Profile </NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={s.active}>Message </NavLink></li>
                <li><NavLink to="/news" activeClassName={s.active}>News </NavLink></li>
                <li><NavLink to="/music" activeClassName={s.active}>Music </NavLink></li>
                <li><NavLink to="/settings" activeClassName={s.active}>Settings </NavLink></li>
            </ul>
            <TopFriends state={props.state.friendsData}/>
        </div>
    );
};

export default Navbar;