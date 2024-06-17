import React from "react";
import Form from 'react-bootstrap/Form';
import Logo from "../../assets/logo.png";
import Logo1 from "../../assets/logo1.png";
import './Header.scss';

const Header = () => {
    return (
      <div className="header">
        <div className="baner">
          <img className="logo" src={Logo} />
          <img className="logo" src={Logo1} />
          <div className="auth">
            <a href="/login" className=""><i className="bi-lock-fill me-2"/>Login</a>
            <a>|</a>
            <a href="/register" className=""><i className="bi-person-fill-add me-2"/>Register</a>
          </div>
        </div>

        <div className="menu">
          <div className="menu-btn">
            <a href="/"><i className="bi-bank2 me-2"/>HOME</a>
            <a href="/e-books"><i className="bi-book-fill me-2"/>E-BOOKS</a>
            <a href="/management"><i className="bi-gear me-2"/>MANAGEMENT</a>
            <a href="/users"><i className="bi-people-fill me-2"/>USERS</a>
          </div>
          <div className="search">
            SEARCH:
            <Form.Control type="text" placeholder="" />
          </div>
        </div>
      </div>
    )
}

export default Header;