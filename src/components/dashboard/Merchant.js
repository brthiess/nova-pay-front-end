import React from "react";
import styles from "../styles/Merchant.module.css";
import { getMerchant } from "../../ajax/merchant";
import { send } from "../../ajax/transfer";
import store from "../../app/store";

export default class Merchant extends React.Component {
  constructor() {
    super();
    this.state = {
      merchant: {},
      transferAmount: 0,
      receivingAddress: "",
      memo: "",
    };
  }
  async componentDidMount() {
    let merchant = await getMerchant(this.props.match.params.merchantId);
    console.log(merchant);
    this.setState({
      merchant: merchant,
    });
  }

  async sendStellar(receivingAddresss, amount, memo) {
    store.dispatch({ type: "modal/showLoading", payload: true });
    let sendResult = await send(receivingAddresss, amount, memo);
    store.dispatch({ type: "modal/showLoading", payload: false });
    if (sendResult.data.success) {
      const modalText =
        "Sent " +
        amount +
        "XLM to '" +
        receivingAddresss +
        "' with memo: " +
        memo;
      store.dispatch({ type: "modal/modalText", payload: modalText });
    } else {
      store.dispatch({
        type: "modal/modalText",
        payload: "Error: " + sendResult.data.errorMessage,
      });
    }
    store.dispatch({ type: "modal/showInfo", payload: true });
  }

  updateAmount(evt) {
    const val = evt.target.value;
    this.setState({
      transferAmount: val,
    });
  }

  updateReceivingAddress(evt) {
    const val = evt.target.value;
    this.setState({
      receivingAddress: val,
    });
  }

  updateMemo(evt) {
    const val = evt.target.value;
    this.setState({
      memo: val,
    });
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
            <div className={styles.merchantNameSalesContainer}>
              <div className={styles.merchantName}>
                Welcome, {this.state.merchant.name}!
              </div>

              <div className={styles.merchantSales}>
                Balance:
                <span className={styles.merchantSalesNumber}>
                  {this.state.merchant.sales} XLM
                </span>
              </div>
              <div className={styles.transactionNumbers}>
                Number of Transactions:
                <span className={styles.transactionNumbersNumber}>
                  {this.state.merchant.transactionNumbers}
                </span>
              </div>
            </div>
            <div className={styles.transferReceiveContainer}>
              <button className={styles.transferButton}>Transfer</button>
              <button className={styles.receiveButton}>Receive</button>
            </div>
          </div>
        </div>
        <div className={styles.merchantTransferContainer}>
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
              <input
                className={styles.amountInput}
                placeholder="0.00"
                value={this.state.transferAmount}
                onChange={(evt) => this.updateAmount(evt)}
              />
            </div>
            <div className={styles.inputContainer}>
              <label>Receiver</label>
              <input
                className={styles.receiverInput}
                value={this.state.receivingAddress}
                onChange={(evt) => this.updateReceivingAddress(evt)}
              />
            </div>
            <div className={styles.inputContainer}>
              <label>Memo</label>
              <input
                className={styles.memoInput}
                value={this.state.memo}
                onChange={(evt) => this.updateMemo(evt)}
              />
            </div>
            <button
              onClick={() =>
                this.sendStellar(
                  this.state.receivingAddress,
                  this.state.transferAmount,
                  this.state.memo
                )
              }
            >
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
}
