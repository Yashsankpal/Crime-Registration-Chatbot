import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";
import MyImage from "../assets/main_logo.png";

const MyNavbar = () => {
  return (
	<Navbar fixed="top" expand="lg" style={{"backgroundColor": "transparent"}}>
	  <div className="container">
		<Navbar.Brand href="/">
		  <img src={MyImage} className="frcrce" alt="frcrce" />
		</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
		  <Nav className="ml-auto">
			<Nav.Link href="/admin" className="linky">Admin</Nav.Link>
		  </Nav>
		</Navbar.Collapse>
	  </div>
	</Navbar>
  );
};

export default MyNavbar;
