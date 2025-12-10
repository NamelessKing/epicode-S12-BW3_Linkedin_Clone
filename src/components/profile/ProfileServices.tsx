import { Container, Col, Row, Card } from "react-bootstrap"
import { LuPencil } from "react-icons/lu"
import { BsArrowRight } from "react-icons/bs"

const ProfileServices = function () {
  return (
    <Container className="mb-3">
      <Card>
        <Card.Body>
          <Row>
            <Col>
              <Card.Title>Servizi</Card.Title>
            </Col>
            <Col className="text-end">
              <LuPencil className="mt-2" style={{ cursor: "pointer" }} />
            </Col>
          </Row>

          <Card.Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quo
            pariatur porro sed reiciendis, aut animi est, voluptatem sint
            dolores perferendis atque ab fugiat eligendi. Nemo saepe accusantium
            mollitia veniam.
          </Card.Text>
          <hr />
          <Card.Text
            as={"h6"}
            className="text-center"
            style={{ cursor: "pointer" }}
          >
            Mostra tutti i servizi <BsArrowRight />
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}
export default ProfileServices
