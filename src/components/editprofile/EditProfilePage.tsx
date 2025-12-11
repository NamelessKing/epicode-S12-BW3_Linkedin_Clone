import { Container, Row, Col } from "react-bootstrap"
import EditProfileSidebar from "./EditProfileSidebar"
import EditProfileForm from "./EditProfileForm"
import EditProfileSidebarRight from "./EditProfileSidebarRight"

const EditProfilePage = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center w-75 mx-auto">
        {/* LEFT SIDEBAR */}
        <Col xs={12} md={3}>
          <EditProfileSidebar />
        </Col>

        {/* MAIN FORM */}
        <Col xs={12} md={6}>
          <EditProfileForm />
        </Col>

        {/* RIGHT SIDEBAR */}
        <Col xs={12} md={3}>
          <EditProfileSidebarRight />
        </Col>
      </Row>
    </Container>
  )
}

export default EditProfilePage
