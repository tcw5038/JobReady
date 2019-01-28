import React from "react";
import { Field, reduxForm, focus, initialize } from "redux-form";
import { editApplication } from "../../actions/protected-data";
import Input from "../input";

export class EditApplicationForm extends React.Component {
  componentDidMount() {
    console.log(this.props.applicationDetails);
    this.handleInitialize();
  }

  handleInitialize() {
    const initData = {
      companyName: this.props.applicationDetails.companyName,
      positionTitle: this.props.applicationDetails.positionTitle,
      location: this.props.applicationDetails.location,
      postingLink: this.props.applicationDetails.postingLink,
      notes: this.props.applicationDetails.notes
    };

    this.props.initialize(initData);
  }

  onSubmit(values) {
    const { companyName, positionTitle, location, postingLink, notes } = values;
    const application = {
      companyName,
      positionTitle,
      location,
      postingLink,
      notes,
      id: this.props.applicationDetails.id
    };
    console.log(application);

    return this.props
      .dispatch(editApplication(application))
      .then(() => this.props.history.push("/home"));
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
        <div>
          <div>Where are you in the application process?:</div>
          <br />
          <div className="radiobutton">
            <label>
              Pending Completion
              <Field
                name="status"
                component={Input}
                type="radio"
                value="pending"
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
                value="applied"
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
                value="interviewed"
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
                value="offered"
              />
            </label>
          </div>
        </div>
        <br />
        <label htmlFor="notes">Notes:</label>
        <Field component={Input} type="text" name="notes" className="notes" />
        <br />
        <button type="submit" className="add-application-form-button">
          Edit application
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "edit-application",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("edit-application", Object.keys(errors)[0]))
})(EditApplicationForm);
