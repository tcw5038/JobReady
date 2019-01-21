import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import HeaderBar from "./header-bar";

import RegistrationForm from "./registration-form";

export function RegistrationPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/home" />;
  }
  return (
    <div className="home">
      <HeaderBar />
      <h1 className="signup-title">Register for JobReady</h1>
      <RegistrationForm />
      <div className="login-link">
        <Link to="/">Login</Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
