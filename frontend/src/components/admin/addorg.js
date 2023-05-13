import "../../stylesheets/addorg.css";
import app_config from "../../config";
import { useState } from "react";
import Swal from "sweetalert2";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik } from "formik";

    function AddOrg({ setOpenAddPlatform }) {
        const url = app_config.api_url;
        const [hero, setHero] = useState("");
        const [OrgFile, setOrgFile] = useState("");
        const navigate = useNavigate();
   
 
   const orgform = {
    firstname: String,
    lastname: String,
    organisationname: String,
    heroimage:String,
    registeredaddress: String,
    state: String,
    city:String,
    postalcode: String,
    description:String,
    email: String,
    link: String,
     

   };
   const formSubmit = (values) => {
    console.log(values);
    values.heroimage = hero;
    values.file = OrgFile;

    const reqOp = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    fetch(url + "org/add", reqOp)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.message == "success") {
          Swal.fire({
            icon: "success",
            title: "Added Successfully!!",
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
        setHero(event.target.files[0].name);
      });
  };

  const uploadfile = (event) => {
    const formdata = new FormData();
    formdata.append("file", event.target.files[0]);

    const reqOptions = {
      method: "POST",
      body: formdata,
    };

    fetch(url + "util/createfile", reqOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrgFile(event.target.files[0].name);
      });
  };
    return (
                  
<div class="container py-1">
  <div class="row d-flex justify-content-center align-items-center">
    <div class="col">
      <div class="card my-4 shadow-3">
        <div class="row g-0">
          <div class="col-xl-6 d-xl-block  bg-image img">
            <img src="https://i.pinimg.com/564x/8a/74/92/8a749279e941c383cbd413015c423155.jpg" alt="Sample photo"
              class="img-fluid" />
            
          </div>
          <div class="col-xl-6">
            <div class="card-body p-md-5 text-black">
              <h3 class="mb-4 text-uppercase">Add Organisers Details</h3>
              <Formik initialValues={orgform} onSubmit={formSubmit}>
                 {({ values, handleChange, handleSubmit }) => (
                   <form onSubmit={handleSubmit}>

                <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="organisationname" class="form-control form-control-lg" placeholder="Org Name" onChange={handleChange}
                  value={values.organisationname} />
                     <input
              
              onChange={uploadheroimage}
              type="file"
              fullwidth
              className="form-control mt-4 mx-0"
              title="Select heroimage"
            required/>
                    {/* <label class="form-label" for="form3Example1m"></label> */}
                  </div>
                </div>
                <div class="col-md-6 mb-4 ">
                  <div class="form-outline">
                    <input type="text" id="registeredaddress" class="form-control form-control-lg" placeholder="Org Address" onChange={handleChange}
                  value={values.registeredaddress} />
                    {/* <label class="form-label" for="form3Example1n">Last name</label> */}
                  </div>
                </div>
            </div>
            {/* </div> */}

              <div class="row">
                <div class="col-md-6 mb-4">
                <div class="form-outline">

                {/* <label for="state" > </label> */}
<select name="state" id="state" class="form-control" onChange={handleChange}
                  value={values.state}>
<option value="">--Select State--</option>
<option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
</select>
                </div>
                </div>
                
          
              </div>

              <div class="form-outline mb-4">
                <input type="text" id="postalcode" class="form-control form-control-lg"  placeholder="Pin Code" onChange={handleChange}
                  value={values.postalcode}/>
                {/* <label class="form-label" for="form3Example3">Zip</label> */}
              </div>
              

              <div class="form-outline mb-4">
                <input type="text" id="email" class="form-control form-control-lg" placeholder="Email"  onChange={handleChange}
                  value={values.email} />
                {/* <label class="form-label" for="form3Example2">Email</label> */}
              </div>
              <div class="form-outline mb-4">
                <input type="link" id="link" class="form-control form-control-lg"  placeholder="Official link"  onChange={handleChange}
                  value={values.link}/>
                {/* <label class="form-label" for="form3Example3">Zip</label> */}
              </div>
              <div class="form-outline mb-6 ">
                <input type="text" id="description" class="form-control form-control-lg"  placeholder="Description" onChange={handleChange}
                  value={values.description}/>
                {/* <label class="form-label" for="form3Example3">Zip</label> */}
              </div>
 <div class="d-flex justify-content-end pt-3">
               
              <button type="submit" class="btn btn-success btn-lg ms-2"
                   >Submit
                   <NavLink to="./main/browseorg"></NavLink></button>
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
</div>
    )
}
export default AddOrg;