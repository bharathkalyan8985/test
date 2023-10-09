import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import  Signup  from "./signup";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" render={() => <Home />} />
        <Route path="/signup" render={() => <Signup />} />
      </Switch>
    </BrowserRouter>
  );
}


function Home() {
  return (
    <div>
      <h1>Login Page</h1>
      <p>Email:<input type="email"></input></p>
      <p>Password: <input type="Password"></input></p>
      <Link to="/signup" replace>Click</Link>
    </div>
  );
}
