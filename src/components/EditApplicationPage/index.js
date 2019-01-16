import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import HeaderBar from "../header-bar";
import EditApplicationForm from "../edit-application-form";
import requiresLogin from '../requires-login';
import {fetchSingleApplicationById,  editApplication} from "../../actions/protected-data";
import "./index.css";

export class EditApplicationPage extends React.Component {
  componentDidMount(){
    console.log(this.props);
      this.props.dispatch(fetchSingleApplicationById(this.props.id))
  }
  /*onSubmit(values){
    console.log(values);
    return this.props.dispatch(editApplication(values));
  }*/

  render(){
    return (
      <div className="home">
        <HeaderBar />
        <h1 className="signup-title">Edit this job application</h1>
        <EditApplicationForm onSubmit={values => this.onSubmit(values)}/>
      </div>
    );
  }
}
  
export default requiresLogin()(EditApplicationPage);

