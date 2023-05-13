import "../../stylesheets/adminlogin.css";
import app_config from "../../config";
import Swal from "sweetalert2";
import { Formik } from "formik";
import React, { useState } from "react";
const Login = () => {
  const url = app_config.api_url;
  const loginform = {
    email: "",
    password: "",
  };

  const formSubmit = (values) => {
    fetch(url + "adminuser/getbyemail/" + values.email)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);

          if (data.password == values.password) {
            console.log("login success");

            Swal.fire({
              icon: "success",
              title: "Login Success",
            });

            sessionStorage.setItem("admin", JSON.stringify(data));
            window.location.replace("/admin/manageuser");

            return;
          }
        }

        Swal.fire({
          icon: "error",
          title: "Email or Password Incorrect",
        });
      });
  };

  return (
    <div class="whole">
      <div class="container contain">
        <div class="row">
          <div class="offset-md-2 col-lg-5 col-md-7 offset-lg-4 offset-md-3">
            <div class="panel border bg-white">
              <div class="panel-heading">
                <h3 class="pt-3 font-weight-bold">Login</h3>
              </div>
              <div class="panel-body p-3">
                <Formik initialValues={loginform} onSubmit={formSubmit}>
                  {({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit} class="mb-3">
                      {/* <form action="login_script.php" method="POST"> */}
                      <div class="form-group py-2">
                        <div class="input-field">
                          <span class="far fa-user p-2"></span>
                          <input
                            type="email"
                            class="form-control"
                            placeholder="example@gmail.com"
                            id="email"
                            onChange={handleChange}
                            value={values.email}
                            required
                          />
                        </div>
                      </div>
                      <div class="form-group py-1 pb-2">
                        <div class="input-field">
                          <span class="fas fa-lock px-2"></span>
                          <input
                            type="password"
                            class="form-control"
                            placeholder="password"
                            id="password"
                            onChange={handleChange}
                            value={values.password}
                            required
                          />
                          <button class="btn bg-white text-muted">
                            <span class="far fa-eye-slash"></span>
                          </button>
                        </div>
                      </div>
                      <div class="form-inline">
                        <input type="checkbox" name="remember" id="remember" />
                        <label for="remember" class="text-muted">
                          Remember me
                        </label>
                        <a href="#" id="forgot" class="font-weight-bold">
                          Forgot password?
                        </a>
                      </div>
                      <button type="submit" class="btn btn-primary btn-block">
                        Login
                      </button>
                      {/* <div class="btn btn-primary btn-block mt-3" type="submit">Login</div> */}
                      <div class="text-center pt-4 text-muted">
                        Don't have an account? <a href="#">Sign up</a>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
