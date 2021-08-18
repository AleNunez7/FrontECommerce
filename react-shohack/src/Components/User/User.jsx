import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import Login from "./Login/Login";
import SignIn from "./SignIn/SignIn";

function User() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row mt-3">
          <div className="col-sm-6">
            <Login />
          </div>
          <div className="col-sm-6">
            <SignIn />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default User;
