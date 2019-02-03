// React Components
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages Components
import { HomePage, DetailsPage, SearchPage } from '../../app/main';

// Constants
// import { urlConstants } from '../../_constants';

// Main Components
export class MainRoute extends React.Component {
    render() {
        return (
            <Switch>
                {/* main */}
                <Route exact path="/" component={HomePage} />
                <Route path="/search/:id" component={SearchPage} />
                <Route path="/details/:id" component={DetailsPage} />
            </Switch>
        );
    }
}
