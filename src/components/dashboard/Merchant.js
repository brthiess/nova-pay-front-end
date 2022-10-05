import React from "react";
import styles from "../styles/Merchant.module.css";
import { getMerchant } from "../../ajax/merchant";
import { send } from "../../ajax/transfer";

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

  sendStellar(receivingAddresss, amount, memo) {
    send(receivingAddresss, amount, memo);
  }

  render() {
    return (
      <div className={styles.merchantWrapper}>
        <div className={styles.merchantContainer}>
          <div className={styles.merchantHeader}>
            <div className={styles.merchantLogo}>
              <img
                alt={this.state.merchant.name + " Logo"}
                src={"/" + this.state.merchant.logo}
              />
            </div>
            <div className={styles.merchantName}>
              {this.state.merchant.name}
            </div>

            <div className={styles.merchantSales}>
              {this.state.merchant.sales}
            </div>
            <div className={styles.transactionNumbers}>
              {this.state.merchant.transactionNumbers}
            </div>
          </div>
        </div>
        <div className={styles.merchantTransfer}>
          <div className={styles.transferHeader}>
            <h3 className={styles.transferHeaderText}>Transfer</h3>
            <p className={styles.transferText}>
              Move your XLM to another wallet
            </p>
          </div>
        </div>
        <div className={styles.transferInputContainer}>
          <div className={styles.inputContainer}>
            <label>Amount</label>
            <input className={styles.amountInput} placeholder="0.00" />
          </div>
          <div className={styles.inputContainer}>
            <label>Receiver</label>
            <input className={styles.receiverInput} />
          </div>
          <div className={styles.inputContainer}>
            <label>Memo</label>
            <input className={styles.memoInput} />
          </div>
          <button onClick={() => this.sendStellar()}>Send</button>
        </div>
      </div>
    );
  }
}
