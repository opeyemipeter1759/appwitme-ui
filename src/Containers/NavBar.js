import React from "react";
import App from "../img/App.png";
import { Navbar, Nav } from "react-bootstrap";
import "./NavBar.scss";
import Login from "../Components/login";
import Signup from "../Components/signup";

function NavBar() {
	return (
		<Navbar bg="" expand="lg" className="brand">
			<Navbar.Brand href="/">
				{" "}
				<img
					src={App}
					width="40"
					height="40"
					class="d-inline-block align-top"
					alt=""
				/>
				<span className="brand-name">Appwitme</span>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="#Login">
						<Login />
					</Nav.Link>
					<Nav.Link href="#Signup">
						<Signup />
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavBar;
