import React from "react";
import styles from "../styles/Documentation.module.css";

export default class Documentation extends React.Component {
  constructor() {
    super();
    this.state = {
      pages: {
        "getting-started": {
          route: "getting-started",
          title: "Getting Started",
          description:
            "NovaPay is a payment gateway service which is able to process payments on the Stellar network",
        },
        "api-requests": {
          route: "api-requests",
          title: "API Requests",
          description:
            "NovaPay is a payment gateway service which is able to process payments on the Stellar network",
        },
      },
    };
  }

  getActivePage() {
    return (
      this.state.pages[this.props.match.params.routeName] ??
      this.state.pages["getting-started"]
    );
  }

  render() {
    return (
      <div className={styles.dashboardBannerContainer}>
        <h3>{this.getActivePage().title}</h3>
        <p>{this.getActivePage().description}</p>
        
      </div>
    );
  }
}
