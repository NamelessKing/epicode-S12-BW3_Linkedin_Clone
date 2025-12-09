import { Card, Button, Image } from "react-bootstrap";
import { BsEye, BsPersonPlus } from "react-icons/bs";
import { LuPencil, LuLink } from "react-icons/lu";
import "./ProfileSidebar.css";

type ProfileReference = {
  name: string;
  role: string;
  avatar: string;
};

type SuggestedProfile = {
  name: string;
  subtitle: string;
  avatar: string;
};

const consultedProfiles: ProfileReference[] = [
  {
    name: "Lisa Toffalori",
    role: "Marketing & Business Organization consultant",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "cecilia bennati",
    role: "Software Engineer | Professional at Gruppo...",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=80&q=80",
  },
];

const suggestedProfiles: SuggestedProfile[] = [
  {
    name: "Aurora Marini",
    subtitle: "Studentessa laureata presso Università Ca' Foscari...",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
  },
  {
    name: "Luca Barichello",
    subtitle: "Studente presso Università Ca' Foscari Venezia",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=80&q=80",
  },
];

const ProfileSidebar = () => {
  return (
    <div className="profile-sidebar">
      <Card className="mb-2 sidebar-card">
        <Card.Body className="p-3">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div className="flex-grow-1">
              <div className="card-title mb-1">Lingua del profilo</div>
              <div className="text-muted small-text">Inglese</div>
            </div>
            <Button
              variant="link"
              className="p-0 edit-icon"
              aria-label="Modifica lingua profilo"
            >
              <LuPencil size={16} />
            </Button>
          </div>

          <hr className="my-3 divider" />

          <div className="d-flex justify-content-between align-items-start">
            <div className="flex-grow-1">
              <div className="card-title mb-1">Profilo pubblico e URL</div>
              <div className="text-muted url-text">
                www.linkedin.com/in/nome-cognome
              </div>
            </div>
            <Button
              variant="link"
              className="p-0 edit-icon"
              aria-label="Modifica URL profilo"
            >
              <LuLink size={16} />
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Card className="mb-2 sidebar-card">
        <Card.Body className="p-3">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div className="card-title mb-0">Altri profili consultati</div>
            <div className="section-header">
              <BsEye size={14} /> <span>Solo per te</span>
            </div>
          </div>

          {consultedProfiles.map((profile) => (
            <div
              key={profile.name}
              className="d-flex align-items-start profile-item"
            >
              <Image
                src={profile.avatar}
                roundedCircle
                className="sidebar-avatar me-3"
                alt={profile.name}
              />
              <div className="flex-grow-1">
                <div className="profile-name">{profile.name} 🔵 · 3°</div>
                <div className="profile-role mb-2">{profile.role}</div>
                <Button size="sm" variant="outline-primary">
                  Messaggio
                </Button>
              </div>
            </div>
          ))}
        </Card.Body>
      </Card>

      <Card className="mb-2 sidebar-card">
        <Card.Body className="p-3">
          <div className="mb-3">
            <div className="card-title mb-1">
              Persone che potresti conoscere
            </div>
            <div className="section-header">Dalla tua scuola o università</div>
          </div>

          {suggestedProfiles.map((profile) => (
            <div
              key={profile.name}
              className="d-flex align-items-start profile-item"
            >
              <Image
                src={profile.avatar}
                roundedCircle
                className="sidebar-avatar me-3"
                alt={profile.name}
              />
              <div className="flex-grow-1">
                <div className="profile-name">
                  {profile.name}{" "}
                  {profile.name === "Luca Barichello" && (
                    <span className="verified-badge">✓</span>
                  )}
                </div>
                <div className="profile-role mb-2">{profile.subtitle}</div>
                <Button
                  size="sm"
                  variant="outline-secondary"
                  className="d-flex align-items-center gap-1"
                >
                  <BsPersonPlus size={14} /> <span>Collegati</span>
                </Button>
              </div>
            </div>
          ))}

          <div
            className="text-center fw-semibold text-primary mt-3 show-all"
            role="button"
            tabIndex={0}
          >
            Mostra tutto
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfileSidebar;
