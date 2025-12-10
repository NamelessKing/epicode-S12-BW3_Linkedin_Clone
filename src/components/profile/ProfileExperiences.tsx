import { Row, Col, Container, Card } from "react-bootstrap"
import { LuPencil, LuPlus } from "react-icons/lu"
import { BsArrowRight } from "react-icons/bs"

type ExperienceReference = {
  role: string
  company: string
  startDate: string
  endDate: string
  description: string
  area: string
  userName: string
  image: string
  createdAt: string
  updatedAt: string
  __v: number
  _id: string
}
const consultedExperiences: ExperienceReference[] = [
  {
    role: "Full Stack Web Developer",
    company: "FizzBuzz",
    startDate: "2022-06-16",
    endDate: "2023-06-16", // può essere null
    description: "Implementing new features",
    area: "Milan",
    userName: "mario88", // SERVER GENERATED
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80", // SERVER GENERATED, inizialmente null, modificabile
    createdAt: "2023-06-16T19:58:31.019Z",
    updatedAt: "2023-06-16T19:58:31.019Z",
    __v: 0, // SERVER GENERATED
    _id: "5d925e677360c41e0046d1f5", // SERVER GENERATED
  },
  {
    role: "Full Stack Web Developer",
    company: "FizzBuzz",
    startDate: "2022-06-16",
    endDate: "2023-06-16", // può essere null
    description: "Implementing new features",
    area: "Milan",
    userName: "mario88", // SERVER GENERATED
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80", // SERVER GENERATED, inizialmente null, modificabile
    createdAt: "2023-06-16T19:58:31.019Z",
    updatedAt: "2023-06-16T19:58:31.019Z",
    __v: 0, // SERVER GENERATED
    _id: "5d925e677360c41e0046d1f5", // SERVER GENERATED
  },
  {
    role: "Full Stack Web Developer",
    company: "FizzBuzz",
    startDate: "2022-06-16",
    endDate: "2023-06-16", // può essere null
    description: "Implementing new features",
    area: "Milan",
    userName: "mario88", // SERVER GENERATED
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80", // SERVER GENERATED, inizialmente null, modificabile
    createdAt: "2023-06-16T19:58:31.019Z",
    updatedAt: "2023-06-16T19:58:31.019Z",
    __v: 0, // SERVER GENERATED
    _id: "5d925e677360c41e0046d1f5", // SERVER GENERATED
  },
]

const ProfileExperiences = function () {
  return (
    <Container className="mb-3">
      <Card>
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <Card.Title>Esperienza</Card.Title>
            </Col>
            <Col className="text-end">
              <LuPlus
                className="mt-2 me-3 fs-5"
                style={{ cursor: "pointer" }}
              />
              <LuPencil className="mt-2" style={{ cursor: "pointer" }} />
            </Col>
          </Row>
          {consultedExperiences.map((experience, i) => (
            <>
              <Row key={experience._id}>
                <Col md={2}>
                  <img src={experience.image} alt="" />
                </Col>
                <Col md={10}>
                  <h6 className="m-0">{experience.role}</h6>
                  <small className="m-0">{experience.company}</small>
                  <small className="text-secondary d-block">
                    {experience.startDate} · {experience.endDate}
                  </small>
                  <small className="text-secondary d-block">
                    {experience.area}
                  </small>
                  <small className="">{experience.description}</small>
                </Col>
              </Row>
              {i < consultedExperiences.length - 1 ? <hr /> : ""}
            </>
          ))}
        </Card.Body>
        <hr className="m-0 p-0" />
        <h6 className="text-center my-3" style={{ cursor: "pointer" }}>
          Mostra tutte le esperienze({consultedExperiences.length})&nbsp;
          <BsArrowRight />
        </h6>
      </Card>
    </Container>
  )
}
export default ProfileExperiences
