import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, googleSign, githubSign, updateUser, allSignOut } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  // , googleSignOut
  // const [user, setUser] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [pass, setPass] = useState("password");

  const handleRegister = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const photoURL = form.photoURL.value;

    if (email === "" || password === "") {
      setError("Email or Password cant be empty.");
      return;
    } else if (password.length < 6) {
      setError("Password must be in six character.");
      return;
    } else if (password != confirmPassword) {
      setError("Confirm Password doesn't match.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();

        updateUserProfile(user, {
          displayName: name,
          photoURL: photoURL,
        });

        setSuccess("successfully register the user");
        // navigate(from);
        handleSignOut();
        navigate("/login");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const updateUserProfile = (user, obj) => {
    updateUser(user, obj)
      .then(() => {
        // console.log(user);
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };
  const handleGoogle = () => {
    googleSign()
      .then((result) => {
        const user = result.user;
        setSuccess("user has create successfully");
        navigate(from);
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

  const handleSignOut = () => {
    allSignOut()
      .then(() => {
        // setUser(null);
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  const showPass = () => {
    setPass("text");
  };
  const hidePass = () => {
    setPass("password");
  };
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
        <Form.Group controlId="formBasicPassword" className="mb-2">
          <Form.Label>Password </Form.Label>
          <span>
            {pass == "text" ? (
              <FaEyeSlash onClick={hidePass} />
            ) : (
              <FaEye onClick={showPass} />
            )}
          </span>
          <Form.Control
            type={pass}
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className="mb-2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="confirmPassword"
            required
          />
        </Form.Group>
        {/* <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="info" type="submit" className="mb-2">
          Register
        </Button>
        <Link to="/login" style={{ textDecoration: "none" }}>
          or Login
        </Link>{" "}
        <br />
        <Form.Text className="text-success">{success}</Form.Text>
        <Form.Text className="text-danger">{error}</Form.Text>
        {/* <p className="text-success">{success}</p>
      <p className="text-danger">{error}</p> */}
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

      <Button variant="outline-primary" onClick={handleGoogle} className="mb-2">
        Sing With Google <FaGoogle />
      </Button>
      <Button variant="outline-info" onClick={handleGithub}>
        Sing With Github <FaGithub />
      </Button>
    </Container>
  );
};

export default Register;
