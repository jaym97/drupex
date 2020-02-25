// Package imports
import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

// Component import(s)
import App from './App';

// Style import(s)
import './index.css';

// Service worker
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    // Providing store (overall state) to the App component
    <Provider store={store}>
        {/* wrapping the App component to simulate normal web routing */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('drupex')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
