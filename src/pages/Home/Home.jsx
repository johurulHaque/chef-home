import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import ChefCard from "../ChefCard/ChefCard";
import './Home.css'
const Home = () => {
  const [chefs, setChefs] = useState([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => {
        setChefs(data);
        setSpinner(false);
      });
  }, []);

  // console.log(chef)
  return (
    <Container>
      {spinner && <div className="loader_spin"><Spinner animation="border" variant="warning" /></div>}

      <Row xs={1} md={2} lg={2} className="g-4">
        {chefs.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
