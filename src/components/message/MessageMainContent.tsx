import { Card, Button, Form } from "react-bootstrap";

const mockMessages = [
  { sender: "them", text: "Ciao! Come stai oggi?" },
  { sender: "me", text: "Tutto bene grazie! Tu?" },
  { sender: "them", text: "Benissimo! Hai visto l’ultimo aggiornamento?" },
];

const MessageMainContent = () => {
  return (
    <Card className="message-main shadow-sm">
      {/* HEADER */}
      <div className="message-header d-flex align-items-center px-3 py-2">
        <img
          src="https://i.pravatar.cc/150?img=15"
          className="message-header-avatar"
        />
        <div>
          <div className="fw-bold">Giulia Bianchi</div>
          <div className="text-muted small">Sta scrivendo...</div>
        </div>
      </div>

      {/* CHAT BODY */}
      <div className="message-body">
        {mockMessages.map((msg, index) => (
          <div
            key={index}
            className={`message-bubble ${
              msg.sender === "me" ? "me" : "them"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="message-input-area px-3 py-2">
        <Form.Control type="text" placeholder="Scrivi un messaggio..." />
        <Button variant="primary" className="ms-2 px-4">
          Invia
        </Button>
      </div>
    </Card>
  );
};

export default MessageMainContent;
