import React from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

function UserInfoSignedOut() {
  return (
    <Link to="/sign-in">Sign In</Link>
  )
}

function UserInfoSignedIn(props) {
  return (
    <p>{props.email}</p>
  )
}

class GuestHeader extends React.Component {
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
          {this.props.email && this.props.email.length > 0 ? <UserInfoSignedIn email={this.props.email} ></UserInfoSignedIn> : <UserInfoSignedOut></UserInfoSignedOut>}

        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    email: state.email
  }
}

export default connect(mapStateToProps)(GuestHeader)