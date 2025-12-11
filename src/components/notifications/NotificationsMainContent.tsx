import { Card, Form } from "react-bootstrap";

const fakeNotifications = [
  {
    title: "Nuova visualizzazione del profilo",
    desc: "Marco Rossi ha visitato il tuo profilo",
  },
  {
    title: "Nuovo follower",
    desc: "Giulia Bianchi ha iniziato a seguirti",
  },
  {
    title: "Nuova reazione al tuo post",
    desc: "Sara ha messo 'Consiglia' al tuo post",
  },
  {
    title: "Aggiornamento posizione lavorativa",
    desc: "Luca Verdi ha un nuovo ruolo in Amazon",
  },
  {
    title: "Ti potrebbe interessare un nuovo lavoro",
    desc: "EPICODE cerca un Frontend Developer",
  },
  {
    title: "Nuovo messaggio",
    desc: "Hai ricevuto un messaggio da Chiara",
  },
  {
    title: "Complimenti!",
    desc: "Il tuo post ha superato le 1.000 impression",
  },
  {
    title: "Nuova connessione suggerita",
    desc: "Potresti conoscere Giuseppe Neri",
  },
  {
    title: "Notizia rilevante nel tuo settore",
    desc: "'React 19 rilasciato ufficialmente'",
  },
  {
    title: "Contenuto consigliato",
    desc: "LinkedIn ha trovato un post che potrebbe piacerti",
  },
  {
    title: "Evento vicino a te",
    desc: "Tech Meetup Milano – domani alle 19:00",
  },
  {
    title: "Candidato simile al tuo profilo",
    desc: "Un recruiter ha cercato il tuo ruolo",
  },
  {
    title: "Aggiornamento sicurezza",
    desc: "È consigliato aggiornare la password",
  },
  {
    title: "Nuova skill consigliata",
    desc: "Aggiungi TypeScript al tuo profilo",
  },
  {
    title: "Nuova opportunità freelance",
    desc: "Cliente cerca Web Developer per progetto breve",
  },
  {
    title: "Congratulazioni!",
    desc: "Sei nella top 10% dei profili visitati questa settimana",
  },
  {
    title: "Persona che potresti conoscere",
    desc: "Martina Bianchi ha lavorato con te in EPICODE",
  },
  {
    title: "Reazione al commento",
    desc: "Andrea ha reagito al tuo commento",
  },
  {
    title: "Notifica di networking",
    desc: "Le tue connessioni hanno partecipato ad eventi recenti",
  },
  {
    title: "Nuova attività nella tua rete",
    desc: "Alessio ha pubblicato un nuovo articolo",
  },
];

const NotificationsMainContent = () => {
  return (
    <div className="notifications-main">
      {/* SEARCH BAR */}
      <div className="notifications-search mb-4">
        <Form.Control
          type="text"
          placeholder="Cerca nelle notifiche..."
          className="notifications-search-input"
        />
      </div>

      {/* NOTIFICATIONS LIST */}
      {fakeNotifications.map((n, index) => (
        <Card className="notification-card shadow-sm mb-3" key={index}>
          <Card.Body>
            <h6 className="fw-bold mb-1">{n.title}</h6>
            <p className="text-muted small mb-0">{n.desc}</p>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default NotificationsMainContent;
