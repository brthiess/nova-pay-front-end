import React from "react";
import styles from "../styles/Merchant.module.css";
import { getMerchant } from "../../ajax/merchant";

export default class Merchant extends React.Component {
  constructor() {
    super();
    this.state = {
      merchant: {},
    };
  }
  async componentDidMount() {
    let merchant = await getMerchant(this.props.match.params.merchantId);
    console.log(merchant);
    this.setState({
      merchant: merchant,
    });
  }

  render() {
    return (
      <div className={styles.merchantContainer}>
        <div className={styles.merchantName}>{this.state.merchant.name}</div>
        <div className={styles.merchantLogo}>
          <img alt={this.state.merchant.name + " Logo"}src={this.state.merchant.logo} />
        </div>
        <div className={styles.merchantSales}>{this.state.merchant.sales}</div>
        <div className={styles.transactionNumbers}>{this.state.merchant.transactionNumbers}</div>
      </div>
    );
  }
}
