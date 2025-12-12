import { Card, Button } from "react-bootstrap"

const HomeSidebarRight = () => {
  return (
    <div className="d-flex flex-column gap-3">
      {/* LINKEDIN NOTIZIE */}
      <Card className="shadow-sm">
        <Card.Body>
          <div className="li-right-title mb-2">
            <strong style={{ fontSize: "1rem" }}>LinkedIn Notizie</strong>
            <span className="text-muted" style={{ cursor: "pointer" }}>
              i
            </span>
          </div>

          <div className="text-muted" style={{ fontSize: "0.9rem" }}>
            Storie principali
          </div>

          <ul className="list-unstyled mb-2 li-news-list">
            <li>
              <strong>La cucina italiana è patrimonio UNESCO?</strong>
              <br />
              <small>19 ore fa · 7.894 lettori</small>
            </li>
            <li>
              <strong>Ospedali che competono</strong>
              <br />
              <small>17 ore fa · 227 lettori</small>
            </li>
            <li>
              <strong>Fintech italiano verso il consolidamento</strong>
              <br />
              <small>16 ore fa · 208 lettori</small>
            </li>
            <li>
              <strong>Case dormienti una ricchezza sottovalutata</strong>
              <br />
              <small>22 ore fa · 119 lettori</small>
            </li>
            <li>
              <strong>Fs aggiorna il piano strategico</strong>
              <br />
              <small>2 ore fa</small>
            </li>
          </ul>

          <div style={{ cursor: "pointer", fontWeight: 600, color: "rgba(0,0,0,0.65)" }}>
            Mostra altro ▾
          </div>
        </Card.Body>
      </Card>

      {/* ROMPICAPO */}
      <Card className="shadow-sm">
        <Card.Body>
          <div className="text-muted" style={{ fontSize: "0.9rem" }}>
            Il rompicapo di oggi
          </div>
          <div className="mt-1" style={{ fontWeight: 700 }}>
            Zip - un rompicapo veloce
          </div>
          <div className="text-muted" style={{ fontSize: "0.9rem" }}>
            Risolvilo in 60 secondi o meno!
          </div>

          <div className="mt-3 d-flex align-items-center gap-2">
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 8,
                background: "#f7c6d9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
              }}
            >
              ⌁
            </div>
            <div className="text-muted" style={{ fontSize: "0.9rem" }}>
              Solo tu puoi vedere il punteggio
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* AD CARD */}
      <Card className="shadow-sm">
        <Card.Body className="p-0">
          <img
            src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Ad"
            className="img-fluid"
          />
          <div className="p-3">
            <div className="fw-semibold mb-1" style={{ fontSize: "0.9rem" }}>
              Riattiva Premium con il 50% di sconto
            </div>
            <Button variant="primary" size="sm">
              Scopri di più
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* FOOTER stile LinkedIn */}
      <div className="text-center px-2 li-mini-footer">
        <div className="d-flex flex-wrap justify-content-center gap-2 small text-muted">
          <span>Informazioni</span>
          <span>Accessibilità</span>
          <span>Centro assistenza</span>
          <span>Privacy e condizioni</span>
          <span>Opzioni per gli annunci pubblicitari</span>
          <span>Pubblicità</span>
          <span>Servizi alle aziende</span>
          <span>Scarica l'app LinkedIn</span>
          <span>Altro</span>
        </div>

        <div className="mt-3 d-flex justify-content-center align-items-center gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="LinkedIn logo"
            width={18}
            height={18}
          />
          <small className="text-muted">LinkedIn Corporation © 2025</small>
        </div>
      </div>
    </div>
  )
}

export default HomeSidebarRight

