import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const MyNavbar = () => {
  const location = useLocation();
  const [activeKey, setActiveKey] = useState(location.pathname);
  const [myStyle, setMyStyle] = useState({
    backgroundColor: "#FFDE21",
    transition: "transform 0.3s ease-in-out",
  });
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  

  return (
    <Navbar
      className={`fixed-top py-3 my-navbar`}
      collapseOnSelect
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="/">
          
          <span
            className="navtitle"
            style={{ fontWeight: "900", color: "var(--my-black)" }}
          >
            TIRTHDOM
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="/"
              className="me-4 hover-target"
              active={activeKey === "/"}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/games"
              className="me-4 hover-target"
              active={activeKey === "/games"}
            >
                Games
            </Nav.Link>
            <Nav.Link
              href="/about"
              className=" hover-target"
              active={activeKey === "/about"}
            >
              About us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
