import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route
                        path="/repository/:repository"
                        component={Repository}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Routes;
