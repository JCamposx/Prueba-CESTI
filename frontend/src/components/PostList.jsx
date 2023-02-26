import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { routes, url } from "../routes/routes";

function PostList({ posts, onDelete }) {
  return (
    <div>
      <h2 className="mb-3">Posts</h2>

      <Row xs={1} md={2} className="g-4">
        {posts.map((post, index) => {
          return (
            <div key={index}>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.content}</Card.Text>
                    <div className="d-flex justify-content-center">
                      <Link
                        className="me-2 btn btn-primary"
                        to={url(routes.posts.edit, { id: post.id })}
                      >
                        Edit
                      </Link>
                      <Button
                        variant="danger"
                        onClick={() => onDelete(post.id)}
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
