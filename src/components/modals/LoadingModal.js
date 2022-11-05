import React from "react";
import { connect } from "react-redux";
import styles from "../styles/LoadingModal.module.css";

class LoadingModal extends React.Component {
  render() {
    return (
      <div
        className={
          (this.props.showLoading ? "" : styles.hidden + " ") +
          styles.loadingDarkenedBackground
        }
      >
        <div className={styles.loadingModalContainer}>
          <div className="loading-modal">Loading...</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showLoading: state.showLoading,
  };
};

export default connect(mapStateToProps)(LoadingModal);
