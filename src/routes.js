import React from "react"
import { Route, Switch } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import LandingPage from "./components/LandingPage"

const BaseRoutes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Signup} />
  </Switch>
)

export default BaseRoutes
