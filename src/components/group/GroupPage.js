import React, { Component } from 'react';
import requireAuth from '../auth/requireAuth';
import GroupList from './GroupList';

class GroupPage extends Component {
  render() {
    return <GroupList />;
  }
}

export default requireAuth(GroupPage);
