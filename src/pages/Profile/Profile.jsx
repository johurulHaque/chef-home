import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Row>
      <Col md={6} className="p-5"> 
        <h4 className="chef_text"> <b>Name: </b> {user?.displayName ? user.displayName : "no user name found"}</h4>
        <h4 className="chef_text"> <b>Email: </b> {user?.email ? user.email : "no user name found"}</h4>
        <Button variant="info" className="w-50 d-block">Password reset</Button>
      </Col>
      <Col md={6} className="p-5">
        <Image src={user?.photoURL} alt="no profile picture"style={{width:"150px"}} rounded/>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
