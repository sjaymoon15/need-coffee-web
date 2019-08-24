import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { signin } from '../../actions';

class SignIn extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps);
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
            Sign In!
          </button>
        </form>
        <div style={{ marginTop: '10px' }}>
          Don't have an account? <Link to="/signup">Sign Up!</Link>
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
    { signin }
  ),
  reduxForm({ form: 'signin' })
)(SignIn);
