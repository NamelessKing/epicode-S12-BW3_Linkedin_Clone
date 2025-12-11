import { Container, Col, Row, Card, Button, Badge } from "react-bootstrap"
import { LuPencil } from "react-icons/lu"
import { MdOutlineWorkOutline, MdAlternateEmail } from "react-icons/md"
import { useAppSelector } from "../../store"
import "./profileHeaderCard.css"
import { useNavigate } from "react-router-dom"

const ProfileHeaderCard = () => {
  const user = useAppSelector((state) => state.user.data)
  const navigate = useNavigate()

  return (
    <Container className="mb-3">
      <Card className="rounded-2">
        <Row>
          <Card.Img src="https://placecats.com/400/100" className="headerImg" />

          <Badge bg="light" pill className="pill p-0 pt-1 pb-1">
            <LuPencil
              className="m-0"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/edit-profile")
              }}
            />
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
              <div>
                <MdOutlineWorkOutline className="d-inline" />
                <a className="ms-1" href="">
                  {user?.title}
                </a>
              </div>
              <div>
                <MdAlternateEmail />
                <a className="ms-1" href="">
                  {user?.email}
                </a>
              </div>
            </Col>
          </Row>

          <Row className="mt-2">
            <Button className="btn btn-outline-info w-25">
              Disponibile per
            </Button>
            <Button className="btn btn-outline-info w-25">
              Aggiungi sezione
            </Button>
            <Button className="btn btn-outline-info w-25">
              Migliora profilo
            </Button>
            <Button className="btn btn-outline-info w-25">Risorse</Button>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ProfileHeaderCard
