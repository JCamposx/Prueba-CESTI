import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { default as NavBootstrap } from "react-bootstrap/Navbar";
import { routes } from "../routes/routes";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

function Navbar() {
  const { user, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleLogout() {
    axios
      .post(
        routes.api.auth.logout,
        {},
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      )
      .then(() => {
        localStorage.removeItem("user");
        setUser(null);
        navigate(routes.auth.login);
      })
      .catch((e) => console.log(e));
  }

  return (
    <NavBootstrap bg="dark" variant="dark" expand="lg" className="mb-3">
      <Container>
        <NavLink className="navbar-brand" to={routes.home}>
          Posts CRUD
        </NavLink>

        <NavBootstrap.Toggle aria-controls="basic-navbar-nav" />

        {user ? (
          <NavBootstrap.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" end to={routes.posts.create}>
                New post
              </NavLink>
              <Link className="nav-link" onClick={handleLogout}>
                Logout
              </Link>
            </Nav>
          </NavBootstrap.Collapse>
        ) : (
          <NavBootstrap.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" end to={routes.auth.login}>
                Login
              </NavLink>
              <NavLink className="nav-link" end to={routes.auth.register}>
                Register
              </NavLink>
            </Nav>
          </NavBootstrap.Collapse>
        )}
      </Container>
    </NavBootstrap>
  );
}

export default Navbar;
