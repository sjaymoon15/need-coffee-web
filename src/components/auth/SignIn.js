import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { signin } from '../../actions';

class SignIn extends React.Component {
  onSubmit = formProps => {
    this.props.signin(formProps);
  };

  renderErrorMessage() {
    if (!this.props.errorMessage) {
      return <div></div>;
    }
    return (
      <div class="ui error message">
        <div class="content">
          <p>{this.props.errorMessage}</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <form
        class="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <div class="field">
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </div>
        <div class="field">
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </div>
        {this.renderErrorMessage()}
        <button type="submit" class="ui button">
          Sign In!
        </button>
      </form>
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
