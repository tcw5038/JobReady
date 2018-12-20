import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import HeaderBar from "../header-bar";
import JobCard from "../job-card";
import FilterContainer from "../application-filter";
import {fetchApplications} from "../../actions/protected-data";
//import ApplicationFilter from "../application-filter"; Should I make a separate component for this as well?
import "./index.css";

export class HomePage extends React.Component {
  componentDidMount(){
    this.props.dispatch(fetchApplications());
  }
  render (){
    let applications = this.props.applications.map(application => <JobCard {...application} key={application.id} />)
    return (
      <div className="home">
            <HeaderBar />
              <h2>HOME!</h2>
                <div className="page-action-container">
                  <FilterContainer />
                  <Link to="/addApplication"><button className="add-application-button">Add new application</button></Link>
                </div>
              <div className="job-container">
                {applications}
              </div> 
      </div>
    );
  }
}

const mapStateToProps = state => ({
  applications:state.protectedData.applications
});

export default connect(mapStateToProps)(HomePage);

//potential solution to the checkbox filtering system can be found here: https://codepen.io/jedmac/pen/zvvBYp
