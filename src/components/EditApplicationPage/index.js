import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import HeaderBar from "../header-bar";
import EditApplicationForm from "../edit-application-form";
import requiresLogin from "../requires-login";
import {
  fetchSingleApplicationById,
  editApplication
} from "../../actions/protected-data";
import "./index.css";

export class EditApplicationPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchSingleApplicationById(this.props.match.params.id));
  }
  /*onSubmit(values){
    console.log(values);
    return this.props.dispatch(editApplication(values));
  }*/

  render() {
    console.log("EDIT PAGE", this.props);
    return (
      <div className="home">
        <HeaderBar />
        <h1 className="signup-title">Edit this job application</h1>
        <EditApplicationForm
          applicationDetails={this.props.applicationDetails}
          onSubmit={values => this.onSubmit(values)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  applicationDetails: state.protectedData.applicationDetails
});

export default requiresLogin()(connect(mapStateToProps)(EditApplicationPage));
