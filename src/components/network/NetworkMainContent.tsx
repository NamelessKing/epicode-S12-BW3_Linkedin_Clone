import { Card, Row, Col, Button } from "react-bootstrap";

const suggestions = [
  {
    name: "Giulia Bianchi",
    title: "UX Designer",
    avatar: "https://i.pravatar.cc/150?img=15",
    mutual: 4,
  },
  {
    name: "Luca Verdi",
    title: "Data Analyst",
    avatar: "https://i.pravatar.cc/150?img=32",
    mutual: 2,
  },
  {
    name: "Sara Rossi",
    title: "Frontend Developer",
    avatar: "https://i.pravatar.cc/150?img=47",
    mutual: 1,
  },
];

const NetworkMainContent = () => {
  return (
    <Card className="network-card shadow-sm p-3">
      {/* HEADER */}
      <h5 className="fw-bold mb-3">Persone che potresti conoscere</h5>

      <Row>
        {suggestions.map((user, index) => (
          <Col xs={12} md={6} lg={4} key={index} className="mb-4">
            <div className="network-user-card p-3 shadow-sm">
              <img src={user.avatar} className="network-avatar mb-2" />

              <h6 className="fw-bold">{user.name}</h6>
              <p className="text-muted small mb-1">{user.title}</p>
              <p className="text-muted small">{user.mutual} collegamenti in comune</p>

              <Button variant="outline-primary" size="sm" className="mt-2 w-100">
                Connetti
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default NetworkMainContent;
