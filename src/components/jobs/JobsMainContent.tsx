import {Container, Row, Card, Button, Form, Spinner } from 'react-bootstrap';
import './JobsStyles.css'; // 👈 IMPORTANTE
import { useState } from 'react';

// const staticJobs = [
//   {
//     title: "Frontend Developer",
//     company: "Netflix",
//     location: "Milano, Lombardia, Italia",
//   },
//   {
//     title: "React Engineer",
//     company: "Amazon",
//     location: "Torino, Piemonte, Italia",
//   },
//   {
//     title: "Junior Web Developer",
//     company: "EPICODE",
//     location: "Remote",
//   },
// ];

const URL = 'https://strive-benchmark.herokuapp.com/api/jobs?search=';

const JobsMainContent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [fetchData, setFetchData] = useState([]);
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const [visibleJobs, setVisibleJobs] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  const getJobs = () => {
    fetch(URL + searchQuery)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Errore nel recuper dei jobs' + response.status);
        }
      })
      .then((data) => {
        setFetchData(data.data);
        setIsLoading(false);
        console.log(data.data);
      })
      .catch((error) => console.log('ERRORE', error));
  };

  // useEffect(() => {
  //   getJobs('');
  // }, []);

  const loadMoreJobs = () => {
    setVisibleJobs(visibleJobs + 3);
  };

  return (
    <>
      <Form.Group>
        <Form.Control
          type="search"
          placeholder="Cerca un lavoro"
          value={searchQuery}
          onChange={(e) => {
            if (debounceTimeout) {
              clearTimeout(debounceTimeout);
            }
            setIsLoading(true);
            const timeout = setTimeout(() => {
              getJobs(e.target.value);
            }, 1200);
            setDebounceTimeout(timeout);
            setSearchQuery(e.target.value);
          }}
          className="mb-3"
        />
      </Form.Group>
      <Container>
        <Row className='justify-content-center'>
          {isLoading && searchQuery && (
            <Spinner/>
          )}
        </Row>
      </Container>
      {!isLoading && searchQuery && (
        <Card className="jobs-card shadow-sm">
          {/* HEADER */}
          <div className="mb-4">
            <h5 className="fw-bold mb-2">
              Le principali offerte di lavoro per te
            </h5>
            <p className="text-muted small mb-0">
              In base al tuo profilo, alle tue preferenze e ad attività come
              candidature, ricerche e salvataggi.
            </p>
          </div>

          {/* LISTA JOBS */}
          <div className="border-top pt-3">
            {fetchData.slice(0, visibleJobs).map((job) => (
              <div key={job._id} className="jobs-job-item">
                <Card.Title className="jobs-job-title mb-2">
                  {job.title}
                </Card.Title>
                <Card.Subtitle className="mb-3">
                  {job.publication_date}
                </Card.Subtitle>
                <Card.Text className="jobs-company">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: job.description
                        .replace(/&lt;/g, '<')
                        .replace(/&gt;/g, '>')
                    }}
                  />
                </Card.Text>
                <Card.Text className="jobs-company">{job.company}</Card.Text>
                <Card.Text className="jobs-location">
                  {job.candidate_required_location}
                </Card.Text>

                <Button
                  variant="outline-primary"
                  size="sm"
                  className="jobs-visit-btn"
                >
                  Salva
                </Button>
              </div>
            ))}
          </div>
          {visibleJobs < fetchData.length && (
            <Button variant='outline-primary' onClick={loadMoreJobs} className=".btn-other-jobs w-25 d-flex align-self-center mt-3">
              Carica altri 3 lavori ({visibleJobs} di  {fetchData.length})
            </Button>
          )}
        </Card>
      )}
    </>
  );
};

export default JobsMainContent;