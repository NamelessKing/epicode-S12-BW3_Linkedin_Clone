import { Card, Button, Form } from "react-bootstrap"
import { fetchFeedArray, newFeedfn } from "../../store/feedSlice"
import { useAppDispatch, useAppSelector } from "../../store"
import { useEffect, useState } from "react"

const HomeFeed = () => {
  const currentFeed = useAppSelector((state) => state.feed.data)
  const dispatch = useAppDispatch()

  const [newPost, setPost] = useState("")

  useEffect(() => {
    dispatch(fetchFeedArray())
  }, [newPost])

  const SubmitPost = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("entrato")
    dispatch(newFeedfn(newPost))
  }

  // immagini fake (ciclo) per rendere “diverse” le 30 card
  const fakePostImages = [
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3182744/pexels-photo-3182744.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ]

  const fakeAvatars = [
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200",
  ]

  const formatDate = (iso: string) => {
    const d = new Date(iso)
    if (isNaN(d.getTime())) return iso
    return d.toLocaleString("it-IT", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
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
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="user"
              />
              <div className="li-create-input w-100">
                <Form.Control
                  type="text"
                  placeholder="Crea un post"
                  value={newPost}
                  onChange={(e) => {
                    setPost(e.target.value)
                  }}
                />
              </div>
            </div>

            <div className="li-create-actions">
              <button type="button" className="li-action-pill">
                <span>▶</span> <span>Video</span>
              </button>
              <button type="button" className="li-action-pill">
                <span>🖼</span> <span>Foto</span>
              </button>
              <button type="button" className="li-action-pill">
                <span>📝</span> <span>Scrivi un articolo</span>
              </button>

              {/* il tuo bottone “Pubblica” resta, solo messo bene */}
              <Button variant="primary" size="sm" type="submit">
                Pubblica
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      {/* barra “Seleziona visualizzazione del feed…” */}
      <div className="li-feed-sort">
        <div className="line" />
        <div>
          Seleziona la visualizzazione del feed: <strong>Più rilevanti per primi</strong>
        </div>
        <div style={{ cursor: "pointer" }}>▾</div>
      </div>

      {/* POSTS */}
      <div className="d-flex flex-column gap-3">
        {currentFeed &&
          currentFeed.map((post, index) => (
            <Card key={post._id} className="li-post-card shadow-sm">
              <Card.Body>
                <div className="li-post-header">
                  <div className="li-post-user">
                    <img
                      src={fakeAvatars[index % fakeAvatars.length]}
                      alt="avatar"
                    />
                    <div className="li-post-meta">
                      <div className="name">{post.username}</div>
                      <div className="sub">Aspiring Data Analyst · 3°+ · 1s</div>
                      <div className="sub">{formatDate(post.createdAt)}</div>
                    </div>
                  </div>

                  <div className="li-post-menu">
                    <div style={{ cursor: "pointer" }}>⋯</div>
                    <div style={{ cursor: "pointer" }}>✕</div>
                  </div>
                </div>

                <div className="li-post-text">
                  {post.text}
                </div>
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
                    👍 Consiglia
                  </button>
                  <button className="li-footer-btn" type="button">
                    💬 Commenta
                  </button>
                  <button className="li-footer-btn" type="button">
                    🔁 Diffondi il post
                  </button>
                  <button className="li-footer-btn" type="button">
                    ✉ Invia
                  </button>
                </div>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  )
}

export default HomeFeed
