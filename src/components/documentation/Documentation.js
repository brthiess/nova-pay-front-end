import React from "react";
import styles from "../styles/Documentation.module.css";
import { Link } from "react-router-dom";

export default class Documentation extends React.Component {
  constructor() {
    super();
    const gettingStarted = {
      pageNumber: 1,
      route: "getting-started",
      title: "Getting Started",
      description:
        "NovaPay is a payment gateway service which is able to process payments on the Stellar network",
      sections: [
        {
          title: "What is Stellar?",
          content:
            "Stellar, or Stellar Lumens, is an open source, decentralized protocol for digital currency to fiat money low-cost transfers which allows cross-border transactions between any pair of currencies.  The Stellar protocol is supported by a Delaware nonprofit corporation, the Stellar Development Foundation, though this organization does not enjoy 501 tax-exempt status with the IRS.",
        },
        {
          title: "What is NovaPay?",
          content:
            "NovaPay is a payment processor that allows your online business to easily process payments in the Stellar currency.  You can easily integrate our API into your website and start accepting payments immediately.  Sell a product in the currency of your choice and we calculate the best price and show you the amount of XLM to be paid in real time.",
        },
      ],
    };
    const apiRequests = {
      pageNumber: 2,
      route: "api-requests",
      title: "API Requests",
      description:
        "NovaPay is a payment gateway service which is able to process payments on the Stellar network",
      sections: [
        {
          title: "Create an Order",
          content:
            '<pre>$ curl https://api.stellarpay.io/api/gateway?currency=native&key=eb2c4043652f7912&amount=3&description=Latte\r\n# There is a three parameter passed in GET request. Key is your merchant key(id), amount is your order amount and currency is order currency\r\n\r\n{\r\n    "_id": "9f1c1f34f388fd84",\r\n    "userId": "8ac323ce-e555-4227-a8c7-e36ecb75b46d",\r\n    "apiId": "eb2c4043652f7912",\r\n    "merchantLogo": "http:\\/\\/www.stickpng.com\\/assets\\/images\\/58428cc1a6515b1e0ad75ab1.png",\r\n    "merchantLabel": "Starbucks",\r\n    "orderAmount": "5.0000000",\r\n    "orderCurrency": {\r\n        "currency": native,\r\n        "issuer": null,\r\n        "rate": null\r\n    },\r\n    "memo": "67397c17c828c395",\r\n    "orderId": "e9fdb9489119e569",\r\n    "orderStatus": false,\r\n    "transactionId": "",\r\n    "paymentAddress": "GC5ZPC6VDWMLN66B35Q6OEY6PEGR2ZX3F7YBW4IMFX2BCLDMPJED5TXZ",\r\n    "successUrl": "starbuck0s.com",\r\n    "cancelUrl": "starbuck0s.com",\r\n    "createdAt": {}\r\n}\r\n# Can take merchant details from the request.\r\n# To follow order details take orderId from the JSON request.</pre>',
        },
      ],
    };
    const veryifyOrders = {
      pageNumber: 3,
      route: "verify-orders",
      title: "Verify Orders",
      description:
        "NovaPay is a payment gateway service which is able to process payments on the Stellar network",
      sections: [
        {
          title: "Verify an Order",
          content:
            '<pre>$ scurl https://api.stellarpay.io/api/gateway?currency=native&key=eb2c4043652f7912&amount=3&description=Latte\r\n# There is a three parameter passed in GET request. Key is your merchant key(id), amount is your order amount and currency is order currency\r\n\r\n{\r\n    "_id": "9f1c1f34f388fd84",\r\n    "userId": "8ac323ce-e555-4227-a8c7-e36ecb75b46d",\r\n    "apiId": "eb2c4043652f7912",\r\n    "merchantLogo": "http:\\/\\/www.stickpng.com\\/assets\\/images\\/58428cc1a6515b1e0ad75ab1.png",\r\n    "merchantLabel": "Starbucks",\r\n    "orderAmount": "5.0000000",\r\n    "orderCurrency": {\r\n        "currency": native,\r\n        "issuer": null,\r\n        "rate": null\r\n    },\r\n    "memo": "67397c17c828c395",\r\n    "orderId": "e9fdb9489119e569",\r\n    "orderStatus": false,\r\n    "transactionId": "",\r\n    "paymentAddress": "GC5ZPC6VDWMLN66B35Q6OEY6PEGR2ZX3F7YBW4IMFX2BCLDMPJED5TXZ",\r\n    "successUrl": "starbuck0s.com",\r\n    "cancelUrl": "starbuck0s.com",\r\n    "createdAt": {}\r\n}\r\n# Can take merchant details from the request.\r\n# To follow order details take orderId from the JSON request.</pre>',
        },
      ],
    };
    this.state = {
      pages: {
        "getting-started": gettingStarted,
        1: gettingStarted,
        "api-requests": apiRequests,
        2: apiRequests,
        "verify-orders": veryifyOrders,
        3: veryifyOrders,
      },
    };
  }

  getActivePage() {
    return (
      this.state.pages[this.props.match.params.routeName] ??
      this.state.pages["getting-started"]
    );
  }

  getNextPage() {
    return this.state.pages[this.getActivePage().pageNumber + 1];
  }
  getPreviousPage() {
    return this.state.pages[this.getActivePage().pageNumber - 1];
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.dashboardBannerContainerContainer}>
          <div className={styles.dashboardBannerContainer}>
            <h3>{this.getActivePage().title}</h3>
            <p className={styles.description}>
              {this.getActivePage().description}
            </p>
            <div className={styles.buttonContainer}>
              {this.getPreviousPage() && (
                <Link
                  className={styles.button}
                  to={this.getPreviousPage().route}
                >
                  ⇠ {this.getPreviousPage().title}
                </Link>
              )}
              {this.getNextPage() && (
                <Link className={styles.button} to={this.getNextPage().route}>
                  {this.getNextPage().title} ⇢
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            {this.getActivePage().sections.map((section) => (
              <div key={section.title} className={styles.section}>
                <div className={styles.sectionTitle}>{section.title}</div>
                <div
                  className={styles.sectionContent}
                  dangerouslySetInnerHTML={{ __html: section.content }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
