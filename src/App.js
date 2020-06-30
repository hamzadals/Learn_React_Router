import React from "react";
import "./styles.css";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Register from "./Register.js";
import Employees from "./Employees.js";
import Profile from "./Profile";
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Register" component={Register} />
        <Route exact path="/Employees" component={Employees} />
        <Route path="/Employees/:id" component={Profile} />
      </Switch>
    </div>
  );
}
