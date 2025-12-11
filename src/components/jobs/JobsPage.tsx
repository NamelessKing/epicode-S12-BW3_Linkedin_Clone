import { Container, Row, Col } from 'react-bootstrap';
import JobsSidebar from './JobsSidebar';
import JobsMainContent from './JobsMainContent';
import "./JobsStyles.css";

const JobsPage = () => {
  return (
    <Container fluid className="jobs-page jobs-container">
      <Row className='justify-content-center mx-auto'>
        
        <Col xs={12} md={3}>
          <JobsSidebar />
        </Col>

        <Col xs={12} md={9}>
          <JobsMainContent />
        </Col>

      </Row>
    </Container>
  );
};

export default JobsPage;

