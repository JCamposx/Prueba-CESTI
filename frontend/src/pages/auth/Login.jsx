import axios from "axios";
import { useContext, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { routes } from "../../routes/routes";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const { setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleChange(e) {
    setCredentials({
      ...credentials,
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
      .post(routes.api.auth.login, credentials)
      .then((res) => {
        setUser(res.data)
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate(routes.home)
      })
      .catch((err) => setErrors(err.response.data.errors));
  }

  return (
    <div>
      <h2 className="mb-4">Login</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            id="username"
            type="text"
            value={credentials.username}
            placeholder="Username"
            onChange={handleChange}
          />
          {errors.username !== "" && (
            <Form.Text className="text-danger">{errors.username}</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            id="password"
            type="password"
            value={credentials.password}
            placeholder="Password"
            onChange={handleChange}
          />
          {errors.password !== "" && (
            <Form.Text className="text-danger">{errors.password}</Form.Text>
          )}
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
