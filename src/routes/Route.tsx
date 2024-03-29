import React from 'react';
import {
    RouteProps as ReactDOMRouteProps,
    Route as ReactDOMRoute,
} from 'react-router-dom';

import Template from '../pages/Template';

interface RouteProps extends ReactDOMRouteProps
{
    component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
    component: Component,
    ...rest
}) => {
    return(
        <ReactDOMRoute
        {...rest}
        render={() => {
            return (
                <Template>
                    <Component />
                </Template>
            );
        }}/>
    );
}

export default Route;