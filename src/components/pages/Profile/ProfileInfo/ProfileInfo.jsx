import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.profileBackground}></div>
            <div className={s.personalData}>
                <div className={s.avatar}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Crystal_personal.svg/1024px-Crystal_personal.svg.png'/>
                </div>
                <div className={s.description}>
                    <h2>Johny Black</h2>
                    <h4>Date of birth: 12/12/1999</h4>
                    <h4>City: Kyiv</h4>
                    <h4>Educetion: UOM College</h4>
                    <h4>Web site: <a href='https://www.google.com.ua/' target='_blank'>www.johny.com</a></h4>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;