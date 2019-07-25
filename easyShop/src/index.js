import React from 'react';
import ReactDOM from 'react-dom';
import Login from './views/login/login'
import Main from './views/main/main'
import 'antd-mobile/dist/antd-mobile.css';


// 引入mobx
import { Provider } from 'mobx-react';
import { Route, Switch, Redirect,BrowserRouter } from 'react-router-dom'
import store from './store'


ReactDOM.render(<Provider {...store}>
    <BrowserRouter>
        <Switch>
            <Redirect from="/" exact to="/main" />
            <Route path='/login' component={Login} />
            <Route path='/main' component={Main} />
        </Switch>
    </BrowserRouter>
</Provider>, document.getElementById('root'));