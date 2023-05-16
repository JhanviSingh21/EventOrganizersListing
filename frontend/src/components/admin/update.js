import { Formik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import app_config from "../../config";
import Swal from "sweetalert2";
import { useState } from "react";

const Update = (props) => {
  const url = app_config.api_url;
  const [hero, setHero] = useState("");
  const [orgFile, setOrgFile] = useState("");

  const updateData = (data) => {
    fetch(url + "org/update/" + props.formdata._id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      if (data.message === "success") {
        Swal.fire({
          icon: "success",
          title: " Updated Successfully!!",
        });
      }
    });
  }
  
  const pushUpdateData = (data) => {
    fetch(url + "org/addeventimage/" + props.formdata._id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      if (data.message === "success") {
        Swal.fire({
          icon: "success",
          title: " Updated Successfully!!",
        });
      }
    });
  }

  const formSubmit = (values) => {
    console.log(values);
    values.heroimage = hero;
    values.file = orgFile;

    const reqOp = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    fetch(url + "org/update/" + props.formdata._id, reqOp)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.message == "success") {
          Swal.fire({
            icon: "success",
            title: " Updated Successfully!!",
          });
        }
      });
  };

  const uploadheroimage = (event) => {
    const formdata = new FormData();
    formdata.append("file", event.target.files[0]);

    const reqOptions = {
      method: "POST",
      body: formdata,
    };

    fetch(url + "util/addfile", reqOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        updateData({ heroimage: event.target.files[0].name });
      });
  };

  const uploadfile = (event) => {
    const formdata = new FormData();
    formdata.append("file", event.target.files[0]);

    const reqOptions = {
      method: "POST",
      body: formdata,
    };

    fetch(url + "util/addfile", reqOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        pushUpdateData({ images: event.target.files[0].name });
      });
  };

  return (
    <div class="">
      <div class="card-body p-md-5 text-black">
        <h3 class="mb-4 text-uppercase">Update Data</h3>
        <Formik initialValues={props.formdata} onSubmit={formSubmit}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div class="row">
                <div class="col-md-12 ">
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example1n">
                      Organizer Name
                    </label>
                    <input
                      type="text"
                      id="organisationname"
                      class="form-control form-control-lg"
                      placeholder="organisation name"
                      onChange={handleChange}
                      value={values.organisationname}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div class="col-md-6">
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example8">
                      Address
                    </label>
                    <input
                      type="text"
                      id="registeredaddress"
                      class="form-control form-control-lg"
                      placeholder="address"
                      onChange={handleChange}
                      value={values.registeredaddress}
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3">
                      Pin Code
                    </label>
                    <input
                      type="text"
                      id="postalcode"
                      class="form-control form-control-lg"
                      placeholder="zip"
                      onChange={handleChange}
                      value={values.postalcode}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example2">
                      Offical Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      class="form-control form-control-lg"
                      placeholder="email"
                      onChange={handleChange}
                      value={values.email}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3">
                      Offical Link
                    </label>
                    <input
                      type="link"
                      id="link"
                      class="form-control form-control-lg"
                      placeholder="official link"
                      onChange={handleChange}
                      value={values.link}
                    />
                  </div>
                </div>
              </div>

              <h4 className="mt-4">Upload Cover Image</h4>
              <label htmlFor="hero-img" className="btn btn-dark"> <i class="fas fa-upload    "></i> Select Image</label>
              <input hidden id="hero-img" onChange={uploadheroimage} type="file" />
              <h4 className="mt-4">Add Event Images</h4>
              <label htmlFor="event-img" className="btn btn-dark"> <i class="fas fa-upload    "></i> Select Image</label>
              <input hidden id="event-img" onChange={uploadfile} type="file" />

              <div class="d-flex justify-content-end pt-3">
                <button type="submit" class="btn btn-success btn-lg ms-2">
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Update;
