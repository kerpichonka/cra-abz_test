import React from 'react';
import './Header.scss';
import logo from '../../images/logo.svg';

export const Header = ({ list, mobileList }) => {
  return (
  <header className="header">
    <div className="header__body">
      <a href="#" className="header__logo">
        <img src={logo} alt="logo" className="header__logo-img"/>
      </a>
      <nav className="header__nav">
        <ul className="header__nav-list">
          {list.map(item => (
            <li key={item} className="header__nav-item">
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button type="button" className="header__menu-button">
        <img 
          src="menu-icon.svg" 
          alt="button" 
          className="header__menu-icon"
        />
      </button>
    </div>
  </header>
  )
}
