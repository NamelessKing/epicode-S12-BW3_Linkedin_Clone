import { Container, Card, Button, Badge } from "react-bootstrap";
import { LuPencil } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import { useAppSelector } from "../../store";
import "./profileHeaderCard.css";
import { useNavigate } from "react-router-dom";

const ProfileHeaderCard = () => {
  const user = useAppSelector((state) => state.user.data);
  const navigate = useNavigate();

  return (
    <Container className="mb-3">
      <Card className="rounded-3 overflow-hidden">
        {/* Header Background Image */}
        <div className="position-relative">
          <Card.Img
            src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="headerImg"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <Badge
            bg="light"
            className="position-absolute top-0 end-0 m-3 p-2 rounded-circle"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/edit-profile")}
          >
            <LuPencil size={18} style={{ color: "#666" }} />
          </Badge>
        </div>

        <Card.Body className="position-relative" style={{ paddingTop: "80px" }}>
          {/* Profile Image */}
          <img
            src={user?.image}
            className="profileImg"
            alt={`${user?.name} ${user?.surname}`}
          />

          {/* User Info */}
          <div className="user-info-section">
            <div className="d-flex align-items-center gap-2 mb-1">
              <h2 className="mb-0 fw-semibold fs-4">
                {user?.name} {user?.surname}
              </h2>
              <FaCheckCircle className="text-muted" size={16} />
            </div>
            <p className="mb-1 fs-6">{user?.title}</p>
            <p className="text-muted mb-1 small-text">
              {user?.area} ·{" "}
              <a
                href="#"
                className="text-primary text-decoration-none fw-semibold"
              >
                Informazioni di contatto
              </a>
            </p>
            <a href="#" className="text-primary fw-semibold small-text">
              300 collegamenti
            </a>
          </div>

          {/* Action Buttons */}
          <div className="d-flex flex-wrap gap-2 my-3">
            <Button
              variant="primary"
              size="sm"
              className="rounded-pill px-3 fw-semibold"
            >
              Disponibile per
            </Button>
            <Button
              variant="outline-primary"
              size="sm"
              className="rounded-pill px-3 fw-semibold"
            >
              Aggiungi sezione del profilo
            </Button>
            <Button
              variant="outline-secondary"
              size="sm"
              className="rounded-pill px-3 fw-semibold"
            >
              Migliora profilo
            </Button>
            <Button
              variant="outline-secondary"
              size="sm"
              className="rounded-pill px-3 fw-semibold"
            >
              Risorse
            </Button>
          </div>

          {/* Disponibile a lavorare Card */}
          <Card className="disponibile-card border-0 bg-light mt-3">
            <Card.Body className="d-flex justify-content-between align-items-start p-3">
              <div>
                <h6 className="mb-1 fw-semibold">Disponibile a lavorare</h6>
                <p className="mb-1 text-muted small">Ruoli di {user?.title}</p>
                <a href="#" className="text-primary fw-semibold small">
                  Mostra dettagli
                </a>
              </div>
              <LuPencil className="text-muted" style={{ cursor: "pointer" }} />
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </Container>
  )
};

export default ProfileHeaderCard;
