// React
import React from 'react';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Local Components
import { MainRoute, Navbar, Footer } from '../_components';

// Main Components
export class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Navbar />
                    <MainRoute />
                    <Footer />
                </React.Fragment>
            </BrowserRouter>
        );
    }
}
