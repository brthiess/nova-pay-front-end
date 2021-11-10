import React from "react";
import { connect } from 'react-redux'

class DashboardHeader extends React.Component {
    render() {
        return (
            <div className="dashboard-header-container">
                {"Welcome" + this.props.username}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      username: state.username
    }
  }
  
  export default connect(mapStateToProps)(DashboardHeader)