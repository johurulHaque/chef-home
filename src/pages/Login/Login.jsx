import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { FaGoogle, FaGithub } from "react-icons/fa";


const Login = () => {
  const { signIn, googleSign, githubSign } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/home";

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        form.reset();
        setSuccess("Successfully Login.");
        navigate(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const handleGoogle = () => {
    googleSign()
      .then((result) => {
        const user = result.user;
        navigate(from);
        // setSuccess("user has create successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        // console.log(errorMessage);
      });
  };

  const handleGithub = () => {
    githubSign()
      .then((result) => {
        const user = result.user;
        navigate(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        // console.log(errorMessage);
      });
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
        {/* <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Link to="/register">Go to register</Link>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
      <p className="text-success">{success}</p>
      <p className="text-danger">{error}</p>
      <Button variant="outline-primary" onClick={handleGoogle}>
        Sing With Google <FaGoogle />
      </Button>
      <Button variant="outline-info" onClick={handleGithub}>
        Sing With Github <FaGithub />
      </Button>
    </Container>
  );
};

export default Login;
