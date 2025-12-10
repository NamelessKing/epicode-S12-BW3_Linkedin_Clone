import { Card, Container, Row, Col } from "react-bootstrap";
import {
  BsEyeFill,
  BsFillPeopleFill,
  BsBarChartLineFill,
  BsSearch,
  BsArrowRight,
} from "react-icons/bs";

const ProfileAnalysis = function () {
  return (
    <>
    <Container className='my-3'>
      <Card>
        <Card.Body>
          <Card.Title>Analisi</Card.Title>
          <Card.Text><BsEyeFill className='me-1'/>Solo per te</Card.Text>
          <Container>
            <Row className='row-cols-3'>
                <Col className='p-0'>
                    <p><BsFillPeopleFill className='me-1'/> 1 visualizzazione del profilo</p>
                    <p>Scopri chi ha visto il tuo profilo.</p>
                </Col>
                <Col>
                  <p>
                    <BsBarChartLineFill /> 0 impressioni del post
                  </p>
                  <p>Crea un post per aumentare l'interesse</p>
                  <p>Ultimi 7 giorni</p>
                </Col>
                <Col>
                  <p>
                    <BsSearch /> 3 comparse nel motore di ricerca
                  </p>
                  <p>Vedi quante volte compari nei risultati di ricerca</p>
                </Col>
            </Row>
          </Container>
        </Card.Body>
          <hr className='my-2'/>
          <Card.Text className='m-2'>
            <h6 className='text-center'>Mostra tutte le analisi <BsArrowRight /></h6>
          </Card.Text>
      </Card>
    </Container>
    </>
  );
};

export default ProfileAnalysis;
