import React from 'react';
import requireAuth from '../auth/requireAuth';

class GroupList extends React.Component {
  render() {
    return <div>group List</div>;
  }
}

export default requireAuth(GroupList);
