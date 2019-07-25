import React from 'react';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import Login from './views/login/login'
import My from './views/My/my'
// 引入mobx
import { Provider } from 'mobx-react';
import store from './store'

ReactDOM.render(<Provider {...store}>
    <BrowserRouter>
        <Switch>
            {/* <Redirect from="/" exact to="/home" /> */}
            <Route path='/login' component={Login} />
            <Route path='/my' component={My} />
        </Switch>
    </BrowserRouter>
</Provider>, document.getElementById('root'));