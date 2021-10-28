import React from "react";
import styles from "./styles/SignIn.module.css";
import axios from "axios";
import store from "../app/store";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signInActive: true,
      email: "",
      password: "",
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

  handleUsernameChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  signIn = async () => {
    let signInResult = await axios.post("/user/sign-in", {
      email: this.state.email,
      password: this.state.password,
    });
    console.log(signInResult);
    store.dispatch({ type: "user/updateUsername", payload: "blah" });
    console.log("Initial state: ", store.getState());
  };

  createAccount = async () => {
    let createAccountResult = await axios.post("/user/create-account", {
      email: this.state.email,
      password: this.state.password,
    });
    console.log(createAccountResult);
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.signInContainer}>
          {/* Tab container */}
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
                onChange={this.handleUsernameChange}
              ></input>
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Password</label>
              <input
                type="password"
                placeholder="Password"
                className={styles.input}
                onChange={this.handlePasswordChange}
              ></input>
            </div>
            <div className={styles.bottom}>
              <div className={styles.forgotPassword}>Forgot Password?</div>
              <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={this.signIn}>
                  Sign In
                </button>
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
            {/* Sign up container */}
            <div className={styles.inputContainer}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                placeholder="example@example.com"
                className={styles.input}
                onChange={this.handleUsernameChange}
              ></input>
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Password</label>
              <input
                type="password"
                placeholder="Password"
                className={styles.input}
                onChange={this.handlePasswordChange}
              ></input>
            </div>
            <div className={styles.bottom}>
              <div className={styles.forgotPassword}>
                By creating an account you agree to our Terms & Privacy
              </div>
              <div className={styles.buttonContainer}>
                <button className={styles.button}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
