import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import HeaderBar from "../header-bar";
import "./index.css";

export default function EditApplicationPage(props) {
  return (
    <div className="home">
      <HeaderBar />
      <h1 className="signup-title">Edit this job application</h1>
      <form className="add-application-form">
        <label htmlFor="companyName">Company Name:</label> 
        <input type="text" name="companyName" className="companyName"></input>
        <label htmlFor="positionTitle">Position Title:</label> 
        <input type="text" name="positionTitle" className="positionTitle"></input>
        <label htmlFor="location">Location:</label> 
        <input type="text" name="location" className="location"></input>
        <label htmlFor="postingLink">Link to job posting:</label> 
        <input type="text" name="postingLink" className="postingLink"></input>
            <div>
            <div>Where are you in the application process?:</div><br></br>
                    <div className="radiobutton"><label><input type="radio" rel="pending"/> Still need to apply</label></div>
                    <div className="radiobutton"><label><input type="radio" rel="applied"/> Applied</label></div>
                    <div className="radiobutton"><label><input type="radio" rel="interviewed"/> Interviewing</label></div>
                    <div className="radiobutton"><label><input type="radio" rel="offered"/> Offered position</label></div>
            </div>
            <br></br>
        <label htmlFor="notes">Notes:</label> 
        <input type="text" name="notes" className="notes"></input><br></br>
        <button className="edit-application-form-button">Confirm edit</button>
  
        
      </form>
    </div>
    
  );
}