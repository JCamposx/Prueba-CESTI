import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { default as NavBootstrap } from "react-bootstrap/Navbar";
import { routes } from "../routes/routes";

function Navbar() {
  return (
    <NavBootstrap bg="dark" variant="dark" expand="lg" className="mb-3">
      <Container>
        <NavBootstrap.Brand href={routes.home}>Posts CRUD</NavBootstrap.Brand>

        <NavBootstrap.Toggle aria-controls="basic-navbar-nav" />

        <NavBootstrap.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={routes.api.posts.create}>New post</Nav.Link>
            <Nav.Link href="#">Logout</Nav.Link>
          </Nav>
        </NavBootstrap.Collapse>
      </Container>
    </NavBootstrap>
  );
}

export default Navbar;
