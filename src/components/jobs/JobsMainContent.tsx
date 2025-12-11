import { Card } from "react-bootstrap";

const JobsMainContent = () => {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        {/* Header */}
        <div className="mb-4">
          <h5 className="fw-bold mb-2">
            Le principali offerte di lavoro per te
          </h5>
          <p className="text-muted small mb-0">
            In base al tuo profilo, alle tue preferenze e ad attività come
            candidature, ricerche e salvataggi
          </p>
        </div>

        {/* Lista offerte di lavoro */}
        <div className="border-top pt-3">
          {/* Qui andranno le offerte di lavoro */}
        </div>
      </Card.Body>
    </Card>
  );
};

export default JobsMainContent;
