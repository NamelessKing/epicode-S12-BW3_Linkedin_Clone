import { Card, Button } from "react-bootstrap";
import "./JobsStyles.css"; // 👈 IMPORTANTE

const staticJobs = [
  {
    title: "Frontend Developer",
    company: "Netflix",
    location: "Milano, Lombardia, Italia",
  },
  {
    title: "React Engineer",
    company: "Amazon",
    location: "Torino, Piemonte, Italia",
  },
  {
    title: "Junior Web Developer",
    company: "EPICODE",
    location: "Remote",
  },
];

const JobsMainContent = () => {
  return (
    <Card className="jobs-card shadow-sm">
      {/* HEADER */}
      <div className="mb-4">
        <h5 className="fw-bold mb-2">Le principali offerte di lavoro per te</h5>
        <p className="text-muted small mb-0">
          In base al tuo profilo, alle tue preferenze e ad attività come
          candidature, ricerche e salvataggi.
        </p>
      </div>

      {/* LISTA JOBS */}
      <div className="border-top pt-3">
        {staticJobs.map((job, index) => (
          <div key={index} className="jobs-job-item">
            <h6 className="jobs-job-title">{job.title}</h6>
            <p className="jobs-company">{job.company}</p>
            <p className="jobs-location">{job.location}</p>

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
  );
};

export default JobsMainContent;


