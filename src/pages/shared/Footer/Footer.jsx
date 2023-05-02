import React from "react";
import "./Footer.css";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer">
          <Col sm={4} lg={6}>
            <h3 className="footer-text">Get The Latest Updated</h3>
            <p>
              Connect with us and get the more information for the latest update
            </p>
            <div>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Subscribe
                </Button>
              </Form>
            </div>
          </Col>
          <Col sm={4} lg={3}>
            <h3 className="footer-text">Quick Links</h3>
            <ul className="list">
              <li>Homepage</li>
              <li>About Us</li>
              <li>Team & Story</li>
              <li>Our Services</li>
            </ul>
            <h3 className="footer-text">Usefull Links</h3>
            <ul className="list">
              <li>Our Menu</li>
              <li>Detail Menu</li>
              <li>Join us</li>
              <li>Download Apps</li>
            </ul>
          </Col>
          <Col sm={4} lg={3}>
            <h3 className="footer-text">Information</h3>
            <p>We are here to support you always.</p>
            <h5>Head Office</h5>
            <p>Lumbung Hidup Street 42 East Java 63125</p>

            <h5>Production Office</h5>
            <p>Nggepeng Village Gresik  East China Java 61152</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
