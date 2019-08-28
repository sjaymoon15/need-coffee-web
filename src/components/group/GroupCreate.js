import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { createGroup, searchUser } from '../../actions';

class GroupCreate extends Component {
  handleFormSubmit = formProps => {
    this.props.createGroup(formProps);
  };

  handleInputChange = event => {
    const inputValue = event.target.value;
    if (inputValue && inputValue.length > 5) {
      console.log(event.target.value);
      this.props.searchUser(event.target.value);
    }
  };

  renderSearchResults() {
    return this.props.foundUsers.map(user => {
      return <div key={user._id}>{user.email}</div>;
    });
  }

  render() {
    return (
      <div>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.handleFormSubmit)}
        >
          <div className="required field">
            <label>Name</label>
            <Field
              name="name"
              type="text"
              component="input"
              autoComplete="none"
            />
          </div>

          <div className="ui search">
            <input
              onChange={this.handleInputChange}
              className="prompt"
              type="text"
              placeholder="Find users with email..."
            />
            <div className="results">{this.renderSearchResults()}</div>
          </div>
          {this.renderSearchResults()}

          <button
            type="submit"
            className="ui button"
            style={{ marginTop: '20px' }}
          >
            Create !
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.user.foundUsers);
  return { foundUsers: state.user.foundUsers };
}

export default compose(
  connect(
    mapStateToProps,
    { createGroup, searchUser }
  ),
  reduxForm({ form: 'createGroup' })
)(GroupCreate);
