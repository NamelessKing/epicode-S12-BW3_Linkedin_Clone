import { Container, Row, Col } from "react-bootstrap";
import MessageSidebar from "./MessageSidebar";
import MessageMainContent from "./MessageMainContent";
import "./MessageStyle.css";

const MessagePage = () => {
  return (
    <div className="message-page">
      <Container fluid className="message-container">
        <Row className="justify-content-center mx-auto">
          {/* Sidebar conversazioni */}
          <Col xs={12} md={4} lg={3}>
            <MessageSidebar />
          </Col>

          {/* Chat aperta */}
          <Col xs={12} md={8} lg={9}>
            <MessageMainContent />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MessagePage;
