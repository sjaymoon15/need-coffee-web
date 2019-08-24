import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { signup } from '../../actions';

class SignUp extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps);
  };

  renderErrorMessage() {
    if (!this.props.errorMessage) {
      return <div></div>;
    }
    return (
      <div class="ui error message">
        <div className="content">
          <p>{this.props.errorMessage}</p>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <div className="field">
            <label>Email</label>
            <Field
              name="email"
              type="text"
              component="input"
              autoComplete="none"
            />
          </div>
          <div className="equal width fields">
            <div className="field">
              <label>First name</label>
              <div className="ui fluid input">
                <Field
                  name="first_name"
                  type="text"
                  component="input"
                  placeholder="First name"
                  autoComplete="none"
                />
              </div>
            </div>
            <div className="field">
              <label>Last name</label>
              <div className="ui fluid input">
                <Field
                  name="last_name"
                  type="text"
                  component="input"
                  placeholder="Last name"
                  autoComplete="none"
                />
              </div>
            </div>
          </div>
          <div className="field">
            <label>Password</label>
            <Field
              name="password"
              type="password"
              component="input"
              autoComplete="none"
            />
          </div>
          {this.renderErrorMessage()}
          <button type="submit" className="ui button">
            Sign Up!
          </button>
        </form>
        <div style={{ marginTop: '10px' }}>
          Already have an account? <Link to="/signin">Sign In!</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(
    mapStateToProps,
    { signup }
  ),
  reduxForm({ form: 'signup' })
)(SignUp);
