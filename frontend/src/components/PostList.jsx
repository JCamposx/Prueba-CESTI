import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function PostList({ posts, onDelete }) {
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
