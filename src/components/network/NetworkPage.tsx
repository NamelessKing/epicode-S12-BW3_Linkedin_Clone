import { Container, Row, Col } from "react-bootstrap";
import NetworkSidebar from "./NetworkSidebar";
import NetworkMainContent from "./NetworkMainContent";
import "./NetworkStyle.css";

const NetworkPage = () => {
  return (
    <div className="network-page">
      <Container fluid className="network-container">
        <Row className="justify-content-center mx-auto">
          {/* Sidebar */}
          <Col xs={12} md={3}>
            <NetworkSidebar />
          </Col>

          {/* Contenuto principale */}
          <Col xs={12} md={9}>
            <NetworkMainContent />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NetworkPage;
