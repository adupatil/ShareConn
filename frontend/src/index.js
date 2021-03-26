import React from 'react';
import ReactDOM from 'react-dom'; 
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/App'
import './assets/css/index.css'

import {Provider} from 'react-redux';
import store from './store'

ReactDOM.render(
    <Provider store={store}>
<Router>
    <App />
</Router></Provider>,document.getElementById('root'));