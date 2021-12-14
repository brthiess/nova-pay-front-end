import React from "react";
import styles from "../styles/Account.module.css";
import { getAccount } from "../../ajax/account";

export default class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      account: {},
    };
  }
  async componentDidMount() {
    let account = await getAccount();
    console.log(account);
    this.setState({
      account: account,
    });
  }

  render() {
    return (
      <div className={styles.dashboardBannerContainer}>
        <h3>Account Information</h3>
        <div className={styles.accountEmailContainer}>
            <label className={styles.accountEmailLabel}>Email</label>
            <input className={styles.accountEmailInput} placeholder={this.state.account.email ?? ""}/>
        </div>
        <div className={styles.joinDate}>{this.state.account.joinDate}</div>
      </div>
    );
  }
}
