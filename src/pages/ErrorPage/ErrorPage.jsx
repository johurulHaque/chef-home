// import { FaceFrownIcon } from '@heroicons/react/24/solid'
import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../assets/404.jpg";
import "./ErrorPage.css";
const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        {/* <FaceFrownIcon className='w-40 h-40 text-yellow-500' /> */}
        <Container>
          <div className="errorPage">
            <div>
              <img src={errorImg} alt="" />
              <h2>
                <span>Error</span>
                {status || 404}
              </h2>
              <p>{error?.message}</p>
              <Link to="/">
                <Button variant="primary">Back to homepage</Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ErrorPage;
