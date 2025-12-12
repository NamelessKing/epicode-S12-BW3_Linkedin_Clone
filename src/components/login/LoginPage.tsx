import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  setActiveUser,
  getAvailableUsers,
  type UserName,
} from "../../config/auth";
import { useAppDispatch } from "../../store";
import { fetchCurrentUser } from "../../store/userSlice";
import LinkedinLogo from "../../assets/linkedin-svgrepo-com.svg";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const availableUsers = getAvailableUsers();

  const handleLogin = async (userName: UserName) => {
    try {
      // Imposta l'utente attivo nel localStorage
      setActiveUser(userName);

      // Carica il profilo dell'utente selezionato
      await dispatch(fetchCurrentUser()).unwrap();

      // Naviga alla homepage
      navigate("/");
    } catch (error) {
      console.error("Errore durante il login:", error);
      alert("Errore durante il login. Riprova.");
    }
  };

  return (
    <div className="login-page">
      <Container fluid>
        <Row className="min-vh-100">
          {/* Left side - Branding */}
          <Col md={6} className="login-left d-none d-md-flex">
            <div className="login-brand">
              <img
                src={LinkedinLogo}
                alt="LinkedIn"
                className="login-logo mb-4"
              />
              <h1 className="login-title">
                Benvenuti nella community professionale
              </h1>
            </div>
          </Col>

          {/* Right side - Login form */}
          <Col md={6} className="login-right">
            <div className="login-container">
              <Card className="login-card">
                <Card.Body className="p-4">
                  {/* Logo mobile */}
                  <div className="text-center d-md-none mb-4">
                    <img
                      src={LinkedinLogo}
                      alt="LinkedIn"
                      className="login-logo-mobile"
                    />
                  </div>

                  <h2 className="login-heading">Accedi</h2>
                  <p className="login-subheading">
                    Seleziona un profilo per continuare
                  </p>

                  <div className="login-buttons">
                    {availableUsers.map((userName) => (
                      <Button
                        key={userName}
                        variant="outline-primary"
                        className="login-button text-capitalize"
                        onClick={() => handleLogin(userName)}
                      >
                        <i className="bi bi-person-circle me-2"></i>
                        {userName}
                      </Button>
                    ))}
                  </div>

                  <div className="text-center mt-4">
                    <small className="login-footer-text">
                      Questo è un fake login per scopi di sviluppo
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
