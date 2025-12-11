import { Container } from "react-bootstrap";
import NotificationsMainContent from "./NotificationsMainContent";
import "./NotificationsStyle.css";

const NotificationsPage = () => {
  return (
    <div className="notifications-page">
      <Container fluid className="notifications-container">
        <NotificationsMainContent />
      </Container>
    </div>
  );
};

export default NotificationsPage;
