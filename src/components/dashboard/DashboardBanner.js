import React from "react";
import { connect } from "react-redux";
import styles from "../styles/Dashboard.module.css";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { getAccountOverviewChartData } from "../../ajax/account";

class DashboardBanner extends React.Component {
  constructor() {
    super();
    this.state = {
      chartData: {
        labels: [],
        datasets: [],
      },
    };
    this.chartReference = React.createRef();
  }
  async componentDidMount() {
    let chartData = await getAccountOverviewChartData(
      this.props.match.params.merchantId
    );
    this.setState({
      chartData: chartData.data,
    });
  }
  render() {
    return (
      <div className={styles.dashboardBannerContainer}>
        <div className={styles.dashboardWelcomeContainer}>
          {"Welcome " + this.props.email}
        </div>
        <div className={styles.dashboardOverview}>
          <h2 className={styles.dashboardOverviewHeaderText}>Overview</h2>
          <div className={styles.dashboardChart}>
            <Chart
              type="line"
              data={this.state.chartData}
              ref={this.chartReference}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.email,
  };
};

export default connect(mapStateToProps)(DashboardBanner);
