import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signout } from '../actions';

class Header extends Component {
  renderAuthButton() {
    if (!this.props.auth) {
      return (
        <Link to="/signin" className="item">
          <i className="sign in alternate icon"></i>
        </Link>
      );
    }
    return (
      <Link onClick={this.props.signout} className="item" to="/signin">
        <i className="sign out alternate icon"></i>
      </Link>
    );
  }
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          <i className="coffee icon"></i>
        </Link>
        <div className="right menu">{this.renderAuthButton()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth.authenticated };
};

export default connect(
  mapStateToProps,
  { signout }
)(Header);
