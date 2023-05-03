import React, { useState } from "react";
import { Badge, Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";

const Recipe = () => {

  const singleChef = useLoaderData();


  const { bio, experience, image, name, numLikes, numRecipes, recipe } =
    singleChef;
//   console.log(recipe);
  return (
    <Container fluid className="bg-light py-5">
      <Row>
        <Col md={4}>
          <Image src="https://i.ibb.co/1M1nCdj/2.png" fluid rounded />
        </Col>
        <Col md={8}>
          <h1>{name}</h1>
          <p>{bio}</p>
          <p>Likes: {numLikes}</p>
          <p>Number of Recipes: {numRecipes}</p>
          <p>Years of Experience: {experience}</p>
          <Badge pill variant="primary">
            Featured Chef
          </Badge>
        </Col>
      </Row>

      <Row xs={1} md={3} lg={3} className="g-4">
      
        {recipe.map((rec) => (
          <RecipeCard key={rec.id} recipe={rec}></RecipeCard>
        ))}
      </Row>
    </Container>
  );
};

export default Recipe;
