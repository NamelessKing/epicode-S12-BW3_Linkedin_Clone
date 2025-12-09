import { Container, Row, Col, Form } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="linkedin-footer py-4">
      <Container>

        {/* === SEZIONE COLONNE === */}
        <Row className="gy-4">

          {/* COLONNA 1 */}
          <Col xs={12} md={3}>
            <ul className="footer-list">
              <li>Informazioni</li>
              <li>Informativa sulla community professionale</li>
              <li>Privacy e condizioni ▾</li>
              <li>Sales Solutions</li>
              <li>Centro sicurezza</li>
            </ul>
          </Col>

          {/* COLONNA 2 */}
          <Col xs={12} md={3}>
            <ul className="footer-list">
              <li>Accessibilità</li>
              <li>Carriera</li>
              <li>Opzioni per gli annunci pubblicitari</li>
              <li>Mobile</li>
            </ul>
          </Col>

          {/* COLONNA 3 */}
          <Col xs={12} md={3}>
            <ul className="footer-list">
              <li>Talent Solutions</li>
              <li>Soluzioni di marketing</li>
              <li>Pubblicità</li>
              <li>Piccole imprese</li>
            </ul>
          </Col>

          {/* COLONNA 4 (BLOCCO INFO + LINGUA) */}
          <Col xs={12} md={3}>
            <div className="footer-info-block">

              <div className="footer-info-item">
                <i className="bi bi-question-circle-fill footer-icon"></i>
                <div>
                  <strong>Domande?</strong>
                  <p>Visita il nostro Centro assistenza.</p>
                </div>
              </div>

              <div className="footer-info-item">
                <i className="bi bi-gear-fill footer-icon"></i>
                <div>
                  <strong>Gestisci il tuo account e la tua privacy</strong>
                  <p>Vai alle impostazioni</p>
                </div>
              </div>

              <div className="footer-info-item">
                <i className="bi bi-shield-check footer-icon"></i>
                <div>
                  <strong>Trasparenza sui contenuti consigliati</strong>
                  <p>Scopri di più sui contenuti consigliati.</p>
                </div>
              </div>

              {/* Selettore lingua */}
              <div className="language-selector mt-2">
                <label>Seleziona lingua</label>
                <Form.Select size="sm">
                  <option>Italiano (Italiano)</option>
                  <option>English (English)</option>
                  <option>Deutsch (Deutsch)</option>
                  <option>Español (Español)</option>
                </Form.Select>
              </div>

            </div>
          </Col>
        </Row>

        {/* COPYRIGHT */}
        <Row className="mt-3">
          <Col>
            <p className="footer-copy">
              LinkedIn Corporation © {new Date().getFullYear()}
            </p>
          </Col>
        </Row>

      </Container>
    </footer>
  );
};

export default Footer;

