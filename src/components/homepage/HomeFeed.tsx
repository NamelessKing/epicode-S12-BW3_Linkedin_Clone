import { Card, Button, Form } from "react-bootstrap";
import { fetchFeedArray } from "../../store/feedSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect, useState } from "react";


const HomeFeed = () => {
  const currentFeed = useAppSelector((state) => state.feed.data)
  // const loading = useAppSelector((state) => state.feed.loading);
  const dispatch = useAppDispatch()

   const [newPost, setPost] = useState("")
  
  useEffect(() => {dispatch(fetchFeedArray())}, [])
  
  return (
    <div className="d-flex flex-column gap-3">
      <Card className="shadow-sm">
        <Card.Body>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Condividi un articolo, una foto, un video o un'idea"
              value={newPost}
              onChange={(e) => {
                setPost(e.target.value);
              }}
            />
          </Form.Group>

          <div className="d-flex justify-content-between align-items-center">
            <Button variant="primary" size="sm">
              Pubblica
            </Button>
            <small className="text-muted">5 bozze</small>
          </div>
        </Card.Body>
      </Card>

      {currentFeed &&
        currentFeed.map((post) => (
          <Card key={post._id}>
            <Card.Body>
              <Card.Title>{post.username}</Card.Title>
              <Card.Text>{post.text}</Card.Text>
              <Card.Text>{post.createdAt}</Card.Text>
            </Card.Body>
          </Card>
        ))}
    </div>
  )
};

export default HomeFeed;

