import React from "react";
import { connect } from "react-redux";
import requiresLogin from './requires-login';
import { Link, Redirect } from "react-router-dom";
import HeaderBar from "../header-bar";
import "./index.css";

export function ApplicationDetailPage(props) {
    return (
      <div className="home">
        <HeaderBar />
        <div className="companyName-detail">{props.companyName}</div>
        <div className="location-detail">{props.location}</div>
        <div className="dateAdded-detail">{props.dateAdded}</div>
        <div className="postingLink-detail">{props.postingLink}</div>
        <div className="status-detail">{props.status}</div>
        <div className="notes-detail">{props.notes}</div>
      </div>
    );
  }

  export default requiresLogin()(connect(mapStateToProps)(ApplicationDetailPage));
