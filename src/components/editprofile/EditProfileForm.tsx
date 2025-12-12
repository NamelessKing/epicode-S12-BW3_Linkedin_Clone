import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./EditProfileForm.css";
import { useAppSelector } from "../../store";
import { useAppDispatch } from "../../store";
import { useState, useEffect } from "react";
import { updateCurrentUser, updateProfileImage } from "../../store/userSlice";
import type { UpdatedUserProfile } from "../../types/user";

const EditProfileForm = () => {
  // Hook per inviare azioni a Redux (es. aggiornare il profilo)
  const dispatch = useAppDispatch();

  // Legge i dati dell'utente corrente dallo stato globale Redux
  const currentUser = useAppSelector((state) => state.user.data);

  // Legge lo stato di loading per mostrare lo spinner durante il salvataggio
  const loading = useAppSelector((state) => state.user.loading);

  // State locale del form - contiene i dati che l'utente sta modificando
  // Inizia vuoto, poi viene popolato da useEffect quando currentUser arriva da Redux
  const [state, setState] = useState<UpdatedUserProfile>({
    name: "",
    surname: "",
    bio: "",
    email: "",
    username: "",
    title: "",
    area: "",
    image: "", // URL dell'immagine dal server
  });

  // ⭐ State per il file da caricare (solo File object, nessuna preview)
  const [imageFile, setImageFile] = useState<File | null>(null);

  // State per mostrare l'alert di successo dopo il salvataggio
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Popola il form quando currentUser viene caricato da Redux
  // Si esegue solo quando currentUser cambia (es. dopo il login o refresh)
  useEffect(() => {
    if (currentUser) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setState({
        name: currentUser.name ?? "",
        surname: currentUser.surname ?? "",
        bio: currentUser.bio ?? "",
        email: currentUser.email ?? "",
        username: currentUser.username ?? "",
        title: currentUser.title ?? "",
        area: currentUser.area ?? "",
        image: currentUser.image ?? "", // Sincronizza URL immagine corrente
      });
    }
  }, [currentUser]); // Si ri-esegue solo se currentUser cambia

  // ⭐ Gestisce la selezione del file immagine
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      // Validazione tipo file
      if (!file.type.startsWith("image/")) {
        alert("⚠️ Seleziona solo file immagine (JPG, PNG, GIF)");
        return;
      }

      // Validazione dimensione (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("⚠️ Immagine troppo grande (max 5MB)");
        return;
      }

      // Salva il file
      setImageFile(file);
    }
  };

  // Funzione chiamata quando l'utente clicca "Salva modifiche"
  const modifyUser = async (e: React.FormEvent) => {
    // Previene il reload della pagina (comportamento di default dei form HTML)
    e.preventDefault();

    // Nasconde l'alert di successo se era ancora visibile
    setSubmitSuccess(false);

    try {
      // 1. Aggiorna dati testuali (nome, bio, ecc.)
      await dispatch(updateCurrentUser(state)).unwrap();

      // 2. Se l'utente ha selezionato una nuova immagine, caricala
      if (imageFile && currentUser?._id) {
        await dispatch(
          updateProfileImage({
            userId: currentUser._id,
            image: imageFile,
          })
        ).unwrap();
      }

      // Se tutto va bene, mostra l'alert di successo
      setSubmitSuccess(true);

      // Nascondi l'alert dopo 3 secondi
      setTimeout(() => setSubmitSuccess(false), 3000);

      // Reset del file dopo il caricamento
      setImageFile(null);
    } catch (error: unknown) {
      // Se l'API fallisce (es. errore server, dati invalidi)
      console.error("Errore durante il salvataggio:", error);

      // Estrae il messaggio di errore e lo mostra all'utente
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      alert("❌ Errore durante il salvataggio: " + errorMessage);
    }
  };

  return (
    <>
      {submitSuccess && (
        <Alert
          variant="success"
          dismissible
          onClose={() => setSubmitSuccess(false)}
          className="success-toast"
        >
          ✅ Profilo aggiornato con successo!
        </Alert>
      )}

      <Card className="edit-profile-card shadow-sm">
        <Card.Header className="edit-profile-header">
          <h5>✏️ Modifica profilo</h5>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={modifyUser}>
            {/* Sezione: Informazioni di base */}
            <div className="form-section">
              <h6 className="section-title">Informazioni di base</h6>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nome *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Inserisci il tuo nome"
                      value={state.name}
                      onChange={(e) =>
                        setState({ ...state, name: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="surname">
                    <Form.Label>Cognome *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Inserisci il tuo cognome"
                      value={state.surname}
                      onChange={(e) =>
                        setState({ ...state, surname: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="esempio@email.com"
                      value={state.email}
                      onChange={(e) =>
                        setState({ ...state, email: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Il tuo username"
                      value={state.username}
                      onChange={(e) =>
                        setState({ ...state, username: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>

            {/* Sezione: Informazioni professionali */}
            <div className="form-section">
              <h6 className="section-title">Informazioni professionali</h6>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Titolo professionale</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Es: Full Stack Developer, Marketing Manager"
                  value={state.title}
                  onChange={(e) =>
                    setState({ ...state, title: e.target.value })
                  }
                />
                <Form.Text className="text-muted">
                  Il tuo ruolo o posizione professionale
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="area">
                <Form.Label>Località</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Es: Milano, Italia"
                  value={state.area}
                  onChange={(e) => setState({ ...state, area: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="bio">
                <Form.Label>Biografia</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Racconta qualcosa di te..."
                  value={state.bio}
                  onChange={(e) => setState({ ...state, bio: e.target.value })}
                />
                <Form.Text className="text-muted">
                  Descrivi la tua esperienza, competenze e obiettivi
                </Form.Text>
              </Form.Group>
            </div>

            {/* Sezione: Immagine profilo */}
            <div className="form-section">
              <h6 className="section-title">Immagine profilo</h6>
              <div className="image-upload-section">
                {state.image && (
                  <div className="profile-image-preview-container">
                    <img
                      src={state.image}
                      alt="Anteprima profilo"
                      className="profile-image-preview"
                    />
                  </div>
                )}

                <Form.Group controlId="image">
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  {imageFile && (
                    <Form.Text className="text-success file-feedback">
                      ✅ File selezionato: <strong>{imageFile.name}</strong>
                    </Form.Text>
                  )}
                  {!imageFile && (
                    <Form.Text className="text-muted file-feedback">
                      Formati supportati: JPG, PNG, GIF (Max 5MB)
                    </Form.Text>
                  )}
                </Form.Group>
              </div>
            </div>

            {/* Bottone Salva */}
            <div className="text-end">
              <Button
                className="btn-linkedin-primary"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      className="me-2"
                    />
                    Salvataggio...
                  </>
                ) : (
                  "Salva modifiche"
                )}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default EditProfileForm;
