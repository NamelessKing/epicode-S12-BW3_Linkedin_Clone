import { Card, Button, Form, CardText, CardTitle } from 'react-bootstrap';
import './JobsStyles.css'; // 👈 IMPORTANTE
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../store';

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

  useEffect(() => {
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
          setFetchData(data.data.slice(0, 30));
          console.log(data.data);
        })
        .catch((error) => console.log('ERRORE', error));
    };

    getJobs();
  }, [searchQuery]);

  return (
    <>
      <Form.Group>
        <Form.Control
          type="search"
          placeholder="Cerca un lavoro"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-3"
        />
      </Form.Group>

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
          {fetchData.map((job) => (
            <div key={job._id} className="jobs-job-item">
              <Card.Title className="jobs-job-title">{job.title}</Card.Title>
              <Card.Subtitle>{job.publication_date}</Card.Subtitle>
              <Card.Text className="jobs-company">
                <div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: job.description
                        .replace(/&lt;/g, '<')
                        .replace(/&gt;/g, '>')
                    }}
                  />
                </div>
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
      </Card>
    </>
  );
};

export default JobsMainContent;
