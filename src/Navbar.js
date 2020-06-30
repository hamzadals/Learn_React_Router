import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  handleHome = () => {
    this.props.history.push("/");
  };
  handleAbout = () => {
    this.props.history.push("/About");
  };
  handleContact = () => {
    this.props.history.push("/Contact");
  };
  handleRegister = () => {
    this.props.history.push("/Register");
  };
  handleEmployees = () => {
    this.props.history.push("/Employees");
  };
  render() {
    return (
      <div className="navbar">
        <button onClick={this.handleHome}>Home</button>
        <button onClick={this.handleAbout}>About</button>
        <button onClick={this.handleContact}>Contact</button>
        <button onClick={this.handleRegister}>Register</button>
        <button onClick={this.handleEmployees}>Employees</button>

      </div>
    );
  }
}
export default withRouter(Navbar);
