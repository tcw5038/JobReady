import React from "react";
import { connect } from "react-redux";
import { clearAuth } from "../actions/auth";
import { clearAuthToken } from "../local-storage";

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
    //use props.history to move back to the landing page
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    let homeButton;
    if (this.props.loggedIn) {
      logOutButton = <a onClick={() => this.logOut()}>Log out</a>;
      homeButton = <a href="/home">Home</a>
      //homeButton
    }
    return (
      <div className="header-bar">
       <div className="header-bar-right">
       {homeButton}
       {logOutButton}
        </div>
        <div className="header-bar-title">JobReady</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
