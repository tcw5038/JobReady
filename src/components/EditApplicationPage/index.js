import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import HeaderBar from "../header-bar";
import AddApplicationForm from "../add-application-form";
import requiresLogin from '../requires-login';
import "./index.css";

export function EditApplicationPage(props) {
  return (
    <div className="home">
      <HeaderBar />
      <h1 className="signup-title">Edit this job application</h1>
      <AddApplicationForm />
    </div>
  );
}
//need to prefill the form and figure out how to feed the new data
export default requiresLogin()(EditApplicationPage);

