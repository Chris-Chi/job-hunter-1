import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

import Login from './container/login/login.js';
import Register from './container/register/register.js';
import reducers from './reducers'
import './config'

const store = createStore(reducers, )

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Router path="/login" component={Login} />
                <Router path="/register" component={Register}/>
            </div>
       </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
