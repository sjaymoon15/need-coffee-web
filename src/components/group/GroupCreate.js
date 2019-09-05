import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { createGroup, addMember, removeMember } from '../../actions';

class GroupCreate extends Component {
  handleFormSubmit = formProps => {
    formProps.potentialMembers = this.props.potentialMembers;
    this.props.createGroup(formProps);
  };

  handleInputSubmit = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.props.addMember(event.target.value);
      event.target.value = '';
    }
  };

  removeMember(member) {
    this.props.removeMember(member);
  }

  renderMembers() {
    return this.props.potentialMembers.map(member => {
      return (
        <div key={member} className="item">
          <div className="right floated content">
            <div
              className="ui button"
              onClick={() => this.removeMember(member)}
            >
              Remove
            </div>
          </div>
          <div className="content" style={{ padding: '10px 0' }}>
            {member}
          </div>
        </div>
      );
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

          <div className="required field">
            <label>Members</label>
            <input
              name="members"
              type="text"
              component="input"
              placeholder="Put an email and hit Enter to add"
              onKeyDown={this.handleInputSubmit}
            />
          </div>

          <div className="ui middle aligned divided list">
            {this.renderMembers()}
          </div>

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
  return { potentialMembers: state.group.potentialMembers };
}

export default compose(
  connect(
    mapStateToProps,
    { createGroup, addMember, removeMember }
  ),
  reduxForm({ form: 'createGroup' })
)(GroupCreate);
