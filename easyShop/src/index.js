import React from 'react';
import ReactDOM from 'react-dom';
//import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import Search from './views/search/search'
import 'antd-mobile/dist/antd-mobile.css';
import "./scss/common.scss"
// 引入返回顶部组件
import ScrollToTop from "./components/scrollToTop/scrollToTop"
// 引入mobx
import { Provider } from 'mobx-react';
import store from './store'
// 引入路由
import { BrowserRouter } from 'react-router-dom';
import RouterView from './router/RouterView';
import routers from './router/config';
//懒加载
// import LazyLoad from "./components/lazyLoad/lazyLoad"
// 引入fastClick，解决300ms延迟
var FastClick = require('fastclick');
FastClick.attach(document.body);

ReactDOM.render(<Provider {...store}>
    <React.Fragment>
        <BrowserRouter>
            <ScrollToTop>
                <RouterView routes={routers}></RouterView>
            </ScrollToTop>
        </BrowserRouter>
    </React.Fragment>
</Provider>, document.getElementById('root'));