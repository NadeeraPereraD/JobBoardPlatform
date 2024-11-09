import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import NavbarButtons from "../components/NavbarButtons";
import { Box } from "@mui/material";

export default function Navbars() {
  const navBtns = [
    {
      title: "Post Your Vacancy",
    },
    {
      title: "Contact Us",
    }
  ];

  const btns = [
    {
      title: "Sign Up",
      color: "Yellow",
      fontColor: "Black"
    },
    {
      title: "Login"
    }
  ]
  return (
    <Box style={{ display: "flex", justifyContent: "space-between", backgroundColor: '#F5F5F5' }}>
      <div>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand className="logo" href="#home">
              Job Board
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="">
                {navBtns.map((val, key) => {
                  return <Nav.Link key={key} href="#home">{val.title}</Nav.Link>
                })}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div style={{ marginRight: "35px", display: "flex",  }}>
        <div style={{ display: "flex", gap: '10px', alignItems: 'center'}}>
          {btns.map((val, key) => {
            return <NavbarButtons key={key} title={val.title} color={val.color} fontColor= {val.fontColor}/>
          })}
        </div>
      </div>
    </Box>
  );
}
