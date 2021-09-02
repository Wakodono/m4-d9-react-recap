import { Navbar, Nav, Container } from 'react-bootstrap'

const MyNavbar = () => (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">WAKOSTONES</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Register</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
)

export default MyNavbar