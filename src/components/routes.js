import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Calculator from "../Screens/calculator";
import Restaurant from "../Screens/restaurants";
import Login from "../Screens/login";
import SignUpForm from "../Screens/SignUpForm";


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
