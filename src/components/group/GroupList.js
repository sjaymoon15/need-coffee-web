import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGroups } from '../../actions';
import history from '../../history';

class GroupList extends Component {
  componentDidMount() {
    this.props.fetchGroups();
  }

  onCreateGroupButtonClick() {
    history.push('/groups/create');
  }

  render() {
    return (
      <div>
        <button className="ui button" onClick={this.onCreateGroupButtonClick}>
          Create A Group
        </button>
        <div>group List</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.groups);
  return { groups: state.groups };
};

export default connect(
  mapStateToProps,
  { fetchGroups }
)(GroupList);
