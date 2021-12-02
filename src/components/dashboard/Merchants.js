import React from "react";
import styles from "../styles/Dashboard.module.css";
import { getMerchants } from "../../ajax/merchant";
import MerchantListItem from "./MerchantListItem";

export default class Merchants extends React.Component {
  constructor() {
    super();
    this.state = {
      merchants: [],
    };
  }
  async componentDidMount() {
    let merchants = await getMerchants();
    this.setState({
      merchants: merchants,
    });
  }

  render() {
    return (
      <div className={styles.dashboardBannerContainer}>
        <h3>Merchants</h3>
        {this.state.merchants.map((merchant, i) => (
          <MerchantListItem
            key={i}
            merchantId={merchant.merchantId}
            name={merchant.name}
            transactionNumbers={merchant.transactionNumbers}
            sales={merchant.sales}
            logo={merchant.logo}
          ></MerchantListItem>
        ))}
      </div>
    );
  }
}
