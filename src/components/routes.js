import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Calculator from "../screens/calculator";
import Restaurant from "../screens/restaurant";
import Login from "../screens/login";
import SignUpForm from "../screens/SignUpForm";


const Routes = () => (
  <Fragment>
    <Switch>
      <Route exact={true} path="/" component={Calculator} />
      <Route path="/restaurant" component={Restaurant} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUpForm}/>
    </Switch>
  </Fragment>
);

export default Routes;
