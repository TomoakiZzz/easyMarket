import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import My from "./views/My/my"
import Login from "./views/login/login"
import Home from "./views/home/home"
import 'antd-mobile/dist/antd-mobile.css';



// 引入mobx
import { Provider } from 'mobx-react';
import store from './store'


ReactDOM.render(<Provider {...store}>
    <BrowserRouter>
        <Switch>
            
            <Route path='/login' component={Login} />
            <Route path="/my" component={My}/>
            <Route path="/home" component={Home}/>
            {/* <Redirect from="/" exact to="/home" /> */}
        </Switch>
    </BrowserRouter>
</Provider>, document.getElementById('root'));