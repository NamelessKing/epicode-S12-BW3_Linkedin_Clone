import {
  Row,
  Col,
  Container,
  Card,
  Form,
  Modal,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { LuPencil, LuPlus, LuTrash2, LuCamera } from "react-icons/lu";
import { BsArrowRight } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  fetchAllExp,
  createExp,
  updateExp,
  deleteExp,
  updateImgExp,
} from "../../store/experienceSlice";
import type { CreateExperience, Experience } from "../../types/experience";
// STYLES
import "./ProfileExperiences.css";

const ProfileExperiences = function () {
  // ============================================
  // REDUX HOOKS
  // ============================================
  const dispatch = useAppDispatch();
  const {
    data: experiences,
    loading,
    error,
  } = useAppSelector((state) => state.experiences);
  const userId = useAppSelector((state) => state.user.data?._id);

  // ============================================
  // UI STATE
  // ============================================
  const [showModal, setShowModal] = useState(false);
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);

  // ============================================
  // CARICAMENTO INIZIALE
  // ============================================
  useEffect(() => {
    if (userId) {
      dispatch(fetchAllExp(userId));
    }
  }, [userId, dispatch]);

  // ============================================
  // HANDLER COMUNI - Logica condivisa per form
  // ============================================
  // Chiude modal e resetta stato
  const closeModal = () => {
    setShowModal(false);
    setSelectedExperience(null);
  };

  // Estrae dati dal form (usato sia per CREATE che UPDATE)
  const getFormData = (formData: FormData): CreateExperience => ({
    role: formData.get("role") as string,
    company: formData.get("company") as string,
    startDate: formData.get("startDate") as string,
    endDate: (formData.get("endDate") as string) || null,
    area: formData.get("area") as string,
    description: formData.get("description") as string,
  });

  // Gestisce submit (CREATE o UPDATE in base a selectedExperience)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userId) return alert("User ID non disponibile");

    const formData = new FormData(e.currentTarget);
    const experienceData = getFormData(formData);

    try {
      if (selectedExperience) {
        // UPDATE: Modifica esperienza esistente
        await dispatch(
          updateExp({
            userId,
            experienceId: selectedExperience._id,
            experienceData,
          })
        ).unwrap();
      } else {
        // CREATE: Crea nuova esperienza
        await dispatch(createExp({ userId, experienceData })).unwrap();
      }

      // Solo dopo il successo chiudi modal e resetta
      closeModal();
    } catch (error) {
      // Mostra errore ma lascia il modal aperto
      console.error("Errore durante il salvataggio:", error);
      alert("Errore durante il salvataggio. Riprova.");
    }
  };

  // Apri modal edit con esperienza selezionata
  const handleEditClick = (experience: Experience) => {
    setSelectedExperience(experience);
    setShowModal(true);
  };

  // Elimina esperienza
  const handleDeleteClick = async (experienceId: string) => {
    if (!confirm("Sei sicuro di voler eliminare questa esperienza?")) return;
    if (!userId) return alert("User ID non disponibile");
    await dispatch(deleteExp({ userId, experienceId }));
  };

  // Upload immagine esperienza
  const handleImageUpload = async (experienceId: string, image: File) => {
    if (!userId) return alert("User ID non disponibile");

    try {
      await dispatch(updateImgExp({ userId, experienceId, image })).unwrap();
    } catch (error) {
      console.error("Errore durante l'upload:", error);
      alert("Errore durante l'upload dell'immagine. Riprova.");
    }
  };

  return (
    <Container className="mb-3">
      <Card>
        <Card.Body>
          {/* ============================================ */}
          {/* HEADER */}
          {/* ============================================ */}
          <Row className="mb-3">
            <Col>
              <Card.Title>Esperienza</Card.Title>
            </Col>
            <Col className="text-end">
              <LuPlus
                className="mt-2 me-3 fs-5 experience-action-icon"
                onClick={() => setShowModal(true)}
                title="Aggiungi esperienza"
              />
            </Col>
          </Row>

          {/* ============================================ */}
          {/* GESTIONE ERRORI */}
          {/* ============================================ */}
          {error && (
            <Alert variant="danger" dismissible>
              <Alert.Heading>Errore!</Alert.Heading>
              <p>{error}</p>
            </Alert>
          )}

          {/* ============================================ */}
          {/* LOADING STATE */}
          {/* ============================================ */}
          {loading && (
            <div className="text-center my-4">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Caricamento...</span>
              </Spinner>
            </div>
          )}

          {/* ============================================ */}
          {/* MODAL UNICO - Aggiungi/Modifica esperienza */}
          {/* ============================================ */}
          <Modal show={showModal} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>
                {selectedExperience ? "Modifica" : "Aggiungi"} Esperienza
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12} className="mb-3">
                    <Form.Label>Ruolo *</Form.Label>
                    <Form.Control
                      type="text"
                      name="role"
                      defaultValue={selectedExperience?.role}
                      required
                    />
                  </Col>
                  <Col xs={12} className="mb-3">
                    <Form.Label>Compagnia *</Form.Label>
                    <Form.Control
                      type="text"
                      name="company"
                      defaultValue={selectedExperience?.company}
                      required
                    />
                  </Col>
                  <Col xs={12} md={6} className="mb-3">
                    <Form.Label>Data di inizio *</Form.Label>
                    <Form.Control
                      type="date"
                      name="startDate"
                      defaultValue={selectedExperience?.startDate}
                      required
                    />
                  </Col>
                  <Col xs={12} md={6} className="mb-3">
                    <Form.Label>Data di fine</Form.Label>
                    <Form.Control
                      type="date"
                      name="endDate"
                      defaultValue={selectedExperience?.endDate || ""}
                    />
                    <Form.Text className="text-muted">
                      Lascia vuoto se lavori ancora qui
                    </Form.Text>
                  </Col>
                  <Col xs={12} className="mb-3">
                    <Form.Label>Luogo *</Form.Label>
                    <Form.Control
                      type="text"
                      name="area"
                      defaultValue={selectedExperience?.area}
                      required
                    />
                  </Col>
                  <Col xs={12} className="mb-3">
                    <Form.Label>Descrizione *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="description"
                      defaultValue={selectedExperience?.description}
                      required
                    />
                  </Col>
                  <Col xs={12} className="text-end">
                    <Button
                      variant="secondary"
                      onClick={closeModal}
                      className="me-2"
                    >
                      Annulla
                    </Button>
                    <Button type="submit" variant="primary" disabled={loading}>
                      {loading && "Salvataggio..."}
                      {!loading && (selectedExperience ? "Aggiorna" : "Salva")}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Modal.Body>
          </Modal>

          {/* ============================================ */}
          {/* LISTA ESPERIENZE */}
          {/* ============================================ */}
          {!loading && experiences.length === 0 && (
            <p className="text-center text-muted my-4">
              Nessuna esperienza trovata. Clicca + per aggiungerne una!
            </p>
          )}

          {experiences.map((experience, i) => (
            <Container key={experience._id}>
              <Row>
                <Col md={2} className="position-relative">
                  {experience.image ? (
                    <img
                      src={experience.image}
                      alt={experience.company}
                      className="experience-image"
                    />
                  ) : (
                    <div className="experience-image-placeholder">
                      <span className="experience-image-placeholder-text">
                        No Image
                      </span>
                    </div>
                  )}
                  <label
                    htmlFor={`upload-${experience._id}`}
                    className="experience-camera-icon"
                    title="Carica immagine"
                  >
                    <LuCamera />
                  </label>
                  <input
                    id={`upload-${experience._id}`}
                    type="file"
                    accept="image/*"
                    className="d-none"
                    aria-label="Carica immagine esperienza"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleImageUpload(experience._id, file);
                    }}
                  />
                </Col>
                <Col md={9}>
                  <h6 className="m-0">{experience.role}</h6>
                  <small className="m-0">{experience.company}</small>
                  <small className="text-secondary d-block">
                    {experience.startDate} · {experience.endDate || "Presente"}
                  </small>
                  <small className="text-secondary d-block">
                    {experience.area}
                  </small>
                  <small>{experience.description}</small>
                </Col>
                {/* ============================================ */}
                {/* AZIONI - Edit e Delete */}
                {/* ============================================ */}
                <Col md={1} className="text-end">
                  <LuPencil
                    className="mb-2 experience-action-icon"
                    onClick={() => handleEditClick(experience)}
                    title="Modifica esperienza"
                  />
                  <br />
                  <LuTrash2
                    className="experience-delete-icon"
                    onClick={() => handleDeleteClick(experience._id)}
                    title="Elimina esperienza"
                  />
                </Col>
              </Row>
              {i < experiences.length - 1 && <hr />}
            </Container>
          ))}
        </Card.Body>

        {/* ============================================ */}
        {/* FOOTER */}
        {/* ============================================ */}
        <hr className="m-0 p-0" />
        <h6 className="text-center my-3 experience-footer-link">
          Mostra tutte le esperienze({experiences.length})&nbsp;
          <BsArrowRight />
        </h6>
      </Card>
    </Container>
  );
};

export default ProfileExperiences;
