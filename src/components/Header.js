import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

function UserInfoSignedOut() {
  return (
    <Link to="/sign-in">Sign In</Link>
  )
}

function UserInfoSignedIn(props) {
  return (
    <p>{props.username}</p>
  )
}

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-logo-container">
          <Link to="/">
            <Logo></Logo>
          </Link>
        </div>
        <nav>
          <ul className="navigation-list">
            <li className="navigation-list-item">Developers</li>
            <li className="navigation-list-item">Company</li>
            <li className="navigation-list-item">Pricing</li>
          </ul>
        </nav>
        <div className="sign-in-nav-link">
          {this.props.username && this.props.username.length > 0 ? <UserInfoSignedIn username={this.props.username} ></UserInfoSignedIn> : <UserInfoSignedOut></UserInfoSignedOut>}

        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    username: state.username
  }
}

export default connect(mapStateToProps)(Header)