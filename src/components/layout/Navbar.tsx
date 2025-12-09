import { Navbar, Container, Form, FormControl, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import {
  FaHome,
  FaUserFriends,
  FaSuitcase,
  FaBell,
  FaComments,
} from "react-icons/fa"

import "./Navbar.css"
import LinkedinLogo from "../../assets/linkedin-svgrepo-com.svg"

const mockUser = {
  image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
}

export default function TopNavbar() {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-0 navbar-full">
      <Container
        fluid
        className="px-4 d-flex align-items-center justify-content-between"
      >
        {/* LEFT AREA */}
        <div className="d-flex align-items-center gap-3">
          {/* LOGO */}
          <Link to="/" className="navbar-logo">
            <img src={LinkedinLogo} alt="LinkedIn Logo" />
          </Link>

          {/* SEARCH BAR */}
          <Form className="search-container d-none d-md-flex">
            <FormControl
              type="search"
              placeholder="Cerca"
              className="search-input"
            />
          </Form>
        </div>

        {/* RIGHT AREA */}
        <Nav className="align-items-center navbar-icons">
          <Nav.Item className="navlink-wrapper">
            <FaHome className="icon-colored" />
            <span>Home</span>
          </Nav.Item>

          <Nav.Item className="navlink-wrapper">
            <FaUserFriends className="icon-colored" />
            <span>Rete</span>
          </Nav.Item>

          <Nav.Item className="navlink-wrapper">
            <FaSuitcase className="icon-colored" />
            <span>Lavoro</span>
          </Nav.Item>

          <Nav.Item className="navlink-wrapper">
            <FaComments className="icon-colored" />
            <span>Messaggistica</span>
          </Nav.Item>

          <Nav.Item className="navlink-wrapper">
            <FaBell className="icon-colored" />
            <span>Notifiche</span>
          </Nav.Item>

          {/* USER AVATAR */}
          <Nav.Item className="navlink-wrapper">
            <img src={mockUser.image} alt="me" className="profile-avatar" />
            <span>Tu</span>
          </Nav.Item>

          {/* GRID ICON */}
          <Nav.Item className="navlink-wrapper">
            <i className="bi bi-grid-3x3-gap-fill icon-colored"></i>
            <span>Per le aziende</span>
          </Nav.Item>

          {/* PREMIUM LINK */}
          <Nav.Item className="premium-link d-none d-lg-block">
            <a href="#" className="premium-text">
              Prova Premium per 0 EUR
            </a>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  )
}
