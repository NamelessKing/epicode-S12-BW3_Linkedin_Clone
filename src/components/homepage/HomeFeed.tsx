import { Card } from "react-bootstrap";

const HomeFeed = () => {
  return (
    <div>
      <Card className="mb-3">
        <Card.Body>
          <h6>HomeFeed</h6>
          <p className="small text-muted">
            Crea post, feed di post degli utenti
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeFeed;
