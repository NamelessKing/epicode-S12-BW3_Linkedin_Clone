import { Container, Row, Col } from "react-bootstrap"
import ProfileHeaderCard from "./ProfileHeaderCard"
import InfoBox from "./InfoBox"
import Footer from "../layout/Footer"
import ProfileAnalysis from "./ProfileAnalysis"
import ProfileServices from "./ProfileServices"
import ProfileSidebar from "./ProfileSidebar"
import ProfileExperiences from "./ProfileExperiences"

const ProfilePage = () => {
  return (
    <>
      <Container fluid>
        <Row className="justify-content-center w-75 mx-auto">
          <Col xs={12} md={9}>
            <ProfileHeaderCard />
            <InfoBox />
            <ProfileExperiences />
            <ProfileAnalysis />
            <ProfileServices />
          </Col>
          <Col xs={12} md={3}>
            <ProfileSidebar />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default ProfilePage
