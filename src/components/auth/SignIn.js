import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../../actions';

class SignIn extends React.Component {
  // testing signin action and connect
  componentDidMount() {
    this.props.signin({
      email: 'test@test.com',
      password: 'password123'
    });
  }
  render() {
    return <div>Sign In</div>;
  }
}

export default connect(
  null,
  { signin }
)(SignIn);
