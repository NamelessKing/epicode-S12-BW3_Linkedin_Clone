import { Card, ListGroup } from "react-bootstrap"
import { useAppSelector } from "../../store"

const HomeSidebarLeft = () => {
  const currentUser = useAppSelector((state) => state.user.data)

  return (
    <div className="d-flex flex-column gap-3">
      {/* PROFILO */}
      <Card className="shadow-sm rounded overflow-hidden">
        <div
          className="li-profile-banner"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800')",
          }}
        ></div>

        <div className="d-flex justify-content-center li-avatar-overlap">
          <img
            src={currentUser?.image}
            alt="immagine del profilo"
            width={72}
            height={72}
            className="rounded-circle border border-2 border-white"
          />
        </div>

        <Card.Body className="text-center pb-3">
          <h6 className="mb-0">
            {currentUser?.name} {currentUser?.surname}
          </h6>
          <small className="text-muted">{currentUser?.title}</small>

          <hr className="my-3" />

          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">Visitatori del profilo</small>
            <span className="li-mini-link">39</span>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <small className="text-muted">Impressioni del post</small>
            <span className="li-mini-link">315</span>
          </div>
        </Card.Body>
      </Card>

      {/* PREMIUM CARD (come nello screenshot) */}
      <Card className="shadow-sm">
        <Card.Body>
          <small className="text-muted">
            Ottieni 4 volte più visite del profilo
          </small>
          <div className="mt-2 d-flex align-items-center gap-2">
            <span style={{ width: 10, height: 10, background: "#f5c542", display: "inline-block" }} />
            <strong style={{ fontSize: "0.92rem" }}>
              Riattiva Premium con il 50% di sconto
            </strong>
          </div>
        </Card.Body>
      </Card>

      {/* LISTA “Elementi salvati / Gruppi / Newsletter / Eventi” */}
      <Card className="shadow-sm li-left-list">
        <ListGroup variant="flush">
          <ListGroup.Item>
            <span className="li-left-icon">🔖</span> Elementi salvati
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="li-left-icon">👥</span> Gruppi
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="li-left-icon">📰</span> Newsletter
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="li-left-icon">📅</span> Eventi
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  )
}

export default HomeSidebarLeft
