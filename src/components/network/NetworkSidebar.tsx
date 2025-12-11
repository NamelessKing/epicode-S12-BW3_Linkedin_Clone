import { Card } from "react-bootstrap";

const NetworkSidebar = () => {
  return (
    <div>
      {/* BOX: Gestisci Rete */}
      <Card className="network-sidebar-card shadow-sm mb-3">
        <Card.Body>
          <h6 className="fw-bold mb-3">Gestisci la tua rete</h6>

          <div className="network-menu-item">Connessioni</div>
          <div className="network-menu-item">Persone che segui</div>
          <div className="network-menu-item">Eventi</div>
          <div className="network-menu-item">Pagine</div>
          <div className="network-menu-item">Newsletter</div>
          <div className="network-menu-item">Hashtag</div>
        </Card.Body>
      </Card>

      {/* BOX: Invita persone */}
      <Card className="network-sidebar-card shadow-sm">
        <Card.Body>
          <h6 className="fw-bold mb-2">Invita contatti</h6>
          <p className="text-muted small mb-2">
            Aumenta la tua rete professionale invitando persone che conosci.
          </p>
          <button className="btn btn-primary w-100">Invita</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NetworkSidebar;
