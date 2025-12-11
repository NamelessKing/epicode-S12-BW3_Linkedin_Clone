import { Container, Row, Col } from 'react-bootstrap';
import JobsSidebar from './JobsSidebar';
import JobsMainContent from './JobsMainContent';

const JobsPage = () => {
  return (
    <Container fluid>
      <Row className='justify-content-center w-75 mx-auto'>
        {/* LEFT SIDEBAR */}
        <Col xs={12} md={3}>
          <JobsSidebar />
        </Col>

        {/* MAIN CONTENT - Lista lavori */}
        <Col xs={12} md={9}>
          <JobsMainContent />
        </Col>
      </Row>
    </Container>
  );
};

export default JobsPage;
