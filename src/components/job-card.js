import React from "react";
import { Link } from "react-router-dom";
import { deleteApplication } from "../actions/protected-data";
import { connect } from "react-redux";

export class JobCard extends React.Component {
  render() {
    let dateString = "" + this.props.dateAdded;
    dateString = dateString.slice(0, 10);
    return (
      <div className="job-card">
        <div className="row">
          <div className="column">
            <div className="job-title">
              {this.props.positionTitle} at {this.props.companyName}
            </div>
            <div className="job-status">{this.props.status}</div>
          </div>
          <div className="column">
            <div className="job-location">{this.props.location}</div>
            <div className="job-date-added">{dateString}</div>
          </div>
          <div className="column">
            {/* <Link to="/editApplication"><button className="job-card-button">Edit Application</button></Link> */}
            <Link to={`/edit/${this.props.id}`}>
              <button className="job-card-button">Edit Application</button>
            </Link>
            <button
              className="job-card-button"
              onClick={() => {
                this.props.dispatch(deleteApplication(this.props.id));
              }}
            >
              Delete Application
            </button>
          </div>
          <div className="row">
            <div className="notes">
              <b>Notes:</b> {this.props.notes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(JobCard);
