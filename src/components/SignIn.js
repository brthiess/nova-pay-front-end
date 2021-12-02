import React from "react";
import styles from "./styles/SignIn.module.css";
import axios from "axios";
import store from "../app/store";
import { setSecureId, setEmail } from "../ajax/user";

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

  handleEmailChange = (e) => {
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
    store.dispatch({type:"modal/showLoading", payload: true});
    let signInResult = await axios.post("/auth/sign-in", {
      email: this.state.email,
      password: this.state.password,
    });
    store.dispatch({type:"modal/showLoading", payload: false});
    var resultDto = signInResult.data;
    if (resultDto.success) {
      alert("Signed in!");
      setSecureId(resultDto.result.secureId);
      setEmail(resultDto.result.email);
      this.props.history.push('/dashboard');
    }
    else {
      alert("Incorrect password");
    }
  };

  createAccount = async () => {
    store.dispatch({type:"modal/showLoading", payload: true});
    let createAccountResult = await axios.post("/user", {
      email: this.state.email,
      password: this.state.password,
    });
    store.dispatch({type:"modal/showLoading", payload: false});
    if (createAccountResult.data.success) {
      store.dispatch({ type: "user/updateEmail", payload: this.state.email });
      alert("Account created!");
    }
    else {
      alert("Unable to create account");
    }
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
                onChange={this.handleEmailChange}
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
                onChange={this.handleEmailChange}
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
                <button className={styles.button} onClick={this.createAccount}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
