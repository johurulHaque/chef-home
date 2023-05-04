// import { FaceFrownIcon } from '@heroicons/react/24/solid'
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../assets/404.jpg";
import Lottie from "lottie-react";
import errorLottie from "../../assets/error.json";
import "./ErrorPage.css";
const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        {/* <FaceFrownIcon className='w-40 h-40 text-yellow-500' /> */}
        <Container>
          <Row>
            <Col md={6} className="p-5">
              <Lottie animationData={errorLottie} loop={true} />
            </Col>
            <Col md={6} className="p-0">
              <div className="errorPage">
                <div>
                  <h2 className="chef_text">
                    <span>We fatch some problem to serve you, we are waiting to see you soon.</span>
                    {status || 404}
                  </h2>
                  <p>{error?.message}</p>
                  <Link to="/">
                    <Button variant="success">Back to home</Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default ErrorPage;
