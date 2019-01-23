import React from "react";
import requiresLogin from "../requires-login";
import HeaderBar from "../header-bar";
import AddApplicationForm from "./add-application-form";
import "./index.css";

export function AddApplicationPage(props) {
  return (
    <div className="home">
      <HeaderBar />
      <h1 className="signup-title">Add a new job application</h1>
      <AddApplicationForm history={props.history} />
    </div>
  );
}

export default requiresLogin()(AddApplicationPage);
