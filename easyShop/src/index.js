import React from 'react';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import Login from './views/login/login'
import My from './views/My/my'
import Classification from './views/classification/classification'
import ShoppingCart from './views/ShoppingCart/ShoppingCart'
import Special from './views/special/special'
import './scss/common.scss'
// 引入mobx
import { Provider } from 'mobx-react';
import store from './store'

ReactDOM.render(<Provider {...store}>
    <BrowserRouter>
        <Switch>
            {/* <Redirect from="/" exact to="/home" /> */}
            <Route path='/login' component={Login} />
            <Route path='/my' component={My} />
            <Route path='/Classification' component={Classification} />
            <Route path='/ShoppingCart' component={ShoppingCart} />
            <Route path='/Special' component={Special} />
        </Switch>
    </BrowserRouter>
</Provider>, document.getElementById('root'));