import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { App } from './app/_App';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root'),
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./app/_App', () => {
        const newApp = require('./app/_App').default;
        render(newApp);
    });
}
