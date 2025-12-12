import { Card, ListGroup } from 'react-bootstrap';
import './JobsStyles.css';
import { useAppSelector } from '../../store';
const JobsSidebar = () => {
  const currentUser = useAppSelector((state) => state.user.data);
  console.log('', currentUser);

  return (
    <div>
      <Card className="jobs-sidebar-card mb-3 shadow-sm">
        <div
          className="d-flex justify-content-center mt-2"
          style={{ marginTop: '-36px' }}
        >
          <img
            src={currentUser?.image}
            alt="immagine del profilo"
            width={120}
            height={120}
            className="rounded-circle border border-2 border-white"
          />
        </div>
        {/* <div className="rounded-circle jobs-profile-placeholder mb-3"></div> */}
        <Card.Body className="text-center">
          <h6 className="fw-bold mb-1">
            {currentUser?.name} {currentUser?.surname}
          </h6>
          <p className="text-muted small">
            Completa il profilo per migliori offerte
          </p>
        </Card.Body>
      </Card>

      <Card className="jobs-sidebar-card shadow-sm">
        <ListGroup variant="flush">
          <ListGroup.Item className="jobs-menu-item">
            Offerte salvate
          </ListGroup.Item>
          <ListGroup.Item className="jobs-menu-item">
            Candidature
          </ListGroup.Item>
          <ListGroup.Item className="jobs-menu-item">
            Avvisi lavoro
          </ListGroup.Item>
          <ListGroup.Item className="jobs-menu-item">
            Aziende che segui
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default JobsSidebar;
