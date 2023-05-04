import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import cook from "../../assets/cook.json"
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
  Spinner,
} from "react-bootstrap";
import ChefCard from "../ChefCard/ChefCard";
import "./Home.css";
import Marquee from "react-fast-marquee";

const Home = () => {
  const [chefs, setChefs] = useState([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    fetch("https://chef-home-server-johurulhaque.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => {
        setChefs(data);
        setSpinner(false);
      });
  }, []);

  // console.log(chef)
  return (
    <Container>
      <Row className="align-items-center" style={{ marginBottom: "25px" }}>
        <Col md={6} className="p-5">
          <h1 className="banner_head">Delicious Chinese Food</h1>
          <p>
            Explore our menu and savor the flavors of traditional Chinese
            cuisine. From savory stir-fries to delectable dumplings, we have
            something for everyone.
          </p>
          <Button variant="warning" size="lg">
            Explore Us
          </Button>
        </Col>
        <Col md={6} className="p-0">
        <Lottie animationData={cook} loop={true} />
          {/* <Image src="/images.jpg" fluid style={{ width: "550px" }} /> */}
        </Col>
      </Row>
      {spinner && (
        <div className="loader_spin">
          <Spinner animation="border" variant="warning" />
        </div>
      )}

      <Row
        xs={1}
        md={2}
        lg={2}
        className="g-4"
        style={{ marginBottom: "25px" }}
      >
        {chefs.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
      </Row>

      <h3 className="text-center heading_text">Our brand partnership</h3>
      <Marquee style={{ marginBottom: "25px" }}>
        <Image src="/logo1.png" fluid style={{ width: "150px" }} />
        <Image src="/logo2.png" fluid style={{ width: "150px" }} />
        <Image src="/logo3.png" fluid style={{ width: "150px" }} />
        <Image src="/logo4.png" fluid style={{ width: "150px" }} />
        <Image src="/logo5.jpg" fluid style={{ width: "150px" }} />
        <Image src="/logo6.jpg" fluid style={{ width: "150px" }} />
        <Image src="/logo7.jpg" fluid style={{ width: "150px" }} />
      </Marquee>

      <Row className="justify-content-center mb-2">
        <Col md={8} className="text-center">
          <h2 className="heading_text">Why Choose Us?</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title className="chef_text"><b> Authentic Flavors</b> ❤️</Card.Title>
              <Card.Text className="chef_text">
                We use only the freshest ingredients and traditional cooking
                techniques to create dishes that are bursting with authentic
                Chinese flavors.
              </Card.Text>
              <Button variant="warning" style={{ color: "white" }}>
                Explore More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title className="chef_text"><b> Affordable Prices</b> 💲</Card.Title>
              <Card.Text className="chef_text">
                We believe that great food should be accessible to everyone,
                which is why we offer our delicious dishes at affordable
                prices.We are always...
              </Card.Text>
              <Button variant="warning" style={{ color: "white" }}>
                Explore More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title className="chef_text"><b> Exceptional Service</b> 😀</Card.Title>
              <Card.Text className="chef_text">
                Our friendly staff is dedicated to providing exceptional service
                to every customer, making sure that your dining experience is
                ...
              </Card.Text>
              <Button variant="warning" style={{ color: "white" }}>
                Explore More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
