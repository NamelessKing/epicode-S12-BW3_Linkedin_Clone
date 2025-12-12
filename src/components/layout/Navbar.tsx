import {
  Navbar,
  Container,
  Form,
  FormControl,
  Nav,
  Dropdown,
} from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUserFriends,
  FaSuitcase,
  FaBell,
  FaComments,
  FaSearch,
} from "react-icons/fa";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../store";
import { clearUser } from "../../store/userSlice";
import { clearActiveUser } from "../../config/auth";

import "./Navbar.css";
import LinkedinLogo from "../../assets/linkedin-svgrepo-com.svg";

const mockUser = {
  image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
};

export default function TopNavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    dispatch(clearUser());
    clearActiveUser();
    navigate("/login");
  };
  const user = useAppSelector((state) => state.user.data);

  return (
    <Navbar bg="white" className="shadow-sm py-0 navbar-full">
      <Container fluid>
        <div className="d-flex align-items-center justify-content-between w-75 mx-auto px-4">
          {/* LEFT AREA */}
          <div className="d-flex align-items-center gap-3">
            {/* LOGO */}
            <Link to="/" className="navbar-logo">
              <img src={LinkedinLogo} alt="LinkedIn Logo" />
            </Link>

            {/* SEARCH BAR */}
            <Form className="search-container d-none d-md-flex">
              <FaSearch className="search-icon" />
              <FormControl
                type="search"
                placeholder="Cerca"
                className="search-input"
              />
            </Form>
          </div>

          {/* RIGHT AREA */}
          <Nav className="align-items-center navbar-icons">
            <Nav.Item
              className={`navlink-wrapper ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link
                to="/"
                className="text-decoration-none d-flex flex-column align-items-center"
              >
                <FaHome />
                <span>Home</span>
              </Link>
            </Nav.Item>

            <Nav.Item
              className={`navlink-wrapper ${
                location.pathname === "/network" ? "active" : ""
              }`}
            >
              <Link
                to="/network"
                className="text-decoration-none d-flex flex-column align-items-center"
              >
                <FaUserFriends />
                <span>Rete</span>
              </Link>
            </Nav.Item>

            <Nav.Item
              className={`navlink-wrapper ${
                location.pathname === "/jobs" ? "active" : ""
              }`}
            >
              <Link
                to="/jobs"
                className="text-decoration-none d-flex flex-column align-items-center"
              >
                <FaSuitcase />
                <span>Lavoro</span>
              </Link>
            </Nav.Item>

            <Nav.Item
              className={`navlink-wrapper ${
                location.pathname === "/messages" ? "active" : ""
              }`}
            >
              <Link
                to="/messages"
                className="text-decoration-none d-flex flex-column align-items-center"
              >
                <FaComments />
                <span>Messaggistica</span>
              </Link>
            </Nav.Item>

            <Nav.Item
              className={`navlink-wrapper ${
                location.pathname === "/notifications" ? "active" : ""
              }`}
            >
              <Link
                to="/notifications"
                className="text-decoration-none d-flex flex-column align-items-center"
              >
                <FaBell />
                <span>Notifiche</span>
              </Link>
            </Nav.Item>

            {/* USER AVATAR DROPDOWN */}
            <Dropdown
              className="navlink-wrapper user-dropdown"
              show={showUserMenu}
              onToggle={(show) => setShowUserMenu(show)}
              align="end"
            >
              <Dropdown.Toggle
                className={`d-flex flex-column align-items-center text-decoration-none ${
                  location.pathname === "/profile" ? "active" : ""
                }`}
                id="user-dropdown"
              >
                <img
                  src={user?.image || mockUser.image}
                  alt="me"
                  className="profile-avatar"
                />
                <span>Tu</span>
              </Dropdown.Toggle>

              <Dropdown.Menu className="user-dropdown-menu">
                {user && (
                  <>
                    <Link to="/profile" className="dropdown-user-header-link">
                      <div className="dropdown-user-header">
                        <img
                          src={user.image || mockUser.image}
                          alt="user"
                          className="dropdown-avatar"
                        />
                        <div className="dropdown-user-info">
                          <h6>{user.name}</h6>
                          <p>{user.title}</p>
                        </div>
                      </div>
                    </Link>
                    <Dropdown.Divider />
                  </>
                )}
                <Dropdown.Item href="/profile" className="dropdown-button">
                  Visualizza profilo
                </Dropdown.Item>
                <Dropdown.Item
                  href="/edit-profile"
                  className="dropdown-button-secondary"
                >
                  Modifica profilo
                </Dropdown.Item>
                <Dropdown.Divider />
                <div className="dropdown-section-title">Account</div>
                <Dropdown.Item href="#">
                  Riattiva Premium con il 50% di sconto
                </Dropdown.Item>
                <Dropdown.Item href="#">Impostazioni e privacy</Dropdown.Item>
                <Dropdown.Item href="#">Guida</Dropdown.Item>
                <Dropdown.Item href="#">Lingua</Dropdown.Item>
                <Dropdown.Divider />
                <div className="dropdown-section-title">Gestisci</div>
                <Dropdown.Item href="#">Post e attività</Dropdown.Item>
                <Dropdown.Item href="#">
                  Account per la pubblicazione d...
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Esci</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* DIVIDER */}
            <div className="navbar-divider"></div>

            {/* GRID ICON */}
            <Nav.Item className="navlink-wrapper grid-section">
              <i className="bi bi-grid-3x3-gap-fill"></i>
              <span>Per le aziende</span>
            </Nav.Item>

            {/* PREMIUM LINK */}
            <Nav.Item className="premium-link d-none d-lg-block">
              <a href="#" className="premium-text">
                Prova Premium per 0 EUR
              </a>
            </Nav.Item>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}
