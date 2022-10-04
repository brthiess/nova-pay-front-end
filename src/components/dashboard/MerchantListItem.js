import React from "react";
import styles from "../styles/Dashboard.module.css";
import { Link, useRouteMatch } from "react-router-dom";

export default function MerchantListItem(props) {
  let { url } = useRouteMatch();

  return (
    <div className={styles.merchantContainer}>
      <Link
        to={url + "/" + props.merchantId}
        className={styles.merchantLink}
      ></Link>
      <div className={styles.merchantName}>{props.name}</div>
      <div className={styles.merchantLogo}>
        <img src={"/" + props.logo} alt={props.name + " Logo"}></img>
      </div>
      <div className={styles.merchantSales}>${props.sales}</div>
      <div className={styles.merchantTransactionNumbers}>
        {props.transactionNumbers}
      </div>
    </div>
  );
}
