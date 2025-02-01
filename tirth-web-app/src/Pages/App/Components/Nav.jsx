import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const MyNavbar = () => {
  const location = useLocation();

  const [activeKey, setActiveKey] = useState(location.pathname);
  const [myStyle, setMyStyle] = useState({
    transition: "transform 0.3s ease-in-out",
  });
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        // Scrolling down
        setMyStyle({
          backgroundColor: "var(--my-white)",
          boxShadow: "box-shadow: var(--my-red) 0px 25px 20px -20px;",
          transition: "transform 0.3s ease-in-out",
          borderBottom: "2px solid var(--my-red)",
        });
        setIsScrollingDown(true);
      } else {
        // Scrolling up
        setIsScrollingDown(false);
      }
      if (currentScrollY < 100) {
        setMyStyle({ transition: "transform 0.3s ease-in-out" });
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Navbar
      style={myStyle}
      className={`fixed-top py-3 my-navbar ${
        isScrollingDown ? "hide-navbar" : "show-navbar"
      }`}
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
