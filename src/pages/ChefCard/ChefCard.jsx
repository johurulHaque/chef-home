import React from "react";
// import chef from "../../assets/chef.jpg";
import { Button, Card, Col } from "react-bootstrap";
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const { id, name, bio, experience, image, numLikes, numRecipes } = chef;
  // console.log(chef);
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src="https://i.ibb.co/1M1nCdj/2.png" />
        <Card.Body>
          <Card.Title>
            <div className="d-flex justify-content-between align-items-center">
              <h3>{name}</h3>
              <p><FaThumbsUp  className="text-primary"/>{numLikes}</p>
            </div>
          </Card.Title>
          <Card.Text>
            <p>Experience: {experience} years</p>
            <p>Number of recipe: {numRecipes}</p>
          </Card.Text>
          <Link to={`/chef/${id}`}>
          <Button variant="info" className="text-white">View Recipes</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ChefCard;
