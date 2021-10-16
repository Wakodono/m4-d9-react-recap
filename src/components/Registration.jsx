import { Form, Col, Row, Button } from 'react-bootstrap'

const Registration = () => (
    <Form className="my-3">
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="name" placeholder="First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridSurname">
      <Form.Label>Surname</Form.Label>
      <Form.Control type="surname" placeholder="Surname" />
    </Form.Group>
  </Row>

      <Form.Group className="mb-3" controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridPasswordConfirmation">
        <Form.Label>Password Confirmation</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
)

export default Registration