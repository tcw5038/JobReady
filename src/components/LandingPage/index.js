import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import LoginForm from "../login-form";

export function LandingPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="landing-page">
      <div className="header-bar">
        <div className="header-bar-right">
          <a href="/register">Sign up</a>
        </div>
        <div className="header-bar-title">JobReady</div>
      </div>
      <div className="splash-wrapper">
        <div className="row">
          <div className="column">
            <h1 className="landing-title">
              Get organized. <br />
              Get your dream job.
            </h1>
            <h3 className="landing-sub-title">
              Keep track of your job application process so that you can have a
              better, more effective search.
            </h3>
          </div>
          <div className="column">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="app-description-wrapper">
        <h1 className="app-description-title">Why JobReady?</h1>
        <div className="row">
          <div className="column">
            <img
              className="description-image"
              src="/images/desk.jpg"
              alt="Desk"
            />
            <p className="description-text">
              Keep track of all your job postings so that you can worry about
              more important things happening in your life.
            </p>
          </div>
          <div className="column">
            <img
              className="description-image"
              src="/images/architecture.jpg"
              alt="Architecture"
            />
            <p className="description-text">
              Quickly look through jobs that you applied to, ones you are
              currently interviewing for, and ones that you still need to apply
              for.
            </p>
          </div>
          <div className="column">
            <img
              className="description-image"
              src="/images/handshake.jpg"
              alt="Handshake"
            />
            <p className="description-text">
              Edit existing job postings by adding notes so that you can keep
              track of peoples' names, interview questions, and anything else
              important.
            </p>
          </div>
        </div>
      </div>
      <div className="get-started-cta-wrapper">
        <h1 className="cta-text">Like what you see?</h1>
        <Link to="/register">
          <button className="cta-button">Get started</button>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
