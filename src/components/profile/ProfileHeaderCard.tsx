import { Container, Col, Row, Card, Button, Badge } from "react-bootstrap";
import { LuPencil } from "react-icons/lu";
import { useAppSelector } from "../../store";
import "./profileHeaderCard.css";

const ProfileHeaderCard = () => {
  const user = useAppSelector((state) => state.user.data);

  return (
    <Container className="mb-3">
      <Card className="rounded-2">
        <Row>
          <Card.Img src="https://placecats.com/400/100" className="headerImg" />

          <Badge bg="light" pill className="pill">
            <LuPencil />
          </Badge>
        </Row>

        <Row>
          <img
            src={user?.image}
            className="w-25 profileImg"
            alt={`${user?.name} ${user?.surname} profile picture`}
          />
        </Row>
        <Card.Body>
          <Row className="cardBody">
            <Col>
              <Card.Title>
                {user?.name} {user?.surname}
              </Card.Title>
              <Card.Text>{user?.area}</Card.Text>
            </Col>
            <Col>
              <Row>
                <img className="rounded-circle" alt="Title icon" />
                <a href="">{user?.title}</a>
              </Row>
              <Row>
                <img className="rounded-circle" alt="Email icon" />
                <a href="">{user?.email}</a>
              </Row>
            </Col>
          </Row>

          <Row>
            <Button className="btn btn-outline-info w-25">
              Disponibile per
            </Button>
            <Button className="btn btn-outline-info w-25">
              Aggiungi sezione del profilo
            </Button>
            <Button className="btn btn-outline-info w-25">
              Migliora profilo
            </Button>
            <Button className="btn btn-outline-info w-25">Risorse</Button>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProfileHeaderCard;
