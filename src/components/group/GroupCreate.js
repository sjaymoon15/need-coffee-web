import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { createGroup } from '../../actions';

class GroupCreate extends Component {
  onSubmit = formProps => {
    this.props.createGroup(formProps);
  };

  render() {
    return (
      <div>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <div className="field">
            <label>Name</label>
            <Field
              name="name"
              type="text"
              component="input"
              autoComplete="none"
            />
          </div>

          <button type="submit" className="ui button">
            Create !
          </button>
        </form>
      </div>
    );
  }
}

export default compose(
  connect(
    null,
    { createGroup }
  ),
  reduxForm({ form: 'createGroup' })
)(GroupCreate);
