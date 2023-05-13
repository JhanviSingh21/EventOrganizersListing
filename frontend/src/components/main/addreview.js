import "../../stylesheets/signup.css";
//import "../../stylesheets/addreview.css";
import * as React from "react";
//import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { NavLink, useNavigate, useParams } from "react-router-dom";
//import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid";
import { Formik } from "formik";
import Swal from "sweetalert2";
import app_config from "../../config";
import { useState } from "react";
function AddReview({ setOpenAddReview }) {
  const url = app_config.api_url;
  const [hero, setHero] = useState("");
  const [ReviewFile, setReviewFile] = useState("");
  const navigate = useNavigate();

  const reviewform = {
    description: "",
  };
  const formSubmit = (values) => {
    console.log(values);
    const reqOp = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    fetch(url + "review/add", reqOp)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.message === "success") {
          Swal.fire({
            icon: "success",
            title: "Added Successfully!!",
          });
        }
      });
  };

  return (
    <div>
      <div class="login">
        <div class="login-box">
          {/* <h1>Login</h1> */}
          <Formik initialValues={reviewform} onSubmit={formSubmit}>
            {({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                {/* <Avatar sx={{ m: 5,mx:40, bgcolor: 'secondary.main' }}> */}
                {/* <LockOutlinedIcon /> */}
                {/* </Avatar> */}
                <h1 className="add"> Review</h1>

                <TextField
                  multiline
                  rows={5}
                  className="w-100 mt-4 bg-white"
                  label="Description"
                  variant="filled"
                  id="description"
                  onChange={handleChange}
                  value={values.description}
                ></TextField>

                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{ mt: 4, mb: 2 }}
                  onClick={(e) => navigate("/main/browsereview/")}
                >
                  Add
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item mx={27}></Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
export default AddReview;
