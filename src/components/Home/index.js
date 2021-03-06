import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import requiresLogin from "../requires-login";
import HeaderBar from "../header-bar";
import JobCard from "../job-card";
import FilterContainer from "./application-filter";
import { fetchApplications } from "../../actions/protected-data";
import "./index.css";
// import "url('https://fonts.googleapis.com/css?family=Lato&display=swap')";

export class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchApplications(""));
  }
  render() {
    let applications = this.props.applications.map(application => (
      <JobCard {...application} key={application.id} />
    ));
    return (
      <div className="home">
        <HeaderBar />
        <h2>HOME!</h2>
        <div className="page-action-container">
          <FilterContainer />
          <Link to="/addApplication">
            <button className="add-application-button">Add Application</button>
          </Link>
        </div>
        <div className="job-container">{applications}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  applications: state.protectedData.applications
});

export default requiresLogin()(connect(mapStateToProps)(HomePage));
