import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/AuthRoute'
import BossInfo from './container/bossinfo/bossinfo'
import GeniusInfo from './container/geniusinfo/geniusInfo'
import DashBoard from './component/dashboard/dashboard'
import reducers from './reducers'
import './index.css'

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute />
                <Switch>
                    <Route path="/bossinfo" component={BossInfo} />
                    <Route path="/geniusinfo" component={GeniusInfo}/>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register}/>
                    {/*<Route path="/chat" component={}/>*/}
                // various components have common structures, eg. same header, same footer, etc
                // so component DashBoard is used
                // within the switch,when no Routes above are hit, DashBoard will be rendered
                    // after logging in successfully, all the pages will be managed by DashBoard
                    <Route component={DashBoard}/>
                </Switch>
            </div>
       </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
