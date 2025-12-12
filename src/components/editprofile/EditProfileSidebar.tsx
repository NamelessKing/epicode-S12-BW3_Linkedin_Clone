import { Card, Button } from "react-bootstrap";
import { useAppSelector } from "../../store";
import {
  BsBookmark,
  BsPeopleFill,
  BsNewspaper,
  BsCalendarEvent,
} from "react-icons/bs";
import "./EditProfileSidebar.css";

const EditProfileSidebar = () => {
  // ==== USER DATA DAL REDUX ====
  const user = useAppSelector((state) => state.user.data);

  // ==== NUMERI FISSI ====
  const profileViews = 365; // Visitatori del profilo
  const postImpressions = 650; // Impressioni del post

  return (
    <Card className="mb-3">
      {/* === BANNER === */}
      <div className="banner"></div>

      {/* === FOTO PROFILO === */}
      <div className="d-flex justify-content-center profileImageContainer">
        <img
          src={user?.image}
          alt="profile"
          width={80}
          height={80}
          className="rounded-circle border border-2 border-white"
        />
      </div>

      {/* === INFO UTENTE === */}
      <Card.Body className="text-center">
        <h6 className="fw-bold mb-0">
          {user?.name} {user?.surname} <span>✓</span>
        </h6>
        <p className="text-muted small mb-1">{user?.title}</p>
        <p className="text-muted small">{user?.area}</p>

        <Button
          size="sm"
          variant="outline-secondary"
          className="rounded-pill px-3 mt-1"
        >
          + Esperienza
        </Button>
      </Card.Body>

      <hr className="m-0" />

      {/* === STATISTICHE === */}
      <Card.Body className="pb-0">
        <div className="d-flex justify-content-between small mb-2">
          <span className="text-muted">Visitatori del profilo</span>
          <span className="text-primary fw-semibold">{profileViews}</span>
        </div>

        <div className="d-flex justify-content-between small">
          <span className="text-muted">Impressioni del post</span>
          <span className="text-primary fw-semibold">{postImpressions}</span>
        </div>
      </Card.Body>

      <hr className="m-0" />

      {/* === BOX PREMIUM === */}
      <Card.Body>
        <p className="small text-muted mb-1">
          Ottieni 4 volte più visite del profilo
        </p>
        <p className="text-warning small fw-semibold mb-1">
          🟨 Riattiva Premium con il 50% di sconto
        </p>
      </Card.Body>

      <hr className="m-0" />

      {/* === LISTA SEZIONI === */}
      <Card.Body className="pb-3">
        <div className="d-flex align-items-center gap-2 mb-3">
          <BsBookmark /> <span className="small">Elementi salvati</span>
        </div>

        <div className="d-flex align-items-center gap-2 mb-3">
          <BsPeopleFill /> <span className="small">Gruppi</span>
        </div>

        <div className="d-flex align-items-center gap-2 mb-3">
          <BsNewspaper /> <span className="small">Newsletter</span>
        </div>

        <div className="d-flex align-items-center gap-2">
          <BsCalendarEvent /> <span className="small">Eventi</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EditProfileSidebar;
