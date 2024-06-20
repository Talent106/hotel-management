import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import classNames from "classnames";
import Logo from "../../assets/logo.jpg";
import Logo1 from "../../assets/logo1.png";
import Menu from "../../constracts/Menu";
import './Header.scss';

const Header = () => {
	const [active, setActive] = useState("/");
	const navigate = useNavigate();

	const handleNav = (e) => {
		setActive(e);
		navigate(e);
	}

	return (
	<div className="header">
		<div className="baner">
			<img className="logo" src={Logo} />
			<img className="logo" src={Logo1} />
			<div className="auth">
				<a href="/login" className="me-2"><i className="bi-lock-fill me-2"/>Login</a>
				<a>|</a>
				<a href="/register" className="ms-2 me-2"><i className="bi-person-fill-add me-2"/>Sign UP</a>
				<a>|</a>
				<Dropdown className="ms-2" as={ButtonGroup}>
					<Dropdown.Toggle id="dropdown-custom-1">
						<i className="bi bi-translate me-2"/>
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item>EN</Dropdown.Item>
						<Dropdown.Item>GE</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</div>

		<div className="menu">
			<div className="menu-btn">
				{Menu.map(item => (
					<Nav.Link
						className={classNames(active == item.url && "active")}
						onClick={() => handleNav(item.url)}
					>
						<i className={item.icon} />{item.title}
					</Nav.Link>
				))}
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