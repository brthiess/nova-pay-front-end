import React from "react";
import { connect } from 'react-redux'

class DashboardHeader extends React.Component {
    render() {
        return (
            <div className="dashboard-header-container">
                {"Welcome" + this.props.email}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      email: state.email
    }
  }
  
  export default connect(mapStateToProps)(DashboardHeader)