import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import NavbarButtons from "../components/NavbarButtons";
import { Box } from "@mui/material";

export default function Navbars() {
  return (
    <Box style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand className="logo" href="#home">
              Job Board
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="">
                <Nav.Link href="#home">Post Your Vacancy</Nav.Link>
                <Nav.Link href="#link">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div style={{ marginRight: "35px" }}>
        <div style={{ display: "flex", gap: '10px'}}>
          <NavbarButtons title="Sign Up" color="Yellow" fontColor= "Black"/>
          <NavbarButtons title="Login"/>
        </div>
      </div>
    </Box>
  );
}
