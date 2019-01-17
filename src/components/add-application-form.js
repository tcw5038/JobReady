import React from "react";
import {Field, reduxForm, focus} from 'redux-form';
import {addApplication, fetchApplications, editApplication} from "../actions/protected-data";
import Input from './input';
import "../index.css";



export class AddApplicationForm extends React.Component {
    onSubmit(values) {
        const {companyName, positionTitle, location, postingLink, notes} = values;
        const application = {companyName, positionTitle, location, postingLink, notes};
        console.log(application);       
            return this.props
            .dispatch(addApplication(application))
            .then(() => this.props.history.push("/home"));
           //} 
           /*
           this.props.dispatch(addApplication(application));
           //return this.props.history.push("/home");
*/
    }
    render(){
        return(
            <form className="add-application-form" 
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <label htmlFor="companyName">Company Name:</label> 
                <Field component={Input} type="text" name="companyName" className="companyName"/>
                <label htmlFor="positionTitle">Position Title:</label> 
                <Field component={Input} type="text" name="positionTitle" className="positionTitle"/>
                <label htmlFor="location">Location:</label> 
                <Field component={Input} type="text" name="location" className="location"/>
                <label htmlFor="postingLink">Link to job posting:</label> 
                <Field component={Input} type="text" name="postingLink" className="postingLink"/>
                    <div>
                    <div>Where are you in the application process?:</div><br></br>
                            <div className="radiobutton"><label><Field name="status" component={Input} type="radio" value="pending"/>Pending Completion</label></div>
                            <div className="radiobutton"><label><Field name="status" component={Input} type="radio" value="applied"/>Applied</label></div>
                            <div className="radiobutton"><label><Field name="status" component={Input} type="radio" value="interviewed"/>Interviewing</label></div>
                            <div className="radiobutton"><label><Field name="status" component={Input} type="radio" value="offered"/>Offered position</label></div>
                    </div>
                    <br></br>
                <label htmlFor="notes">Notes:</label> 
                <Field component={Input} type="text" name="notes" className="notes"/><br></br>
                <button type="submit" className="add-application-form-button">Add new application</button>{/*Need to call our action here to collect the application information*/}
            </form>
        )
    }
}

export default reduxForm({
    form: 'add-application',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('add-application', Object.keys(errors)[0]))
})(AddApplicationForm);