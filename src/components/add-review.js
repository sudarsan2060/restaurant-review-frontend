import React, { useState } from "react";
import RestaurantDataService from "../services/restaurant";
import { Link } from "react-router-dom";

const AddReview = (props) => {
  let initialReviewState = "";

  let editing = false;

  if (props.location.state && props.location.state.currentReview) {
    editing = true;
    initialReviewState = props.location.state.currentReview.text;
  }

  const [review, setReview] = useState(initialReviewState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setReview(event.target.value);
  };

  const saveReview = () => {
    var data = {
      text: review,
      name: props.user.name,
      user_id: props.user.id,
      restaurant_id: props.match.params.id,
    };

    if (editing) {
      data.review_id = props.location.state.currentReview._id;
      RestaurantDataService.updateReview(data)
        .then((response) => {
          setSubmitted(true);
          setReview(data.text);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      RestaurantDataService.createReview(data)
        .then((response) => {
          setSubmitted(true);
          setReview(data.text);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div style={{ width: "70%" }} className="m-auto">
      {props.user ? (
        <div className="submit-form card " style={{ background: "#1ca9c9" }}>
          {submitted ? (
            <div className="text-center m-3">
              <h4>You submitted successfully!</h4>
              <Link
                to={"/restaurants/" + props.match.params.id}
                className="btn btn-success"
              >
                Back to Restaurant
              </Link>
            </div>
          ) : (
            <div className="card-body">
              <div className="form-group text-center ">
                <label htmlFor="description m-2">
                  <strong> {editing ? "Edit" : "Create"} Review</strong>
                </label>
                <input
                  type="text"
                  className="form-control mx-auto my-2"
                  id="text"
                  required
                  value={review}
                  onChange={handleInputChange}
                  name="text"
                />
              </div>
              <div className="text-center">
                {" "}
                <button onClick={saveReview} className="btn btn-success">
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>Please log in.</div>
      )}
    </div>
  );
};

export default AddReview;
