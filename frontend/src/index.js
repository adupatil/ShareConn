import React from 'react';
import ReactDOM from 'react-dom'; 
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/App'
import './assets/css/index.css'
import axios from 'axios';

import {Provider} from 'react-redux';
import store from './store'


axios.defaults.baseURL='http://localhost:8000/';

ReactDOM.render(
    <Provider store={store}>
<Router>
    <App />
</Router></Provider>,document.getElementById('root'));