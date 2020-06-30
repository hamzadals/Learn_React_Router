import React, { Component } from "react";
import { getEmployees } from "./EmployeesAPI.js";
import { withRouter } from "react-router-dom";
class Employees extends Component {
  handleClickEmployee = id => {
    this.props.history.push("/Employees/" + id);
  };
  render() {
    const employeeList = getEmployees();

    return (
      <div>
        <h1>All Employees</h1>
        {employeeList.map(employee => {
          return (
            <div onClick={this.handleClickEmployee.bind(this, employee.id)}>
              {employee.name}
            </div>
          );
        })}
        <div />
      </div>
    );
  }
}
export default withRouter(Employees);
