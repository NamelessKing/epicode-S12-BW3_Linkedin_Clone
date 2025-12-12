import { Card, Button, Form, Spinner, Alert } from "react-bootstrap";
import {
  BsCameraVideo,
  BsImage,
  BsPencil,
  BsHandThumbsUp,
  BsChat,
  BsArrowRepeat,
  BsSend,
} from "react-icons/bs";
import { fetchFeedArray, newFeedfn } from "../../store/feedSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect, useState } from "react";

const HomeFeed = () => {
  const {
    data: currentFeed,
    loading,
    error,
  } = useAppSelector((state) => state.feed);
  const currentUser = useAppSelector((state) => state.user.data);
  const dispatch = useAppDispatch();

  const [newPost, setPost] = useState("");

  // Generate avatar based on username
  const getAvatarUrl = (username: string) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(
      username
    )}&background=0a66c2&color=fff&size=48&bold=true`;
  };

  // Calculate relative time (e.g., "5min", "2h", "3g")
  const getTimeAgo = (isoDate: string) => {
    const now = new Date();
    const posted = new Date(isoDate);
    const diffMs = now.getTime() - posted.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    const diffWeeks = Math.floor(diffMs / 604800000);

    if (diffMins < 1) return "Adesso";
    if (diffMins < 60) return `${diffMins}min`;
    if (diffHours < 24) return `${diffHours}h`;
    if (diffDays < 7) return `${diffDays}g`;
    if (diffWeeks < 4)
      return `${diffWeeks} settiman${diffWeeks === 1 ? "a" : "e"}`;
    return formatDate(isoDate);
  };

  useEffect(() => {
    dispatch(fetchFeedArray());
  }, [dispatch]);

  const SubmitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    try {
      await dispatch(newFeedfn(newPost)).unwrap();
      setPost("");
    } catch (err) {
      console.error("Failed to create post:", err);
    }
  };

  // immagini fake (ciclo) per rendere “diverse” le 30 card
  const fakePostImages = [
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3182744/pexels-photo-3182744.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ];

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    return d.toLocaleString("it-IT", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading && !currentFeed) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger">Errore nel caricamento del feed: {error}</Alert>
    );
  }

  return (
    <div className="d-flex flex-column gap-2">
      {/* CREATE POST BOX (LinkedIn style) */}
      <Card className="shadow-sm li-create-post-card">
        <Card.Body>
          <Form onSubmit={SubmitPost}>
            <div className="li-create-top">
              <img
                className="li-create-avatar"
                src={currentUser?.image}
                alt={`${currentUser?.name || "User"} avatar`}
              />
              <div className="li-create-input w-100">
                <Form.Control
                  type="text"
                  placeholder="Crea un post"
                  value={newPost}
                  onChange={(e) => {
                    setPost(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="li-create-actions">
              <button type="button" className="li-action-pill">
                <BsCameraVideo size={20} /> <span>Video</span>
              </button>
              <button type="button" className="li-action-pill">
                <BsImage size={20} /> <span>Foto</span>
              </button>
              <button type="button" className="li-action-pill">
                <BsPencil size={20} /> <span>Scrivi un articolo</span>
              </button>

              <Button
                variant="primary"
                size="sm"
                type="submit"
                disabled={!newPost.trim()}
              >
                Pubblica
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      {/* barra "Seleziona visualizzazione del feed…" */}
      <div className="li-feed-sort">
        <div className="line" />
        <div>
          Seleziona la visualizzazione del feed:{" "}
          <strong>Più rilevanti per primi</strong>
        </div>
        <div className="li-sort-icon">▾</div>
      </div>

      {/* Empty state */}
      {currentFeed && currentFeed.length === 0 && (
        <Card className="text-center py-5">
          <Card.Body>
            <p className="text-muted mb-0">
              Nessun post da mostrare. Crea il primo post!
            </p>
          </Card.Body>
        </Card>
      )}

      {/* POSTS */}
      <div className="d-flex flex-column gap-3">
        {currentFeed &&
          currentFeed.map((post, index) => (
            <Card key={post._id} className="li-post-card shadow-sm">
              <Card.Body>
                <div className="li-post-header">
                  <div className="li-post-user">
                    <img
                      src={getAvatarUrl(post.username)}
                      alt={`${post.username} avatar`}
                    />
                    <div className="li-post-meta">
                      <div className="name">{post.username}</div>
                      <div className="sub">{getTimeAgo(post.createdAt)}</div>
                    </div>
                  </div>

                  <div className="li-post-menu">
                    <div className="li-menu-icon">⋯</div>
                    <div className="li-menu-icon">✕</div>
                  </div>
                </div>

                <div className="li-post-text">{post.text}</div>
              </Card.Body>

              {/* immagine fake “diversa” per ogni card */}
              <img
                className="li-post-media"
                src={fakePostImages[index % fakePostImages.length]}
                alt="post media"
              />

              <Card.Body className="pt-2">
                <div className="li-post-footer-actions">
                  <button className="li-footer-btn" type="button">
                    <BsHandThumbsUp size={18} /> Consiglia
                  </button>
                  <button className="li-footer-btn" type="button">
                    <BsChat size={18} /> Commenta
                  </button>
                  <button className="li-footer-btn" type="button">
                    <BsArrowRepeat size={18} /> Diffondi il post
                  </button>
                  <button className="li-footer-btn" type="button">
                    <BsSend size={18} /> Invia
                  </button>
                </div>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default HomeFeed;
