import React from "react";
import { connect } from "react-redux";
import HeaderBar from "../header-bar";
import EditApplicationForm from "./edit-application-form";
import requiresLogin from "../requires-login";
import { fetchSingleApplicationById } from "../../actions/protected-data";
import "./index.css";

export class EditApplicationPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchSingleApplicationById(this.props.match.params.id));
  }

  render() {
    return (
      <div className="home">
        <HeaderBar />
        <h1 className="signup-title">Edit this job application</h1>
        <EditApplicationForm
          applicationDetails={this.props.applicationDetails}
          onSubmit={values => this.onSubmit(values)}
          history={this.props.history}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  applicationDetails: state.protectedData.applicationDetails
});

export default requiresLogin()(connect(mapStateToProps)(EditApplicationPage));
