import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { default as NavBootstrap } from "react-bootstrap/Navbar";
import { routes } from "../routes/routes";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <NavBootstrap bg="dark" variant="dark" expand="lg" className="mb-3">
      <Container>
        <NavLink className="navbar-brand" to={routes.home}>Posts CRUD</NavLink>

        <NavBootstrap.Toggle aria-controls="basic-navbar-nav" />

        <NavBootstrap.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" end to={routes.posts.create}>New post</NavLink>
            <Link className="nav-link" to="/logout">Logout</Link>
          </Nav>
        </NavBootstrap.Collapse>
      </Container>
    </NavBootstrap>
  );
}

export default Navbar;
