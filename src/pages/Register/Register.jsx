import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { AuthContext } from "../providers/AuthProviders";
// import { sendEmailVerification } from "firebase/auth";

const Register = () => {
//   const { createUser, googleSign, googleSignOut, githubSign,emailVerify } =
//     useContext(AuthContext);

  const [user, setUser] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    setError("");
    setSuccess("");

    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    // if (!/(?=.*[A-Z])/.test(password)) {
    //   setError("at least 1 upperCase.");
    //   return;
    // } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
    //   setError("at least 2 digit.");
    //   return;
    // } else if (!/(?=.*[!@#$&*])/.test(password)) {
    //   setError("Please add a special character.");
    //   return;
    // }

    // createUser(email, password)
    //   .then((result) => {
    //     const user = result.user;
    //     emailVerify(user).then(() => {
    //         console.log(user)
    //         setUser(user);
    //     });
    //     form.reset();
    //   })
    //   .catch((error) => {
    //     const errorMessage = error.message;
    //     console.log(errorMessage);
    //   });
  };

//   const handleGoogle = () => {
//     googleSign()
//       .then((result) => {
//         const user = result.user;
//         setUser(user);
//         console.log(user);
//         setSuccess("user has create successfully");
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         console.log(errorMessage);
//       });
//   };

//   const handleGithub = () => {
//     githubSign()
//       .then((result) => {
//         const user = result.user;
//         setUser(user);
//         console.log(user);
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         console.log(errorMessage);
//       });
//   };

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
            name="photo url"
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
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
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
    </Container>
  );
};

export default Register;
