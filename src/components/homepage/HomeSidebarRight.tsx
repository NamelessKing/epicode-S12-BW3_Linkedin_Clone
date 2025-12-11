import { Card, Button } from "react-bootstrap";

const HomeSidebarRight = () => {
  return (
    <div className="d-flex flex-column gap-3">
      <Card className="shadow-sm">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="mb-0" style={{ fontSize: "0.95rem" }}>
              Storie principali
            </h6>
            <span className="text-muted" style={{ cursor: "pointer" }}>
              i
            </span>
          </div>

          <ul className="list-unstyled mb-0" style={{ fontSize: "0.85rem" }}>
            <li className="mb-2">
              <strong>La Bei finanzia Scalapay</strong>
              <br />
              <small className="text-muted">17 ore fa - 2380 lettori</small>
            </li>
            <li className="mb-2">
              <strong>L'Australia vieta i social ai minori di 16 anni</strong>
              <br />
              <small className="text-muted">18 ore fa - 183 lettori</small>
            </li>
            <li className="mb-2">
              <strong>Mediaset acquista Radio Norba</strong>
              <br />
              <small className="text-muted">1 giorno fa</small>
            </li>
            <li className="mb-2">
              <strong>Com'è andato alla fine il Black Friday</strong>
              <br />
              <small className="text-muted">1 giorno fa</small>
            </li>
            <li>
              <strong> Quanti giovani lasciano l'Italia</strong>
              <br />
              <small className="text-muted">1 giorno fa - 1214 lettori</small>
            </li>
          </ul>
        </Card.Body>
      </Card>

      {/* ADVERTISING / FIXDEX BANNER */}
      <Card className="shadow-sm">
        <Card.Body className="p-0">
          <img
            src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="FixDex Ad"
            className="img-fluid"
          />
          <div className="p-3">
            <div className="fw-semibold mb-1" style={{ fontSize: "0.9rem" }}>
              LET&apos;S CREATE DEEPER CUSTOMER RELATIONSHIPS.
            </div>
            <Button variant="primary" size="sm">
              Scopri di più
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* FOLLOW NEW PERSPECTIVES */}
      <Card className="shadow-sm">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div className="fw-semibold" style={{ fontSize: "0.9rem" }}>
              Scopri nuove prospettive
            </div>
            <small className="text-muted"></small>
          </div>

          {/* Utente 1 */}
          <div className="d-flex align-items-center mb-3">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Decagon"
              width={40}
              height={40}
              className="rounded-circle me-2"
            />
            <div className="flex-grow-1">
              <div className="fw-semibold" style={{ fontSize: "0.85rem" }}>
                Decagon
              </div>
              <small className="text-muted" style={{ fontSize: "0.8rem" }}>
                Popolare nell'industria web
              </small>
            </div>
            <Button
              variant="outline-secondary"
              size="sm"
              className="rounded-circle px-1 py-0 m-0"
            >
            +
            </Button>
          </div>

          {/* Utente 2 */}
          <div className="d-flex align-items-center mb-3">
            <img
              src="https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Ryan Holmes"
              width={40}
              height={40}
              className="rounded-circle me-2"
            />
            <div className="flex-grow-1">
              <div className="fw-semibold" style={{ fontSize: "0.85rem" }}>
                Ryan Holmes
              </div>
              <small className="text-muted" style={{ fontSize: "0.8rem" }}>
                CEO presso Amethyst
              </small>
            </div>
            <Button
              variant="outline-secondary"
              size="sm"
              className="rounded-circle px-1 py-0 m-0"
            >
              +
            </Button>
          </div>

          {/* Utente 3 */}
          <div className="d-flex align-items-center">
            <img
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Arianna Huffington"
              width={40}
              height={40}
              className="rounded-circle me-2"
            />
            <div className="flex-grow-1">
              <div className="fw-semibold" style={{ fontSize: "0.85rem" }}>
                Arianna Huffington
              </div>
              <small className="text-muted" style={{ fontSize: "0.8rem" }}>
                Presidente e Editor-in-Chief al The Huffington...
              </small>
            </div>
            <Button
              variant="outline-secondary"
              size="sm"
              className="rounded-circle px-1 py-0 m-0"
            >
              +
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
};

export default HomeSidebarRight;

