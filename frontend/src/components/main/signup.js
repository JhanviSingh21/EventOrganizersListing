import"../../stylesheets/signup.css";
import Swal from "sweetalert2";
import { Formik } from "formik";
import app_config from "../../config";
function Signup({ setOpenSignup}){
    const url = app_config.api_url;

  const signupform = {
    fullname: "",
    email: "",
    password: "",
    state:"",
    dateofbirth:"",
    gender:""
  };

  const formSubmit = (values) => {
    console.log(values);

    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    // request on server and parse the json response
    fetch(url + "user/add", reqOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message == "success") {
          Swal.fire({
            icon: "success",
            title: "Registered!",
            text: "Now Login to Continue",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Something went wrong",
          });
        }
      });
  };
    return(
<div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="row">
          <div
            class="col-12 col-sm-8 col-md-6 col-lg-4 offset-sm-2 offset-md-3 offset-lg-4"
          >
            <h1 class="mb-3 text-center">Create a New Account</h1>
            {/* <p class="lead">
              Register with an Email ID
            </p> */}
            <div class="login_link">
      Already have an Account?  <a href="./login" title="log in">log in</a> 
    </div>
    <Formik initialValues={signupform} onSubmit={formSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit} class="mb-3">
    
              <div class="row">
                
                <div class="form-group col-12 ">
                  <label for="fullname"></label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Full name"
                    onChange={handleChange}
                  value={values.fullname}
                    id="fullname"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="email"></label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="example@example.com"
                  onChange={handleChange}
                  value={values.email}
                  id="email"
                  required
                />
              </div>
              <div class="form-group">
                <label for="password"></label>
                <input
                  type="password"
                  class="form-control"
                  onChange={handleChange}
                  value={values.password}
                  placeholder="password"
                  id="password"
                  required
                />
              </div>
              
              <div class="form-item form-type-select form-item-gateway-country" onChange={handleChange}
                  value={values.state} >
  <label for="state" > </label>
<select name="state" id="state" class="form-control">
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
              <label></label>
              <div onChange={handleChange}
                  value={values.dateofbirth}>
              <div class="row no-gutters " >
                <div class="form-group col-4" >
                  {/* <label for="birthdayDay" class="sr-only"></label> */}
                  <select class="form-control" id="birthdayDate" >
                    <option value="">Date</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                </div>
                <div class="form-group col-4">
                  {/* <label for="birthdayMonth" class="sr-only"
                    >Birthday month</label
                  > */}
                  <select class="form-control" id="birthdayMonth" >
                    <option value="">Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                </div>
                <div class="form-group col-4">
                  {/* <label for="birthdayYear" class="sr-only"
                    >Birthday year</label
                  > */}
                  <select class="form-control" id="birthdayYear">
                  <option value="">Year</option>
                    <option value="1980">1980</option>
                    <option value="1981">1981</option>
                    <option value="1982">1982</option>
                    <option value="1983">1983</option>
                    <option value="1984">1984</option>
                    <option value="1985">1985</option>
                    <option value="1986">1986</option>
                    <option value="1987">1987</option>
                    <option value="1988">1988</option>
                    <option value="1989">1989</option>
                    <option value="1990">1990</option>
                    <option value="1991">1991</option>
                    <option value="1992">1992</option>
                    <option value="1993">1993</option>
                    <option value="1994">1994</option>
                    <option value="1995">1995</option>
                    <option value="1996">1996</option>
                    <option value="1997">1997</option>
                    <option value="1998">1998</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                    <option value="2000">2001</option>
                    <option value="2000">2002</option>
                    <option value="2000">2003</option>
                    <option value="2000">2004</option>
                    <option value="2000">2005</option>
                  </select>
                </div>
              </div>
              </div>
              {/* <div class="form-item form-type-select form-item-gender"onChange={handleChange}
                  value={values.gender}>
  <label for="edit-gender" > </label>
 <select id="edit-gender" name="gender" class="form-select"><option value="" selected="selected">--Select Gender--</option><option value="male">Male</option><option value="female">Female</option><option value="other">Others</option></select>
</div> */}

              <button type="submit" class="btn btn-primary btn-block mb-3">
                Create account
              </button>
              <div class="alert alert-info small" role="alert">
                By clicking above you agree to our
                <a href="#" class="alert-link">Terms &amp; Conditions</a> and
                our <a href="#" class="alert-link">Privacy Policy</a>.
              </div>
              {/* <div class="text-center">
                <p>or ...</p>
                <a href="#" class="btn btn-success">Login</a>
              </div> */}
               </form>
                )}
                </Formik>
            
          </div>
        </div>
      </div>
   </div>
    )
}
export default Signup;