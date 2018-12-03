import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./index.css";

export default function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
      <h2>HOME!</h2>
    </div>
  );
}
