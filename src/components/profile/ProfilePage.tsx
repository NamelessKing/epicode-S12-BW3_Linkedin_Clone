import { Container, Row, Col } from "react-bootstrap";
import ProfileHeaderCard from "./ProfileHeaderCard";
import Footer from "../layout/Footer";


const ProfilePage = () => {
  return (
      <Container fluid>
        <Row className="justify-content-center w-75 mx-auto">
          <Col xs={12} md={9}>
            <ProfileHeaderCard />
            {/* <AnalisysBox />
            <InfoComponent />
            <Services />
            <Activities />
            <Experience />
            <Education />
            <Certificates />
            <Interests /> */}
          </Col>
          <Col xs={12} md={3}>
            {/* <Settings />
            <OtherProfiles />
            <Suggested /> */}
          </Col>
        </Row>
        <Footer />
      </Container>
      

  )
};

export default ProfilePage;
