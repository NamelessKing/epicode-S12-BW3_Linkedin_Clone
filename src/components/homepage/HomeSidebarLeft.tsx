import { Card } from "react-bootstrap";

const HomeSidebarLeft = () => {
  return (
    <div>
      <Card className="mb-3">
        <Card.Body>
          <h6>HomeSidebarLeft</h6>
          <p className="small text-muted">
            Profilo utente, visitatori, impressioni
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeSidebarLeft;
