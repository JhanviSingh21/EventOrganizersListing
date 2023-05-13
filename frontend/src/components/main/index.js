import { Outlet } from "react-router-dom";
import Header from "./header.js";
const Main = () => {
  
  return (
    <>
    <Header></Header>
      <Outlet />
      </>
    )}
    export default Main;