import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { AuthContext } from "../providers/AuthProviders";
// import {  } from "react-router-dom";

const Login = () => {
//   const { signIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    
    // signIn(email, password)
    //   .then((result) => {
    //     const user = result.user;
    //     if(user.emailVerified){
    //         alert('please verify your email')
    //     }
    //     console.log(user);
    //     form.reset();
    //   })
    //   .catch((error) => {
    //     const errorMessage = error.message;
    //     console.log(errorMessage);
    //   });
  };

  return (
    <Container className="w-25 mx-auto">
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Link to="/register">Go to register</Link>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
