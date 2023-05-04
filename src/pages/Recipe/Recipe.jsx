import React, { useState } from "react";
import { Badge, Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";
import LazyLoad from "react-lazy-load";
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import 'leaflet/dist/leaflet.css';

const Recipe = () => {
  const singleChef = useLoaderData();

  const { bio, experience, image, name, numLikes, numRecipes, recipe } =
    singleChef;
  //   console.log(recipe);
  // const position = [51.505, -0.09];

  return (
    <Container fluid className="bg-light py-5">
      <Row>
        <Col md={4}>
          <LazyLoad height={300}>
            <Image src={image} fluid rounded />
          </LazyLoad>
        </Col>
        <Col md={8}>
          <h2 className="chef_name">{name}</h2>
          <p className="chef_text">{bio}</p>
          <p className="chef_text">
            <b> Likes: </b>
            {numLikes}
          </p>
          <p className="chef_text">
            <b> Number of Recipes: </b> {numRecipes} recipes.
          </p>
          <p className="chef_text">
            <b> Years of Experience: </b> {experience} years.
          </p>
          <Badge pill variant="primary">
            Fantastic Chef
          </Badge>
        </Col>
      </Row>

      <Row xs={1} md={3} lg={3} className="g-4">
        {recipe.map((rec) => (
          <RecipeCard key={rec.id} recipe={rec}></RecipeCard>
        ))}
      </Row>

      {/* <Row>
        <div style={{ height: "536px" }}>
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </Row> */}
    </Container>
  );
};

export default Recipe;
