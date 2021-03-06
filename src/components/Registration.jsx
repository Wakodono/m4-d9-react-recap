import { Form, Col, Row, Button } from "react-bootstrap";
import { useState } from "react";

const Registration = () => {
  const [registration, setRegistration] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInput = (key, value) => {
    setRegistration({
      ...registration,
      [key]: value,
    });
  };

  const isFormComplete = () => {
    let formComplete = false
    if (
      registration.name.length > 2 &&
      registration.surname.length > 3 &&
      registration.password.length > 8 &&
      registration.password.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/) &&
      registration.password === registration.confirmPassword
    ){
      formComplete = true
    }
    return formComplete
  }

  return (
    <Form className="my-3">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            required
            onChange={(e) => handleInput("name", e.target.value)}
            placeholder="First Name"
            value={registration.name}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSurname">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Surname"
            onChange={(e) => handleInput("surname", e.target.value)}
            value={registration.surname}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => handleInput("email", e.target.value)}
          value={registration.email}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => handleInput("password", e.target.value)}
          value={registration.password}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridPasswordConfirmation">
        <Form.Label>Password Confirmation</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => handleInput("confirmPassword", e.target.value)}
          value={registration.confirmPassword}
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!isFormComplete()}>
        Submit
      </Button>
    </Form>
  );
};

export default Registration;
