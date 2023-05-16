import { Avatar, Rating, TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import app_config from "../../config";
import "../../stylesheets/orgdetail.css";
import { Formik } from "formik";
import Swal from "sweetalert2";

const PPTViewer = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [orgData, setOrgData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [reviewList, setReviewList] = useState([]);
  const [rLoading, setRLoading] = useState(true);

  const url = app_config.api_url;
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [ratingText, setRatingText] = useState("");
  const [rating, setRating] = useState(5);

  const fetchData = () => {
    fetch(url + "org/getbyid/" + id).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setOrgData(data);
          fetchReviews(data._id);
          setLoading(false);
        });
      }
    });
  };
  const fetchReviews = (org_id) => {
    fetch(url + "review/getbyitem/" + org_id).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setReviewList(data);
          setRLoading(false);
        });
      }
    });
  };

  const showRating = () => {
    if (currentUser !== null) {
      return (
        <div class="card p-3 mt-3">
          <h4 className="text-muted">Review</h4>
          <hr />
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />

          <TextField
            label="Write Something .."
            fullWidth
            className="mt-2"
            multiline
            rows={3}
            value={ratingText}
            onChange={(e) => setRatingText(e.target.value)}
          />
          <button className="btn btn-primary mt-4" onClick={addReview}>
            Submit Review
          </button>
        </div>
      );
    }
  };

  const addReview = () => {
    fetch(url + "review/add", {
      method: "POST",
      body: JSON.stringify({
        rating: rating,
        text: ratingText,
        user: currentUser._id,
        org: orgData._id,
        createdAt: new Date(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        toast.success("Review Added");
        fetchReviews(orgData._id);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayRatings = () => {
    if (!rLoading) {
      return reviewList.map(({ createdAt, rating, user, text }) => (
        <div className="card">
          <div className="card-body">
            <Avatar alt="User" />
            <span>
              <b>{user.fullname}</b>
            </span>
            <Rating name="simple-controlled" value={rating} />
            <h5 className="text-dark">{text}</h5>
          </div>
        </div>
      ));
    }
  };

  const displayDetails = () => {
    if (!loading && orgData !== null)
      return (
        <div className="card" style={{ marginTop: "-300px" }}>
          <div className="card-body">
            <h2>{orgData.organisationname}</h2>
            <p className="text-muted fw-bold">{orgData.registeredaddress}</p>
            <img
              src={url + orgData.heroimage}
              alt=""
              className="card-img-top"
            />

            <p className="mt-4">{orgData.description}</p>

            <h4 className="mt-4">Event Images</h4>
            <hr className="mb-3" />
            {orgData.images.length > 0 ? (
              <div className="row">
                {orgData.images.map((image, index) => (
                  <div className="col-md-6 mb-4">
                    <img src={url + image} alt="" />
                  </div>
                ))}
              </div>
            ) : (
              <h1 className="text-muted text-center">No Images Found</h1>
            )}
          </div>
        </div>
      );
  };

  return (
    <div style={{ background: "#eee", backgroundAttachment: "fixed" }}>
      <div
        className="header-image"
        style={{
          backgroundImage: `url("https://wallpapercave.com/wp/wp7488367.jpg")`,
        }}
      ></div>
      <div className="container">
        <div className="row">{displayDetails()}</div>
        {showRating()}
        <hr className="my-2" />
        <h3>User Reviews</h3>
        {displayRatings()}
      </div>
    </div>
  );
};

export default PPTViewer;
