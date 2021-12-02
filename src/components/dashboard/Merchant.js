import React from "react";
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
    return <div>{this.state.merchant.name}</div>;
  }
}
