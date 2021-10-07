import { Navbar, Nav, Container, } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

const MyNavbar = () => (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">WAKOSTONES</Navbar.Brand>
    <Nav className="me-auto">
      {/* <Nav.Link href="#home">Home</Nav.Link> */}
      <Link to="/" className="nav-link">Home</Link>
      {/* <Nav.Link href="#features">Register</Nav.Link> */}
      <Link to="/register" className="nav-link">Register</Link>
    </Nav>
    </Container>
  </Navbar>
)

export default withRouter(MyNavbar)