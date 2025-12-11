import { Card, Button, Form } from "react-bootstrap";
import { fetchFeedArray } from "../../store/feedSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect } from "react";
import { PiStack } from "react-icons/pi";

const HomeFeed = () => {
  const currentFeed = useAppSelector((state) => state.feed.data)

  const LoadFeed = () => {
    const dispatch = useAppDispatch();
    try {
     dispatch(fetchFeedArray())
    } catch (error: unknown) {
      console.error("Errore durante il caricamento:", error)

      const errorMessage =
        error instanceof Error ? error.message : String(error)
      alert("❌ Errore durante il caricamento: " + errorMessage)
    }
  }
  
 useEffect(() => {LoadFeed()}, [])
  return (
    <div className="d-flex flex-column gap-3">
      {/* BOX SHARE */}
      <Card className="shadow-sm">
        <Card.Body>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Share an article, photo, or update"
            />
          </Form.Group>

          <div className="d-flex justify-content-between align-items-center">
            <Button variant="primary" size="sm">
              Publish a post
            </Button>
            <small className="text-muted">5 Drafts</small>
          </div>
        </Card.Body>
      </Card>


      {/* POST 1 – HELEN BRADLEY */}
      <Card className="shadow-sm">
        <Card.Body>
          <div className="d-flex mb-3">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Helen Bradley"
              width={48}
              height={48}
              className="rounded-circle me-3"
            />
            <div>
              <div className="fw-semibold"></div>
              <small className="text-muted d-block"></small>
              <small className="text-muted">3 hrs</small>
            </div>
          </div>

          <p className="mb-3" style={{ fontSize: "0.9rem" }}>
           
          </p>

          <small className="text-muted d-block mb-2">
            8 Likes · 5 Comments
          </small>

          <div className="d-flex justify-content-between border-top border-bottom py-2 mb-2">
            <Button variant="link" className="text-muted p-0">
              Like
            </Button>
            <Button variant="link" className="text-muted p-0">
              Comment
            </Button>
            <Button variant="link" className="text-muted p-0">
              Share
            </Button>
          </div>

          {/* Commento di Susan */}
          <div className="d-flex mb-2">
            <img
              src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Susan Luker"
              width={36}
              height={36}
              className="rounded-circle me-2"
            />
            <div className="bg-light rounded-3 px-3 py-2 flex-grow-1">
              <div className="fw-semibold" style={{ fontSize: "0.85rem" }}>
                Susan Luker
              </div>
              <small style={{ fontSize: "0.8rem" }}>
                On average, coal power plant produces 50% more CO2 than natural
                gas power plant.
              </small>
            </div>
          </div>

          <Form.Control size="sm" type="text" placeholder="Add a comment..." />
        </Card.Body>
      </Card>

      {/* POST 2 – FIXDEX */}
      <Card className="shadow-sm">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-start mb-2">
            <div className="d-flex">
              <img
                src="https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="FixDex"
                width={40}
                height={40}
                className="rounded-circle me-2"
              />
              <div>
                <div className="fw-semibold">FixDex</div>
                <small className="text-muted">112,345 followers</small>
              </div>
            </div>
            <Button variant="outline-primary" size="sm">
              + Follow
            </Button>
          </div>

          <p className="mb-3" style={{ fontSize: "0.9rem" }}>
            How do you decide which features are most important? Download our
            new eBook for a complete guide to building features your users want!
          </p>

          <div className="rounded overflow-hidden">
            <img
              src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="FixDex ad"
              className="img-fluid"
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  )
};

export default HomeFeed;

