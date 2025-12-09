import { Container, Col, Row, Card, Button, Badge } from "react-bootstrap";
import { LuPencil } from "react-icons/lu"

const ProfileHeaderCard = () => {
  return (
    <Container className="my-3">
      <Card>
        <Row className="position-relative">
          <Card.Img variant="top" src="https://placecats.com/400/100" />

            <Badge pill className="position-absolute w">
              <LuPencil />
            </Badge>
        </Row>

        <Row className="position-absolute">
          <img className="rounded-circle border-2" />
        </Row>
        <Card.Body>
          <Row>
            <Col>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
              <Card.Text></Card.Text>
            </Col>
            <Col>
              <Row>
                <img className="rounded-circle" />
                <a href=""></a>
              </Row>
              <Row>
                <img className="rounded-circle" />
                <a href=""></a>
              </Row>
            </Col>
          </Row>

          <Row>
            <Button variant="primary">Disponibile per</Button>
            <Button variant="primary">Aggiungi sezione del profilo</Button>
            <Button variant="primary">Migliora profilo</Button>
            <Button variant="primary">Risorse</Button>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  )
};

export default ProfileHeaderCard;
