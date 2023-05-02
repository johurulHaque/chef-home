import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { FaGoogle,FaGithub } from "react-icons/fa";

const Register = () => {
  const { createUser, googleSign, githubSign } = useContext(AuthContext);
  // , googleSignOut
  // const [user, setUser] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    if (email === "" || password === "") {
      setError("Email or Password cant be empty.");
      return;
    } else if (password.length < 6) {
      setError("Password must be in six character.");
      return;
    } 

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        setSuccess('successfully register the user')
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
          setSuccess("user has create successfully");
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
        })
        .catch((error) => {
          const errorMessage = error.message;
          // console.log(errorMessage);
        });
    };

  //   const handleSignOut = () => {
  //     googleSignOut()
  //       .then(() => {
  //         setUser(null);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  return (
    <Container className="w-25 mx-auto">
      <Form onSubmit={handleRegister}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            required
         
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control
            type="text"
            name="photoURL"
            placeholder="Enter photo url"
            required
       
          />
        </Form.Group>
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
          Register
        </Button>
        <Link to="/login">Go to Login</Link>
        <Form.Text className="text-danger"></Form.Text>
      </Form>

      {/* {user ? (
        <>
          <span>User: {user?.displayName}</span>
          <p>Email: {user?.email}</p>
          <img src={user?.photoURL} alt="adsasd" />
          <button onClick={handleSignOut}>SignOut</button>
        </>
      ) : (
        <>
          <button onClick={handleGoogle}>Google</button>
          <button onClick={handleGithub}>Github</button>
        </>
      )} */}
      <p className="text-success">{success}</p>
      <p className="text-danger">{error}</p>
      <Button variant="outline-primary" onClick={handleGoogle}>Sing With Google  <FaGoogle /></Button>
      <Button variant="outline-info" onClick={handleGithub}>Sing With Github <FaGithub /></Button>
    </Container>
  );
};

export default Register;
