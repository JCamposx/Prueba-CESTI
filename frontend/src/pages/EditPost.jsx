import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { useNavigate, useParams } from "react-router-dom";
import { routes, url } from "../routes/routes";

function EditPost() {
  const [data, setData] = useState({
    title: "",
    content: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    content: "",
  });

  const navigate = useNavigate();

  const id = useParams();

  useEffect(() => {
    axios
      .get(url(routes.api.posts.show, id))
      .then((res) =>
        setData({
          title: res.data.title,
          content: res.data.content,
        })
      )
      .catch((err) => console.log(err));
  }, []);

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
      .put(url(routes.api.posts.update, id), data)
      .then(() => navigate(routes.home))
      .catch((err) => setErrors(err.response.data.errors));
  }

  return (
    <div>
      <h2 className="mb-3">Edit Post</h2>

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

export default EditPost;
