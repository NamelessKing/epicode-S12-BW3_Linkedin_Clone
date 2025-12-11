import { Card } from "react-bootstrap";

const JobsSidebar = () => {
  return (
    <div>
      {/* Sezione Profilo Utente */}
      <Card className="shadow-sm mb-3">
        <Card.Body style={{ minHeight: "150px" }}>
          {/* Contenuto sezione profilo utente - da implementare */}
        </Card.Body>
      </Card>

      {/* Sezione Menu Navigazione */}
      <Card className="shadow-sm">
        <Card.Body className="p-0" style={{ minHeight: "200px" }}>
          {/* Contenuto menu navigazione - da implementare */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default JobsSidebar;
