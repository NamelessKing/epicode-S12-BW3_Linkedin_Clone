import { Card, Row, Col } from "react-bootstrap"
import { BiChevronDown } from "react-icons/bi"
import { BsEyeSlashFill, BsInfoSquareFill } from "react-icons/bs"
import { CgChevronDown } from "react-icons/cg"
import { TbSquareChevronDownFilled } from "react-icons/tb"

const EditProfileSidebarRight = () => {
  return (
    <div>
      <Card className="mb-3">
        <Card.Body>
          <Row>
            <Col md={10}>
              <h6>LinkedIn Notizie</h6>
            </Col>
            <Col md={2} className="text-end">
              <BsInfoSquareFill />
            </Col>
          </Row>
          <p className="text-secondary mb-0">Storie principali</p>
          <b className="small">Netflix compra Warner Bros.</b>
          <p className="small text-secondary mb-0">23 ore fa • 1.680 lettori</p>
          <b className="small text-truncate d-block" style={{ width: "100%" }}>
            Come é andato alla fine il black friday
          </b>
          <p className="small text-secondary mb-0">22 ore fa • 255 lettori</p>
          <b className="small text-truncate d-block" style={{ width: "100%" }}>
            In malattia con la televisita
          </b>
          <p className="small text-secondary mb-0">16 ore fa • 121 lettori</p>
          <b className="small text-truncate d-block" style={{ width: "100%" }}>
            Mediaset acquisisce radio norba
          </b>
          <p className="small text-secondary mb-0">16 ore fa </p>
          <b className="small text-truncate d-block" style={{ width: "100%" }}>
            La Bei finanzia Scalapay
          </b>
          <p className="text-secondary small mb-0">1 ora fa </p>
          <h6 style={{ cursor: "pointer" }}>
            Mostra altro <CgChevronDown />
          </h6>
          <br />
          <h6 className="text-secondary">Il rompigatto di oggi</h6>
          <Row>
            <Col md={4} className="align-self-center">
              <img
                src="https://placecats.com/100/100"
                className="img-fluid"
                alt=""
              />
            </Col>
            <Col md={8}>
              <h6>Cat-Un rompigatto veloce</h6>
              <p className="text-secondary small mb-0">
                Risolvilo in 60 secondi o meno!
              </p>
              <p className="text-secondary small mb-0">
                <BsEyeSlashFill /> &nbsp; Solo tu puoi vedere il punteggio
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Row>
        <Col md={6}>
          <p
            style={{ cursor: "pointer" }}
            className="text-secondary mb-2 text-end"
          >
            Informazioni
          </p>
        </Col>
        <Col md={6}>
          <p style={{ cursor: "pointer" }} className="text-secondary mb-0">
            Accessibilitá
          </p>
        </Col>
      </Row>

      <p
        style={{ cursor: "pointer" }}
        className="text-secondary mb-2 text-center"
      >
        Centro assistenza
      </p>

      <p
        style={{ cursor: "pointer" }}
        className="text-secondary mb-2 text-center"
      >
        Privacy e condizioni <BiChevronDown />
      </p>

      <p
        style={{ cursor: "pointer" }}
        className="text-secondary mb-2 text-center"
      >
        Opzioni per gli annunci pubblicitari
      </p>
      <Row>
        <Col md={4}>
          <p
            style={{ cursor: "pointer" }}
            className="text-secondary text-end mb-2"
          >
            Pubblicitá
          </p>
        </Col>
        <Col md={8}>
          <p style={{ cursor: "pointer" }} className="text-secondary mb-0">
            Servizi alle aziende <BiChevronDown />
          </p>
        </Col>
        <Col md={8}>
          <p
            style={{ cursor: "pointer" }}
            className="text-secondary text-end mb-2"
          >
            Scarica l'app LinkedIn
          </p>
        </Col>
        <Col md={4}>
          <p style={{ cursor: "pointer" }} className="text-secondary mb-0">
            Altro
          </p>
        </Col>
      </Row>
      <p className="text-center">
        <img
          src="src/assets/Linkedin-Logo.png"
          style={{ height: "35px" }}
          alt=""
        />
        LinkedIn Corporation©2025
      </p>
    </div>
  )
}

export default EditProfileSidebarRight
