import React from "react";
// import chef from "../../assets/chef.jpg";
import { Button, Card, Col } from "react-bootstrap";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import './ChefCard.css'
const ChefCard = ({ chef }) => {
  const { id, name, bio, experience, image, numLikes, numRecipes } = chef;
  // console.log(chef);
  return (
    <Col>
      <Card>
        <LazyLoad height={300}>
          <Card.Img variant="top" src={image} style={{height:"300px"}}/>
        </LazyLoad>
        <Card.Body>
          <Card.Title>
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="chef_name">{name}</h3>
              <p className="d-flex gap-2">
                {numLikes}
                <FaThumbsUp className="text-primary" />
              </p>
            </div>
          </Card.Title>
          <Card.Text className="chef_text">
            <p><b>  Experience: </b>{experience} years</p>
            <p><b>Number of recipe: </b>{numRecipes} recipes</p>
          </Card.Text>
          <Link to={`/chef/${id}`}>
            <Button variant="info" className="text-white">
              View Recipes
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ChefCard;
