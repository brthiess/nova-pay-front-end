import React from "react";
import styles from "./styles/SignIn.module.css";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signInActive: true,
    };
  }

  setSignInActive = () => {
    this.setState({
      signInActive: true,
    });
  };
  setSignInInactive = () => {
    this.setState({
      signInActive: false,
    });
  };
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.signInContainer}>
          <div className={styles.tabContainer}>
            <ul className={styles.tabList}>
              <li
                className={
                  styles.tabItem +
                  " " +
                  (this.state.signInActive ? styles.activeTab : "")
                }
                onClick={this.setSignInActive}
              >
                Sign In
              </li>
              <li
                className={
                  styles.tabItem +
                  " " +
                  (this.state.signInActive ? "" : styles.activeTab)
                }
                onClick={this.setSignInInactive}
              >
                Sign Up
              </li>
            </ul>
          </div>
          <div
            className={
              styles.inputContainerContainer +
              " " +
              (this.state.signInActive ? "" : "hidden")
            }
          >
            {" "}
            {/* Sign in container */}
            <div className={styles.inputContainer}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                placeholder="example@example.com"
                className={styles.input}
              ></input>
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Password</label>
              <input
                type="password"
                placeholder="Password"
                className={styles.input}
              ></input>
            </div>
            <div className={styles.bottom}>
              <div className={styles.forgotPassword}>Forgot Password?</div>
              <div className={styles.buttonContainer}>
                <button className={styles.button}>Sign In</button>
              </div>
            </div>
          </div>
          <div
            className={
              styles.inputContainerContainer +
              " " +
              (this.state.signInActive ? "hidden" : "")
            }
          >
            Sign Up
          </div>
        </div>
      </div>
    );
  }
}
