import { Row, Col, Container, Card, Form, Button } from "react-bootstrap"
import { LuPencil, LuPlus } from "react-icons/lu"
import { BsArrowRight } from "react-icons/bs"
import { useState, useEffect } from "react"

type ExperienceReference = {
  role: string
  company: string
  startDate: string
  endDate: string
  description: string
  area: string
  userName?: string
  image?: string
  createdAt?: string
  updatedAt?: string
  __v?: number
  _id?: string
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
    _id: "5d925e677360c41e0046d1f6", // SERVER GENERATED
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
    _id: "5d925e677360c41e0046d1f7", // SERVER GENERATED
  },
]

const ProfileExperiences = function () {
  const [esperienze, setEsperienze] = useState<ExperienceReference[]>([])
  const [show, setShow] = useState(false)
  useEffect(() => {
    setEsperienze(consultedExperiences)
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e?.currentTarget)
    const newExperience: ExperienceReference = {
      role: formData.get("role") as string,
      company: formData.get("company") as string,
      startDate: formData.get("startDate") as string,
      endDate: formData.get("endDate") as string,
      area: formData.get("area") as string,
      description: formData.get("description") as string,
    }
    setEsperienze([...esperienze, newExperience])
    console.log(esperienze)
  }
  console.log(esperienze)
  const handleShow = () => {
    setShow(true)
  }
  const handleClose = () => {
    setShow(false)
  }
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
                onClick={() => {
                  handleShow()
                }}
              />
              <LuPencil className="mt-2" style={{ cursor: "pointer" }} />
            </Col>
          </Row>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 d-flex flex-row flex-wrap justify-content-around ">
              <Col className="mb-2" xs={12} md={5}>
                <Form.Label>Ruolo</Form.Label>
                <Form.Control type="textarea" name="role" />
              </Col>
              <Col className="mb-2" xs={12} md={5}>
                <Form.Label>Compagnia</Form.Label>
                <Form.Control type="textarea" name="company" />
              </Col>
              <Col className="mb-2" xs={12} md={5}>
                <Form.Label>Data di inizio</Form.Label>
                <Form.Control type="textarea" name="startDate" />
              </Col>
              <Col className="mb-2" xs={12} md={5}>
                <Form.Label>Data di fine</Form.Label>
                <Form.Control type="textarea" name="endDate" />
              </Col>
              <Col className="mb-2" xs={12} md={5}>
                <Form.Label>Luogo</Form.Label>
                <Form.Control type="textarea" name="area" />
              </Col>
              <Col className="mb-2" xs={12} md={5}>
                <Form.Label>Descrizione</Form.Label>
                <Form.Control type="textarea" name="description" />
              </Col>
              <Col xs={12} className="text-center">
                <Button
                  type="submit"
                  className="bg-primary text-light px-3 m-0"
                >
                  Submit
                </Button>
              </Col>
            </Form.Group>
          </Form>

          {esperienze.map((experience, i) => (
            <Container key={experience._id}>
              <Row>
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
              {i < esperienze.length - 1 ? <hr /> : ""}
            </Container>
          ))}
        </Card.Body>
        <hr className="m-0 p-0" />
        <h6 className="text-center my-3" style={{ cursor: "pointer" }}>
          Mostra tutte le esperienze({esperienze.length})&nbsp;
          <BsArrowRight />
        </h6>
      </Card>
    </Container>
  )
}
export default ProfileExperiences
