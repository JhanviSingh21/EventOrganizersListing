import { Outlet } from "react-router-dom";
import Header from "./header.js";
// import Navbar from "./Navbar.js";
const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default Main;
