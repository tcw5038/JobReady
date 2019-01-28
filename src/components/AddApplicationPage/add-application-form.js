import React from "react";
import { Field, reduxForm, focus } from "redux-form";
import { addApplication } from "../../actions/protected-data";
import Input from "../input";
// import "../../index.css";

export class AddApplicationForm extends React.Component {
  onSubmit(values) {
    const {
      companyName,
      positionTitle,
      status,
      location,
      postingLink,
      notes
    } = values;
    const application = {
      companyName,
      positionTitle,
      location,
      postingLink,
      notes,
      status
    };
    console.log(application);
    var self = this;
    console.log(this);
    this.props
      .dispatch(addApplication(application))
      .then(() => self.props.history.push("/home"));
  }
  render() {
    return (
      <form
        className="add-application-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <label htmlFor="companyName">Company Name:</label>
        <Field
          component={Input}
          type="text"
          name="companyName"
          className="companyName"
        />
        <label htmlFor="positionTitle">Position Title:</label>
        <Field
          component={Input}
          type="text"
          name="positionTitle"
          className="positionTitle"
        />
        <label htmlFor="location">Location:</label>
        <Field
          component={Input}
          type="text"
          name="location"
          className="location"
        />
        <label htmlFor="postingLink">Link to job posting:</label>
        <Field
          component={Input}
          type="text"
          name="postingLink"
          className="postingLink"
        />
        <div className="add-radio-buttons">
          <div>Where are you in the application process?:</div>
          <br />
          <div className="radiobutton">
            <label>
              Pending Completion
              <Field
                name="status"
                component={Input}
                type="radio"
                value="Pending"
              />
            </label>
          </div>
          <div className="radiobutton">
            <label>
              Applied
              <Field
                name="status"
                component={Input}
                type="radio"
                value="Applied"
              />
            </label>
          </div>
          <div className="radiobutton">
            <label>
              Interviewing
              <Field
                name="status"
                component={Input}
                type="radio"
                value="Interviewed"
              />
            </label>
          </div>
          <div className="radiobutton">
            <label>
              Offered position
              <Field
                name="status"
                component={Input}
                type="radio"
                value="Offered"
              />
            </label>
          </div>
        </div>

        <br />
        <label htmlFor="notes">Notes:</label>
        <Field component={Input} type="text" name="notes" className="notes" />
        <br />
        <button type="submit" className="add-application-form-button">
          Add new application
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "add-application",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("add-application", Object.keys(errors)[0]))
})(AddApplicationForm);
