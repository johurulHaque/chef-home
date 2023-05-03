import React, { useState } from "react";
import { Button, Card, Col, Spinner } from "react-bootstrap";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import toast from 'react-hot-toast';

const RecipeCard = ({ recipe }) => {
  const { name, rating, ingredients, image, cooking_method } = recipe;
  const [disable,setDisable] = useState(false)
  //   console.log("recipe", recipe);
  //   const [spinner, setSpinner] = useState(true);

  //   if (recipe) {
  //     setSpinner(false);
  //   }
  const notify = () => {
    toast.success('The recipe is your favorite.');
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
        <Card.Img variant="top" src="https://i.ibb.co/1M1nCdj/2.png" />
        <Card.Body>
          <Card.Title>
            <div className="d-flex justify-content-between align-items-center">
              <h3>{name}</h3>
            </div>
          </Card.Title>
          <Card.Text>
            <p>
              Ingredients:{" "}
              {ingredients.map((ingre, idx) => (
                <span key={idx}>{ingre}, </span>
              ))}
            </p>
            <p>Cooking Method: {cooking_method}</p>
          </Card.Text>
          {/* <Link to={`/chef/${id}`}>
            <Button variant="info" className="text-white">View Recipes</Button>
            </Link> */}
          <div>
            <Rating
              placeholderRating={rating}
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning" />}
              fullSymbol={<FaStar />}
            ></Rating>
            <span className="ms-1">{rating}</span>
          </div>
          <Button variant="info" onClick={notify} disabled={disable}>Add to favorite</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RecipeCard;
