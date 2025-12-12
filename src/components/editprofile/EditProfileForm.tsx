import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import "./form.css";
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
const key = useAppSelector((state) => state.user.token)
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
    image: "",
    key: key// URL dell'immagine dal server
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
        image: currentUser.image ?? "",
        key: key// Sincronizza URL immagine corrente
      });
    }
  }, [currentUser, key]); // Si ri-esegue solo se currentUser cambia

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
        >
          ✅ Profilo aggiornato con successo!
        </Alert>
      )}

      <Form className="mt-4 px-3" onSubmit={modifyUser}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder={currentUser?.name}
            value={state.name}
            onChange={(e) => {
              setState({
                ...state,
                name: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="surname">
          <Form.Label>Cognome</Form.Label>
          <Form.Control
            type="text"
            placeholder={currentUser?.surname}
            value={state.surname}
            onChange={(e) => {
              setState({
                ...state,
                surname: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder={currentUser?.email}
            value={state.email}
            onChange={(e) => {
              setState({
                ...state,
                email: e.target.value,
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder={currentUser?.username}
            value={state.username}
            onChange={(e) => {
              setState({
                ...state,
                username: e.target.value,
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="bio">
          <Form.Label>Biografia</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder={currentUser?.bio}
            value={state.bio}
            onChange={(e) => {
              setState({
                ...state,
                bio: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Titolo</Form.Label>
          <Form.Control
            type="text"
            placeholder={currentUser?.title}
            value={state.title}
            onChange={(e) => {
              setState({
                ...state,
                title: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="area">
          <Form.Label>Area</Form.Label>
          <Form.Control
            type="text"
            placeholder={currentUser?.area}
            value={state.area}
            onChange={(e) => {
              setState({
                ...state,
                area: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Immagine del profilo</Form.Label>

          {/* Mostra immagine corrente dal server */}
          {state.image && (
            <div className="mb-3 text-center">
              <img
                src={state.image}
                alt="Immagine corrente"
                className="current-profile-image"
              />
              <p className="text-muted mt-2">Immagine attuale</p>
            </div>
          )}

          {/* Input file */}
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          {/* Feedback selezione file */}
          {imageFile && (
            <Form.Text className="text-success">
              ✅ File selezionato: {imageFile.name}
            </Form.Text>
          )}
          {!imageFile && (
            <Form.Text className="text-muted">
              Seleziona una nuova immagine (JPG, PNG, GIF - Max 5MB)
            </Form.Text>
          )}
        </Form.Group>

        <Button className="btn btn-primary" type="submit" disabled={loading}>
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
      </Form>
    </>
  );
};

export default EditProfileForm;
