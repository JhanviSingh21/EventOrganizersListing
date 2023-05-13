import logo from "./logo.svg";
import "./App.css";
//import { Redirect } from "react-router-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/main/login";
import Admin from "./components/admin";
import Header from "./components/admin/header";
import AddOrg from "./components/admin/addorg";
import AdminLogin from "./components/admin/adminlogin";
import ManageOrg from "./components/admin/manageorg";
import ManageUser from "./components/admin/manageuser";
import User from "./components/user";
import Main from "./components/main";
import Home from "./components/main/home";
import Review from "./components/main/review";
import Signup from "./components/main/signup";
import Example from "./components/main/example";
import AddReview from "./components/main/addreview";
import BrowseOrg from "./components/main/browseorg";
import OrgDetail from "./components/main/orgdetail";
import Dashboard from "./components/admin/dashboard";
import Profile from "./components/admin/profile";
import { GoogleLogin } from "react-google-login";
import AdminAuthorisor from "./components/adminAuth";
//import { Provider } from "./Context";

function App() {
  // const handleFailure = (result) => {
  //   alert(result);
  // };
  // const handleLogin = (googleData) => {
  //   console.log(googleData);
  // };
  return (
    <div>
      <BrowserRouter>
        {/* < Provider>     */}

        <Routes>
          <Route
            element={
              <AdminAuthorisor>
                <Admin />
              </AdminAuthorisor>
            }
            path="admin"
          >
            <Route element={<Dashboard />} path="dashboard" />
            <Route element={<AddOrg />} path="addorg" />
            {/* <Route element={<Header />} path="header" /> */}
            <Route element={<ManageOrg />} path="manageorg" />
            <Route element={<ManageUser />} path="manageuser" />
            <Route element={<Profile />} path="profile" />
            {/* <Route element={<Navigate to="/main/home" />} path="/" /> */}
          </Route>
          <Route element={<User />} path="user"></Route>
          <Route element={<Main />} path="main">
            <Route element={<AdminLogin />} path="adminlogin" />
            <Route element={<Home />} path="home"></Route>
            <Route element={<Review />} path="review"></Route>
            <Route element={<Login />} path="login"></Route>
            <Route element={<Signup />} path="signup"></Route>
            <Route element={<AddReview />} path="addreview"></Route>
            <Route element={<BrowseOrg />} path="browseorg"></Route>
            <Route element={<OrgDetail />} path="orgdetail/:id"></Route>
            <Route element={<Example />} path="example"></Route>
          </Route>
          <Route element={<Navigate to="/main/home" />} path="/" />
        </Routes>

        {/* </Provider>     */}
      </BrowserRouter>

      {/* <h1>React Google log in</h1>
    <div>
      <GoogleLogin>
        clientId={ProcessingInstruction.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="log in with Google"
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiesPolicy={'single_host_origin'}
      </GoogleLogin>
    </div> */}
    </div>
  );
}

export default App;
