import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Dashboard from "../pages/Dashboard";
import Supplie from "../pages/Supplie";

const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/supplie' exact component={Supplie} />
        </Switch>
    );
}

export default Routes