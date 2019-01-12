import React from "react";
import { connect } from "react-redux";
import requiresLogin from '../requires-login';
import { Link, Redirect } from "react-router-dom";
import HeaderBar from "../header-bar";
import addApplication from "../../actions/protected-data";
import AddApplicationForm from "../add-application-form";
import "./index.css";

export function AddApplicationPage(props) {
  return (
    <div className="home">
      <HeaderBar />
      <h1 className="signup-title">Add a new job application</h1>
      <AddApplicationForm />
    </div>    
  );
}

export default requiresLogin()(AddApplicationPage);
