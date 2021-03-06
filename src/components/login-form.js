import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {
    onSubmit(values) {
        let username = values.usernameLogin;
        let password = values.passwordLogin;
        return this.props.dispatch(login(username, password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                className="signin-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="username">Email:</label>
                <Field
                    component={Input}
                    type="text"
                    name="usernameLogin"
                    id="username"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="password">Password:</label>
                <Field
                    component={Input}
                    type="password"
                    name="passwordLogin"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                <button className='sign-in-button' disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
