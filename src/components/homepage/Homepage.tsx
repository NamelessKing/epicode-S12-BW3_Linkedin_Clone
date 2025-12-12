import { Container, Row, Col } from "react-bootstrap"
import HomeSidebarLeft from "./HomeSidebarLeft"
import HomeFeed from "./HomeFeed"
import HomeSidebarRight from "./HomeSidebarRight"
import "./Homepage.css"

const Homepage = () => {
  return (
    <div className="linkedin-homepage-scope">
      <Container fluid className="li-page">
        <Row className="li-row">
          {/* LEFT SIDEBAR */}
          <Col xs={12} md={3} className="li-col li-left">
            <HomeSidebarLeft />
          </Col>

          {/* MAIN FEED */}
          <Col xs={12} md={6} className="li-col li-center">
            <HomeFeed />
          </Col>

          {/* RIGHT SIDEBAR */}
          <Col xs={12} md={3} className="li-col li-right">
            <HomeSidebarRight />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Homepage

