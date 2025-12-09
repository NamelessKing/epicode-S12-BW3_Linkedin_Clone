import { Container, Row, Col } from "react-bootstrap"
import ProfileHeaderCard from "./ProfileHeaderCard"
import InfoBox from "./InfoBox"
import Footer from "../layout/Footer"

const ProfilePage = () => {
  return (
    <>
      <Container fluid>
        <Row className="justify-content-center w-75 mx-auto">
          <Col xs={12} md={9}>
            <ProfileHeaderCard />
            {
              /* <AnalisysBox />/
              <InfoBox />
              /
            <Services />
            <Activities />
            <Experience />
            <Education />
            <Certificates />
            <Interests /> /
            }
          </Col>
          <Col xs={12} md={3} className="bg-dark">
            <h1>Colonna sinistra</h1>
            {/ <Settings />
            <OtherProfiles />
            <Suggested /> */}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default ProfilePage
