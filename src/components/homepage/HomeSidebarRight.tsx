import { Card, Button } from "react-bootstrap";

const HomeSidebarRight = () => {
  return (
    <div className="d-flex flex-column gap-3">
      {/* WHAT YOU NEED TO KNOW NOW */}
      <Card className="shadow-sm">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="mb-0" style={{ fontSize: "0.95rem" }}>
              What you need to know now
            </h6>
            <span className="text-muted" style={{ cursor: "pointer" }}>
              i
            </span>
          </div>

          <ul className="list-unstyled mb-0" style={{ fontSize: "0.85rem" }}>
            <li className="mb-2">
              <strong>The Dow is About to Hit 20,000</strong>
              <br />
              <small className="text-muted">Top News</small>
            </li>
            <li className="mb-2">
              <strong>What Today&apos;s Job Numbers Mean for You</strong>
              <br />
              <small className="text-muted">36 new posts</small>
            </li>
            <li className="mb-2">
              <strong>
                How Healthcare Repeal Could Affect Your Workday – and Your
                Retirement
              </strong>
              <br />
              <small className="text-muted">Updated 10 mins ago</small>
            </li>
            <li className="mb-2">
              <strong>Economy Grew at Fastest Pace in Two Years</strong>
              <br />
              <small className="text-muted">Trending · 2M talking about this</small>
            </li>
            <li>
              <strong>#ChaseGreat</strong>
              <br />
              <small className="text-muted">
                Trending · 1.8M talking about this
              </small>
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
              Find out more
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* FOLLOW NEW PERSPECTIVES */}
      <Card className="shadow-sm">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div className="fw-semibold" style={{ fontSize: "0.9rem" }}>
              Follow new perspectives
            </div>
            <small className="text-muted">See more</small>
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
                Popular in the internet industry
              </small>
            </div>
            <Button
              variant="outline-secondary"
              size="sm"
              className="rounded-circle px-2"
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
                CEO at Amethyst
              </small>
            </div>
            <Button
              variant="outline-secondary"
              size="sm"
              className="rounded-circle px-2"
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
                President and Editor-in-Chief at The Huffington...
              </small>
            </div>
            <Button
              variant="outline-secondary"
              size="sm"
              className="rounded-circle px-2"
            >
              +
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeSidebarRight;

