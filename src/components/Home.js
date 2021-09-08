import React from "react";
import AboveTheFold from "./AboveTheFold";
import BelowTheFold from "./BelowTheFold";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <AboveTheFold></AboveTheFold>
        <BelowTheFold></BelowTheFold>
      </div>
    );
  }
}