import { Card, ListGroup } from "react-bootstrap";
import "./JobsStyles.css";

const JobsSidebar = () => {
  return (
    <div>
      <Card className="jobs-sidebar-card mb-3 shadow-sm">
        <Card.Body className="text-center">
          <div className="rounded-circle jobs-profile-placeholder mb-3"></div>
          <h6 className="fw-bold mb-1">Il tuo profilo</h6>
          <p className="text-muted small">Completa il profilo per migliori offerte</p>
        </Card.Body>
      </Card>

      <Card className="jobs-sidebar-card shadow-sm">
        <ListGroup variant="flush">
          <ListGroup.Item className="jobs-menu-item">Offerte salvate</ListGroup.Item>
          <ListGroup.Item className="jobs-menu-item">Candidature</ListGroup.Item>
          <ListGroup.Item className="jobs-menu-item">Avvisi lavoro</ListGroup.Item>
          <ListGroup.Item className="jobs-menu-item">Aziende che segui</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default JobsSidebar;

