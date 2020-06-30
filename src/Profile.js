import React, { Component } from "react";
import { getEmployeeById } from "./EmployeesAPI";
import { withRouter } from "react-router-dom";


class Profile extends Component {
constructor(props){
super(props);
const employee = getEmployeeById(this.props.match.params.id);
let employeeName="No Name";
let employeeId="No ID";
let employeeRole="No Role";
if(employee.length>0){
employeeName= employee[0].name;
employeeRole= employee[0].role;
employeeId= employee[0].id;
}

this.state = {
  name: employeeName,
  role: employeeRole,
  id:employeeId
  }
}
  render() {



    return (
<div>
<h1>Employee info:</h1>
<h3>name = {this.state.name}</h3>
<h3>ROle = {this.state.role}</h3>
<h3>ID = {this.state.id}</h3>
</div>
    );
  }
}
export default withRouter(Profile);
