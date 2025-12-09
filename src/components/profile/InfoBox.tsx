import { Col, Container, Row, Card } from "react-bootstrap"
import { LuPencil } from "react-icons/lu"
import { useAppSelector } from "../../store"
import { useNavigate } from "react-router-dom"
const InfoBox = function () {
  const navigate = useNavigate()
  const user = useAppSelector((state) => state.user.data)
  return (
    <Container className="mb-3">
      <Card>
        <Card.Body>
          <Row>
            <Col>
              <Card.Title>Informazioni</Card.Title>
            </Col>
            <Col className="text-end">
              <LuPencil
                className="mt-2"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/modify")
                }}
              />
            </Col>
          </Row>

          <Card.Text>{user?.bio}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}
export default InfoBox
