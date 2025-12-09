import { Container, Col, Row, Card, Button, Badge } from "react-bootstrap"
import { LuPencil } from "react-icons/lu"
import { useAppSelector } from "../../store"

const ProfileHeaderCard = () => {
  const user = useAppSelector((state) => state.user.data)

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
          <img src={user?.image} className="rounded-circle border-2 w-25" />
        </Row>
        <Card.Body>
          <Row>
            <Col>
              <Card.Title>
                {user?.name} {user?.surname}
              </Card.Title>
              <Card.Text>{user?.area}</Card.Text>
            </Col>
            <Col>
              <Row>
                <img className="rounded-circle" />
                <a href="">{user?.title}</a>
              </Row>
              <Row>
                <img className="rounded-circle" />
                <a href="">{user?.email}</a>
              </Row>
            </Col>
          </Row>

          <Row>
            <Button variant="primary" className="w-25">
              Disponibile per
            </Button>
            <Button variant="primary" className="w-25">
              Aggiungi sezione del profilo
            </Button>
            <Button variant="primary" className="w-25">
              Migliora profilo
            </Button>
            <Button variant="primary" className="w-25">
              Risorse
            </Button>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ProfileHeaderCard
