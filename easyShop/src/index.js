import React from 'react';
import ReactDOM from 'react-dom';
//import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import Search from './views/search/search'
import 'antd-mobile/dist/antd-mobile.css';
import "./scss/common.scss"
// 引入mobx
import { Provider } from 'mobx-react';
import store from './store'
// 引入路由
import {BrowserRouter} from 'react-router-dom';
import RouterView from './router/RouterView';
import routers from './router/config';
// 引入fastClick，解决300ms延迟
var FastClick = require('fastclick');
FastClick.attach(document.body);

ReactDOM.render(<Provider {...store}>
    {/* <BrowserRouter>
        <Switch>
            <Route path="/search" component={Search}/>
            <Redirect from="/" exact to="/home" />
        </Switch>
    </BrowserRouter> */}
    <React.Fragment>
        <BrowserRouter>
            <RouterView routes={routers}></RouterView>
        </BrowserRouter>
    </React.Fragment>
</Provider>, document.getElementById('root'));