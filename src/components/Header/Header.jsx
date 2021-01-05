import React from 'react';
import s from './Header.module.css'

const Header = () => {
  return (
      <div className={s.appHeader}>
          <div className={s.logoContainer}>
              <img className={s.logo} src="https://www.pinclipart.com/picdir/big/51-511102_design-free-logo-srj-hd-logo-png-clipart.png" alt=""/>
          </div>
          <div className={s.titleContainer}>
              <h2 className={s.title}>SocialNote</h2>
          </div>
      </div>
  );
};

export default Header;