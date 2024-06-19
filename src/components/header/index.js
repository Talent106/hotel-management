import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import classNames from "classnames";
import Logo from "../../assets/logo.jpg";
import Logo1 from "../../assets/logo1.png";
import Menu from "../../constracts/Menu";
import './Header.scss';

const Header = () => {
	const [active, setActive] = useState("/");
	// const navigate = useNavigate();

	const handleNav = (e) => {
		setActive(e);
		// navigate(e);
	}

	return (
	<div className="header">
		<div className="baner">
			<img className="logo" src={Logo} />
			<img className="logo" src={Logo1} />
			<div className="auth">
				<a href="/login" className=""><i className="bi-lock-fill me-2"/>Login</a>
				<a>|</a>
				<a href="/register" className=""><i className="bi-person-fill-add me-2"/>Sign UP</a>
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