import axios from "axios";
import { useContext, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { routes } from "../routes/routes";

function CreatePost() {
  const [data, setData] = useState({
    title: "",
    content: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    content: "",
  });

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleChange(e) {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.id]: "",
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(routes.api.posts.store, data, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then(() => navigate(routes.home))
      .catch((err) => setErrors(err.response.data.errors));
  }

  return (
    <div>
      <h2 className="mb-3">New Post</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            id="title"
            type="text"
            value={data.title}
            placeholder="Title"
            onChange={handleChange}
          />
          {errors.title !== "" && (
            <Form.Text className="text-danger">{errors.title}</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Content</Form.Label>
          <Form.Control
            id="content"
            as="textarea"
            type="text"
            value={data.content}
            placeholder="Content"
            onChange={handleChange}
          />
          {errors.content !== "" && (
            <Form.Text className="text-danger">{errors.content}</Form.Text>
          )}
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CreatePost;
