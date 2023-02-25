import axios from "axios";
import { useEffect, useState } from "react";
import { routes, url } from "../routes/routes";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(routes.api.posts.index)
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleDelete(id) {
    axios
      .delete(url(routes.api.posts.delete, { id }))
      .then(() => setPosts(posts.filter((post) => post.id !== id)))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        {posts.map((post, index) => {
          return (
            <div key={index}>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.content}</Card.Text>
                    <div>
                      <Button>Update</Button>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(post.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          );
        })}
      </Row>
    </div>
  );
}

export default PostList;
