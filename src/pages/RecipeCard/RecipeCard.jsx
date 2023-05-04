import React, { useState } from "react";
import { Button, Card, Col, Spinner } from "react-bootstrap";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import toast from "react-hot-toast";
import LazyLoad from "react-lazy-load";

const RecipeCard = ({ recipe }) => {
  const { name, rating, ingredients, image, cooking_method } = recipe;
  const [disable, setDisable] = useState(false);
  //   console.log("recipe", recipe);
    // const [spinner, setSpinner] = useState(true);

    // if (recipe) {
    //   setSpinner(false);
    // }
  const notify = () => {
    toast.success("The recipe is your favorite.");
    setDisable(true);
  };
  return (
    <Col>
      {/* {spinner && (
        <div className="loader_spin">
          <Spinner animation="border" variant="warning" />
        </div>
      )} */}

      <Card>
        <LazyLoad height={300}>
          {/* <img src='http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg' /> */}
          <Card.Img variant="top" src={image} style={{height:"300px"}} />
        </LazyLoad>

        <Card.Body>
          <Card.Title>
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="chef_name">{name}</h3>
            </div>
          </Card.Title>
          <Card.Text className="chef_text">
            <p>
              <b> Ingredients:</b>{" "}
              {ingredients.map((ingre, idx) => (
                <span key={idx}>{ingre}, </span>
              ))}
            </p>
            <p>
              <b>Cooking Method: </b>
              {cooking_method.slice(0,180)}...
            </p>
          </Card.Text>
          {/* <Link to={`/chef/${id}`}>
            <Button variant="info" className="text-white">View Recipes</Button>
            </Link> */}
          <div className="d-flex justify-content-between">
            <Button
              variant={disable ? "secondary" : "info"}
              onClick={notify}
              style={{ color: "white" }}
              disabled={disable}
            >
              Add to favorite
            </Button>
            <div>
            <Rating
              placeholderRating={rating}
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning" />}
              fullSymbol={<FaStar />}
            ></Rating>
            <span className="ms-1">{rating}</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RecipeCard;
