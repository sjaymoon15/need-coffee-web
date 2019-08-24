import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signout } from '../actions';

class Header extends Component {
  renderAuthButton() {
    if (!this.props.auth) {
      return (
        <Link to="/signin" className="item">
          Sign In
        </Link>
      );
    }
    return (
      <button
        onClick={this.props.signout}
        className="ui button"
        style={{ margin: '5px' }}
      >
        Sign Out
      </button>
    );
  }
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Need Coffee?
        </Link>
        <div className="right menu">{this.renderAuthButton()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth.authenticated };
}

export default connect(
  mapStateToProps,
  { signout }
)(Header);
