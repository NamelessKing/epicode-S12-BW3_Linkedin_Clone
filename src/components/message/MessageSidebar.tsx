import { Card } from "react-bootstrap";

const conversations = [
  {
    name: "Giulia Bianchi",
    avatar: "https://i.pravatar.cc/150?img=15",
    lastMessage: "Ciao! Quando hai tempo per una call?",
    online: true,
  },
  {
    name: "Marco Verdi",
    avatar: "https://i.pravatar.cc/150?img=30",
    lastMessage: "Va bene, grazie mille!",
    online: false,
  },
  {
    name: "Sara Neri",
    avatar: "https://i.pravatar.cc/150?img=50",
    lastMessage: "Ti ho inviato il documento.",
    online: true,
  },
];

const MessageSidebar = () => {
  return (
    <Card className="message-sidebar shadow-sm">
      <Card.Body>
        <h5 className="fw-bold mb-3">Messaggi</h5>

        {conversations.map((conv, index) => (
          <div className="message-user-item" key={index}>
            <img src={conv.avatar} className="message-avatar" />

            <div className="message-user-info">
              <div className="fw-bold small">{conv.name}</div>
              <div className="text-muted message-user-last">
                {conv.lastMessage}
              </div>
            </div>

            {conv.online && <span className="message-status-online"></span>}
          </div>
        ))}
      </Card.Body>
    </Card>
  );
};

export default MessageSidebar;
